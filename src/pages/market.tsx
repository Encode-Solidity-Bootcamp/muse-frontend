
import styles from '@/styles/Home.module.css'
import { Navbar, Footer,Hero } from '@/components'
import '@rainbow-me/rainbowkit/styles.css';
import { config } from 'process';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { sepolia, goerli, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    SimpleGrid,
    Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb
  } from '@chakra-ui/react';
  import ReactPlayer from 'react-player';

  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';


const ALCHEMY_ID: string = process.env.ALCHEMY_ID || '';
const { chains, provider } = configureChains(
  [sepolia, goerli, polygonMumbai, ],
  [
    alchemyProvider({ apiKey: ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Muse',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


export default function MarketPlace() {
  

  return (
    <>
     <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider  theme={darkTheme({
      accentColor: '#7b3fe4',
      accentColorForeground: 'white',
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    })}
    coolMode modalSize="compact" chains={chains}>
        
      <main className={styles.main}>
      <Navbar/>
      <Heading
            fontWeight={700}
            fontSize={'45px'}
            textAlign={'center'}
            fontFamily={'outfif'}
            lineHeight={'91px'}>
            Explore Wonderful Artists
          </Heading>

    
     <Stack 
     py={4}
     display={'grid'} 
       
     gridTemplateColumns={'repeat(4, 1fr)'} 
     gridAutoRows={'min(0,auto)'} 
     
    >
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
        
        zIndex={1}>
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
          }}>
          <Image
          alt='Artist Cover'
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Artist
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Heavens Gate Volume 1        </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              Price: 0.02 ETH
            </Text>
          </Stack>
          
        </Stack>
        <Box >
          <center><h1>Snippet: </h1></center>
          <ReactPlayer height={'100px'} url="./song.mp3" playing={false} controls={true}  width={'300px'}/>
          <center><Button mt={6}>Buy</Button></center>
          </Box>
         
      </Box>

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
        
        zIndex={1}>
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
          }}>
          <Image
          alt='Artist Cover'
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Artist
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Heavens Gate Volume 1        </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              Price: 0.02 ETH
            </Text>
          </Stack>
          
        </Stack>
        <Box >
          <center><h1>Snippet: </h1></center>
          <ReactPlayer height={'100px'} url="./song.mp3" playing={false} controls={true}  width={'300px'}/>
          <center><Button mt={6}>Buy</Button></center>
          </Box>
         
      </Box>

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
        
        zIndex={1}>
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
          }}>
          <Image
          alt='Artist Cover'
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Artist
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Heavens Gate Volume 1        </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              Price: 0.02 ETH
            </Text>
          </Stack>
          
        </Stack>
        <Box >
          <center><h1>Snippet: </h1></center>
          <ReactPlayer height={'100px'} url="./song.mp3" playing={false} controls={true}  width={'300px'}/>
          <center><Button mt={6}>Buy</Button></center>
          </Box>
         
      </Box>

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
        
        zIndex={1}>
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
          }}>
          <Image
          alt='Artist Cover'
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Artist
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Heavens Gate Volume 1        </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              Price: 0.02 ETH
            </Text>
          </Stack>
          
        </Stack>
        <Box >
          <center><h1>Snippet: </h1></center>
          <ReactPlayer height={'100px'} url="./song.mp3" playing={false} controls={true}  width={'300px'}/>
          <center><Button mt={6}>Buy</Button></center>
          </Box>
         
      </Box>

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
        
        zIndex={1}>
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
          }}>
          <Image
          alt='Artist Cover'
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Artist
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Heavens Gate Volume 1        </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              Price: 0.02 ETH
            </Text>
          </Stack>
          
        </Stack>
        <Box >
          <center><h1>Snippet: </h1></center>
          <ReactPlayer height={'100px'} url="./song.mp3" playing={false} controls={true}  width={'300px'}/>
          <center><Button mt={6}>Buy</Button></center>
          </Box>
         
      </Box>
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
        
        zIndex={1}>
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
          }}>
          <Image
          alt='Artist Cover'
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Artist
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Heavens Gate Volume 1        </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              Price: 0.02 ETH
            </Text>
          </Stack>
          
        </Stack>
        <Box >
          <center><h1>Snippet: </h1></center>
          <ReactPlayer height={'100px'} url="./song.mp3" playing={false} controls={true}  width={'300px'}/>
          <center><Button mt={6}>Buy</Button></center>
          </Box>
         
      </Box>

      
     
     

     </Stack>
     
  
        
      <Footer />
      </main>
      </RainbowKitProvider>
    </WagmiConfig>
     
    </>
  )
}
