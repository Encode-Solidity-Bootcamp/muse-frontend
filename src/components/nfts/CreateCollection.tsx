import { pushImgToStorage, putJSONandGetHash } from "@/utils";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { Flex, useColorModeValue, Stack, Heading, FormControl, FormLabel, Center, Avatar, AvatarBadge, IconButton, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
    const { isOpen, onOpen, onClose } = useDisclosure();
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
    const [collectionInfoHash, setCollectionInfoHash] = useState('')



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
      setQuantity((quantity) => [...quantity, itemQuantity]);
      try{
        const itemObj: Item = { itemName, itemDescription, itemImageUrl, itemQuantity, itemPrice};
        setItemsObject((prev) => [...prev, itemObj]);   

        //addloading modal
        const itemImgHash = await pushImgToStorage(itemImage);  
        const itemSnippetHash = await pushImgToStorage(itemSnippet);
        const itemSongHash = await pushImgToStorage(itemSong);
        const item = {itemName, itemDescription, itemImgHash, itemPrice};
        const itemHash = await putJSONandGetHash(item);
        if(itemImgHash && itemSnippetHash && itemSongHash && itemHash) {console.log(`ALLHASHED!`)}
        setItemsHash((prev)=> [...prev, itemHash]);
        //endLoading modal
        console.log(itemsHash)

      } catch (err){
        console.log(err)
      }
    }
    const CreateCollection = async(e:any) => {
      e.preventDefault();

      //  // upload artist to Fillion
      //  const txResponse = await FactoryContract.deployERC1155(
      //   collectionHash,
      //   items,
      //   ids,
      //   quantity
      // );

    }
    const ids = [];
    for (let i = 1; i <= itemsObject.length; i++) {
      ids.push(i);
    }

    const modalHandler = async() => {
      if(!collectionImageUrl) return alert('no Image')
      if(!collectionName) return alert(`no name`);
      if(!collectionDescription) return alert(`no desc`);
      const collectionImgHash = await pushImgToStorage(collectionImage); 
      const collectionInfo = {collectionImgHash, collectionDescription, collectionName} ;

      const collectionHash = await putJSONandGetHash(collectionInfo);

      setCollectionInfoHash(collectionHash);

      onOpen();
    }

   

  return (
    <>
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


