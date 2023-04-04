import styles from '@/styles/Home.module.css'
import { motion } from "framer-motion";

import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    SimpleGrid,
    Collapse,
    useDisclosure,
    Fade,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    Avatar,
    Center,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
   
  } from '@chakra-ui/react'
  import dynamic from 'next/dynamic'
import { useState } from 'react';

  const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
  
  const IMAGE = 'https://cdn.punchng.com/wp-content/uploads/2022/12/18034549/Davido-1.jpg'
  const MotionBox = motion(Box);

export default function NftCard() {
  const { isOpen,onOpen, onClose } = useDisclosure();
  const [amount, setAmount] = useState('');

  return (
    <>
     <SimpleGrid  columns={4} spacing='45px'>
   
         <MotionBox
    
    animate={{ opacity: isOpen ? 1 : 1, scale: !isOpen ? .79 : 1 }}
    transition={{ duration: 3 }}
                role={'group'}
                p={6}
                mx={9}
                mb={10}
                py={7}
                px={4}
                maxW={'370px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                height={'550px'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${IMAGE})`,
                    filter: 'blur(10px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(10px)',
                    },
                  }}
                >
                  <Image
                    alt="Artist Cover"
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'gray.500'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Davido
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Assurance{' '}
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      Price: 0.02 ETH
                    </Text>
                  
                  </Stack>
                  <Stack direction={'row'} align={'center'}>
                   
                    <Text fontWeight={800} fontSize={'xl'}>
                      Quantity: 80/100copies
                    </Text>
                  </Stack>
                </Stack>
                <center>
                    <h1>Snippet: </h1>
                  </center>
                <Box mt={-5} px={4}>
                 
                  <ReactPlayer
                    height={'100px'}
                    url="./song.mp3"
                    playing={false}
                    controls={true}
                    width={'250px'}
                  />
                  <center>
                                        
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Purchase NFTs</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
        
      <FormControl id="userName" isRequired>
        <FormLabel>Amount</FormLabel>
        <Input
          placeholder="Howmany copies would you like"
          _placeholder={{ color: 'gray.500' }}
          type="text"
          required
          onChange={(e)=> {setAmount(e.target.value)}}
          
        />
        
      </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Buy</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
       
           <Button mt={6} my={2} onClick={onOpen}>Buy</Button>
                  </center>
                </Box>
              </MotionBox>
             
              
              </SimpleGrid>
        
    </>
  )
}
