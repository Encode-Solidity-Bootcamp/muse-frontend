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
   
    ModalOverlay,
    Link,
   
  } from '@chakra-ui/react'
  import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getJSONFromCID } from '@/utils';
import { ARTIST_CONTRACT_ADDRESS, ARTIST_ABI } from '@/contracts/constants';
import { getAccount, readContract } from '@wagmi/core';

type Artist = {
  artistName: string;
  bio: string;
  imgHash: string;
 
}
interface ContractData {
  artistDetails: string;
} 

  const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

 
  
  const IMAGE = 'https://cdn.punchng.com/wp-content/uploads/2022/12/18034549/Davido-1.jpg'
  const MotionBox = motion(Box);

export default function ArtistCard({artist}: any) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  let { artistAddress, artistDetails, dateJoined, id } = artist;
  //convert id from hex to int
  let idHex = id.toHexString();
  let idInt = parseInt(idHex.substring(2), 16);
  //convert dateJoined from hex to int
  dateJoined = dateJoined.toHexString();
  dateJoined = parseInt(dateJoined.substring(2), 16);
  //convert dateJoined from epoch to date
  dateJoined = new Date(dateJoined * 1000);
  dateJoined = dateJoined.toLocaleDateString();



//   const getItems = async () => {
//     try {
    
//       const res = await axios.get('https://web-production-b147.up.railway.app/getArtist', {headers});
//       console.log(res.data)
//       setArtistInfo(res.data);
//     } catch (error) {
//       console.log(error)
//     }
//   }


  useEffect(()=> {    
    const fetchData = async () => {
      //fetch artist's name, bio, and profile picture from IPFS using artistDetails as the hash
      try {
         const artist = await getJSONFromCID(artistDetails)
        
        setName(artist.artistName);
        setBio(artist.bio);
        setImageUrl(artist.imgHash);
      } catch (e) {
       
      }
    };
    fetchData();
  }, [artistDetails]);

  const object = {
    artistAddress,
    dateJoined,
    idInt,
    name,
    imageUrl,
    bio,
  };

  return (
    <>
     
           <MotionBox
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
           height={'450px'}
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
               src={
                `https://ipfs.io/ipfs/${imageUrl}` }
             />
           </Box>
           <Stack pt={10} align={'center'}>
             <Text
               color={'gray.500'}
               fontSize={'sm'}
               textTransform={'uppercase'}
             >
            svatician
             </Text>
             <Heading
               fontSize={'2xl'}
               fontFamily={'body'}
               fontWeight={500}
             >
            {name}
             </Heading>
             <Stack direction={'row'} align={'center'}>
             <Box mt={5} px={4}>           
           
             <Link href={`/artist/${artistAddress}`}>
             <Button py={5} mt={9} width={'60'} my={2} >View Profile</Button>
             </Link>
                                  
     
        
          </Box>
             
             </Stack>
            
           </Stack>          
         </MotionBox>
             
          
        
    </>
  )
}
