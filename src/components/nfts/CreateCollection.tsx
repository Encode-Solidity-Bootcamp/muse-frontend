import { SmallCloseIcon } from "@chakra-ui/icons";
import { Flex, useColorModeValue, Stack, Heading, FormControl, FormLabel, Center, Avatar, AvatarBadge, IconButton, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";


export default function CreateCollection() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
  

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
        />
            
          </Center>
         
        </Stack>
      </FormControl>
      <FormControl id="userName" isRequired>
        <FormLabel>Collection Name</FormLabel>
        <Input
          placeholder="collection name"
          _placeholder={{ color: 'gray.500' }}
          type="text"
        />
      </FormControl>
      
      <FormControl id="description" isRequired>
        <FormLabel>Description</FormLabel>
        <Input
          placeholder="description"
          _placeholder={{ color: 'gray.500' }}
          type="text"
        />
      </FormControl>
      <Stack spacing={6} direction={['column', 'row']}>
       
        <Button
          bg={'blue.400'}
          onClick={onOpen}
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
          <ModalHeader>Add Items to collection</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl id="image" >
        <FormLabel> Image</FormLabel>
        <Stack direction={['column', 'row']} spacing={6}>
          <Center>
          <Input
          placeholder="Image"
          _placeholder={{ color: 'gray.500' }}
          type="file"
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
        />
      </FormControl>
      
      <FormControl id="description" isRequired>
        <FormLabel>Description</FormLabel>
        <Input
          placeholder="what is the song about"
          _placeholder={{ color: 'gray.500' }}
          type="text"
        />
      </FormControl>

      <FormControl id="quantity" isRequired>
        <FormLabel>Quantity</FormLabel>
        <Input
          placeholder="quantity"
          _placeholder={{ color: 'gray.500' }}
          type="number"
        />
      </FormControl>

      <FormControl id="price" isRequired>
        <FormLabel>Price</FormLabel>
        <Input
          placeholder="price"
          _placeholder={{ color: 'gray.500' }}
          type="number"
        />
      </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Add Item</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
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
  
  )
}


