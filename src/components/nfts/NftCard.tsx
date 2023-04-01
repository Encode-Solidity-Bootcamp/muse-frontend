import styles from '@/styles/Home.module.css'

import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
   
  } from '@chakra-ui/react'
  import dynamic from 'next/dynamic'

  const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
  
  const IMAGE = 'https://cdn.punchng.com/wp-content/uploads/2022/12/18034549/Davido-1.jpg'


export default function NftCard() {
  return (
    <>
         <Box
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
                    Artist
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    Heavens Gate Volume 1{' '}
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      Price: 0.02 ETH
                    </Text>
                  </Stack>
                </Stack>
                <Box>
                  <center>
                    <h1>Snippet: </h1>
                  </center>
                  <ReactPlayer
                    height={'100px'}
                    url="./song.mp3"
                    playing={false}
                    controls={true}
                    width={'300px'}
                  />
                  <center>
                    <Button mt={6}>Buy</Button>
                  </center>
                </Box>
              </Box>
        
    </>
  )
}