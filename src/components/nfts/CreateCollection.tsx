import { pushImgToStorage, putJSONandGetHash } from "@/utils";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { Flex, useColorModeValue, Stack, Heading, FormControl, FormLabel, Center, Avatar, AvatarBadge, IconButton, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { prepareWriteContract, writeContract } from '@wagmi/core'
import { COLLECTION_ABI, FACTORY_ABI, FACTORY_CONTRACT_ADDRESS } from "@/contracts/constants";
import { useContract, useProvider, useSigner } from "wagmi";
import { ethers } from "ethers";


type ImageState = {
  file: File | null;
  previewUrl: string | null;
};
type Item = {
  itemName: string;
  itemPrice: string;
  itemQuantity: number;
  itemDescription: string;
  itemImageUrl: string;
}


export default function CreateCollection() {
  const provider = useProvider();
  const signer = useSigner();
  const ContractInstance = useContract({
    address: FACTORY_CONTRACT_ADDRESS,
    abi: FACTORY_ABI,
    signerOrProvider: signer.data || provider,
  })
 
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const [collectionImage, setCollectionImage] = useState<ImageState>({
      file: null,
      previewUrl: null,
    });
    const [collectionImageUrl, setCollectcionImageUrl] = useState('')
    const [collectionName, setCollectionName] = useState('');
    const [collectionDescription, setCollectionDescription] = useState('');

    const [itemImage, setItemImage] = useState<ImageState>({
      file: null,
      previewUrl: null,
    });
    const [itemSnippet, setItemSnippet] = useState<ImageState>({
      file: null,
      previewUrl: null,
    });
    const [itemSong, setItemSong] = useState<ImageState>({
      file: null,
      previewUrl: null,
    });
    const [itemImageUrl, setItemImageUrl] = useState('')
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemPrice, setItemPrice] = useState('');

    const [itemsObject, setItemsObject] = useState<Item[]>([]);
    const [itemsHash, setItemsHash ] = useState<string[]>([])
    const [quantity, setQuantity] = useState<number[]>([]);
    const [collectionInfoHash, setCollectionInfoHash] = useState('');
    const [loading, setLoading] = useState(false)


    const toastError =(msg: string) => {
      return toast({
        title: msg,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    const toastSuccess =(msg: string, description: string) => {
      return toast({
        title: msg,
        description: description,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }

    const handleCollectionImageChange = (e: any) => {
      setCollectionImage(e.target.files[0]);
      setCollectcionImageUrl(URL.createObjectURL(e.target.files[0]));
    };
    const handleItemImageChange = (e: any) => {
      setItemImage(e.target.files[0]);
      setItemImageUrl(URL.createObjectURL(e.target.files[0]));

    };
    const handleItemSnippetChange = (e: any) => {
      setItemSnippet(e.target.files[0]);
    };
    const handleItemSongChange = (e: any) => {
      setItemSong(e.target.files[0]);
    };

    
  

    const addItem = async (e:any) => {
      e.preventDefault();
      //LOOOK HEREEEEEE
     
      try{
       
        if(!itemImage && !itemImageUrl) return toastError('Please upload an image') ;
        if(!itemSnippet) return toastError('please add a snippet');
        if(!itemSong) return toastError('please add a song')
        if(!itemDescription || !itemName || !itemPrice || !itemQuantity ) return toastError('plesase fill the required fields')


        setQuantity((quantity) => [...quantity, itemQuantity]);
        const itemObj: Item = { itemName, itemDescription, itemImageUrl, itemQuantity, itemPrice};
        setItemsObject((prev) => [...prev, itemObj]); 


        //addloading modal
        setLoading(true)
        const itemImgHash = await pushImgToStorage(itemImage);  
        const itemSnippetHash = await pushImgToStorage(itemSnippet);
        const itemSongHash = await pushImgToStorage(itemSong);
        const item = {itemName, itemDescription, itemImgHash, itemPrice};
        const itemHash = await putJSONandGetHash(item);
        if(itemImgHash && itemSnippetHash && itemSongHash && itemHash) {console.log(`ALLHASHED!`)}
        setItemsHash((prev)=> [...prev, itemHash]);
        //endLoading modal
        setLoading(false)
        setItemImage({
          file: null,
          previewUrl: null,
        })
        setItemSong({
          file: null,
          previewUrl: null,
        });
        setItemSnippet({
          file: null,
          previewUrl: null,
        });
        setItemDescription('');
        setItemName('');
        setItemQuantity(0);
        setItemPrice('');
        toastSuccess('Item added', 'successfully added item');
        onClose();
       

      } catch (err){
        console.log(err)
      }
    }
  
   

    const modalHandler = async() => {
      if(!collectionImageUrl) return alert('no Image')
      if(!collectionName) return alert(`no name`);
      if(!collectionDescription) return alert(`no desc`);
      if(!collectionInfoHash) {
        setLoading(true)
        const collectionImgHash = await pushImgToStorage(collectionImage); 
        const collectionInfo = {collectionImgHash, collectionDescription, collectionName} ;
  
        const collectionHash = await putJSONandGetHash(collectionInfo);
  
        setCollectionInfoHash(collectionHash);
        setLoading(false)
        onOpen();
  
      }
      if(collectionInfoHash){
        onOpen();
      }

     
     
    }
    const createCollection = async(e:any) => {

      e.preventDefault();
      try {
        setLoading(true)
      const ids = [];
      for (let i = 1; i <= itemsObject.length; i++) {
        ids.push(i);
      }
       if(!ContractInstance) return;
      const txResponse = await ContractInstance.deployERC1155(
        collectionInfoHash, 
        itemsHash, 
        ids, 
        quantity
      );
      const data = await txResponse.wait();
      const contractAdd = data.events.find((e: { event: string; }) => e.event === 'ERC1155Created').args[1]
      console.log(data.events.find((e: { event: string; }) => e.event === 'ERC1155Created').args[1])
      console.log(data.events[1].address)

      const collectionInstance = new ethers.Contract(
        contractAdd,
        COLLECTION_ABI,
        signer.data || provider,
      )
      // const idss = await collectionInstance.token_ids()
      // const res = await  idss.wait();
      // console.log(`IDS: `,res)
      
      //MINT-ALL
      const tx = await collectionInstance.mintAll()
      const d = tx.wait();
      console.log(d)

      // const config = await prepareWriteContract({
      //   address: FACTORY_CONTRACT_ADDRESS, 
      //   abi: FACTORY_ABI,
      //   functionName: 'deployERC1155',
      //   args: [collectionInfoHash, itemsHash, ids, quantity]
      // })
      // const data = await writeContract(config);
      // const receipt = await  data.wait();
      // console.log(receipt)
      

      if(data) {
        toastSuccess('Collection Created', 'Ouu! yeah go Svaticiian!');
      }
      setLoading(false)

     


        
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
          }

   

  return (
    <>
     <Modal isOpen={loading} onClose={()=>{!loading}} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
        <Center><Spinner  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl' /></Center>
        </ModalBody>
        
        
      </ModalContent>
    </Modal>
    <Flex
    minH={'10vh'}
    align={'center'}
    justify={'center'}
    
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack
      spacing={4}
      w={'full'}
      maxW={'md'}
      bg={useColorModeValue('white', 'gray.700')}
      rounded={'xl'}
      boxShadow={'lg'}
      p={6}
      my={12}>
      <Heading textAlign={'center'} lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
       Create  A Collection
      </Heading>
      <FormControl id="userName" >
        <FormLabel> Image</FormLabel>
        <Stack direction={['column', 'row']} spacing={6}>
          <Center>
          <Input
          placeholder="UserName"
          _placeholder={{ color: 'gray.500' }}
          type="file"
          onChange={handleCollectionImageChange}
        />
        <br />
        {collectionImageUrl && <Avatar size='md' p={2} name={collectionName} src={collectionImageUrl} />}
            
          </Center>
         
        </Stack>
      </FormControl>
      <FormControl id="userName" isRequired>
        <FormLabel>Collection Name</FormLabel>
        <Input
          placeholder="collection name"
          _placeholder={{ color: 'gray.500' }}
          type="text"
          onChange={(e) => {setCollectionName(e.target.value)}}
        />
      </FormControl>
      
      <FormControl id="description" isRequired>
        <FormLabel>Description</FormLabel>
        <Input
          placeholder="description"
          _placeholder={{ color: 'gray.500' }}
          type="text"
          onChange={(e) => {setCollectionDescription(e.target.value)}}
        />
      </FormControl>
      <Stack spacing={6} direction={['column', 'row']}>
       
        <Button
          bg={'blue.400'}
          onClick={modalHandler}
          color={'white'}
          w="full"
          _hover={{
            bg: 'blue.500',
          }}>
          Add Items(songs) to Collection (album/EP)
        </Button>
      </Stack>
    </Stack>
  </Flex>

  

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Items to collection </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl id="image" >
        <FormLabel> Cover Image</FormLabel>
        <Stack direction={['column', 'row']} spacing={6}>
          <Center>
          <Input
          placeholder="Image"
          _placeholder={{ color: 'gray.500' }}
          type="file"
          onChange={handleItemImageChange}
          />
          <br />
          {itemImageUrl && <Avatar size='md' p={2} name={itemName} src={itemImageUrl} />}
            
          </Center>
         
        </Stack>
      </FormControl>
      <FormControl id="snippet" >
        <FormLabel py={1}> Snippet </FormLabel>
        <Stack direction={['column', 'row']} spacing={6}>
          <Center>
          <Input
          placeholder="Snippet"
          _placeholder={{ color: 'gray.500' }}
          type="file"
          onChange={handleItemSnippetChange}
          />
         
            
          </Center>
         
        </Stack>
      </FormControl>
      <FormControl id="image" >
        <FormLabel py={2}> Item(song)</FormLabel>
        <Stack direction={['column', 'row']} spacing={6}>
          <Center>
          <Input
          placeholder="Image"
          _placeholder={{ color: 'gray.500' }}
          type="file"
          onChange={handleItemSongChange}
          />
         
            
          </Center>
         
        </Stack>
      </FormControl>
      <FormControl id="userName" isRequired>
        <FormLabel>Item Name</FormLabel>
        <Input
          placeholder="song title"
          _placeholder={{ color: 'gray.500' }}
          type="text"
          onChange={(e)=> {setItemName(e.target.value)}}
        />
      </FormControl>
      
      <FormControl id="description" isRequired>
        <FormLabel>Description</FormLabel>
        <Input
          placeholder="what is the song about"
          _placeholder={{ color: 'gray.500' }}
          type="text"
          onChange={(e)=> {setItemDescription(e.target.value)}}
        />
      </FormControl>

      <FormControl id="quantity" isRequired>
        <FormLabel>Quantity</FormLabel>
        <Input
          placeholder="quantity"
          _placeholder={{ color: 'gray.500' }}
          type="number"
          onChange={(e)=> {setItemQuantity(Number(e.target.value))}}
        />
      </FormControl>

      <FormControl id="price" isRequired>
        <FormLabel>Price</FormLabel>
        <Input
          placeholder="price"
          _placeholder={{ color: 'gray.500' }}
          type="number"
          onChange={(e)=> {setItemPrice(e.target.value)}}
        />
      </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={addItem}>Add Item</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      

  {itemsObject.length > 0 ? (
    <>
    <Heading
              fontWeight={700}
              fontSize={'25px'}
              textAlign={'center'}
              fontFamily={'outfif'}
              lineHeight={'91px'}
              my={-19}
              py={-20}
            >
             Collection Items ()
            </Heading>
     <TableContainer >
     <Table size={'md'} variant='striped' align="center" colorScheme='teal' width={'50%'}>
       <TableCaption>collection items</TableCaption>
       <Thead>
         <Tr>
           <Th>#</Th>
           <Th>cover image</Th>
           <Th>Name</Th>
           <Th>Description</Th>
           <Th isNumeric>Quantity</Th>
           <Th isNumeric>Price</Th>
         </Tr>
       </Thead>
       <Tbody>
        {itemsObject.map((item:any,index) =>(
          <Tr key={index}>
            <Td>{index + 1}</Td>
            <Td><Avatar size='md' p={2} name={itemName} src={item.itemImageUrl}/></Td>
            <Td>{item.itemName}</Td>
           <Td>{item.itemDescription}</Td>
           <Td isNumeric>{item.itemQuantity}</Td>
           <Td isNumeric>{item.itemPrice} ETH</Td>
         </Tr>
        ))}
        
         
          
          
        
        
       </Tbody>
       <Tfoot>
         <Tr>
         <Th>#</Th>
           <Th>cover image</Th>
           <Th>Name</Th>
           <Th>Description</Th>
           <Th isNumeric>Quantity</Th>
           <Th isNumeric>Price</Th>
         </Tr>
       </Tfoot>
     </Table>
   </TableContainer>
   <Center><Button
          bg={'blue.400'}
          
          color={'white'}
          onClick={createCollection}
          textAlign={'center'}
          _hover={{
            bg: 'blue.500',
          }}>
          Create collection
        </Button></Center>
</>
  ): null }
 




  </>
  
  )
}


