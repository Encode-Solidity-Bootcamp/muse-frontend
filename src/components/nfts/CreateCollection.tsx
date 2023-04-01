import { SmallCloseIcon } from "@chakra-ui/icons";
import { Flex, useColorModeValue, Stack, Heading, FormControl, FormLabel, Center, Avatar, AvatarBadge, IconButton, Button, Input } from "@chakra-ui/react";


export default function CreateCollection() {
  
  

  return (
    <Flex
    minH={'100vh'}
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
          color={'white'}
          w="full"
          _hover={{
            bg: 'blue.500',
          }}>
          Submit
        </Button>
      </Stack>
    </Stack>
  </Flex>
  )
}
