import styles from '@/styles/Home.module.css'
import { motion } from "framer-motion";

import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Link,
    SimpleGrid,
   
  } from '@chakra-ui/react'
  import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArtistCard } from '@/components/nfts';
import { ARTIST_CONTRACT_ADDRESS, ARTIST_ABI } from '@/contracts/constants';
import { readContract } from '@wagmi/core';

type Artist = {
  artistName: string;
  bio: string;
  imgHash: string;
 
}
interface ContractData {
  id: number;
  artistAddress: string;
  artistDetails: string;
  
} 

const IMAGE = 'https://cdn.punchng.com/wp-content/uploads/2022/12/18034549/Davido-1.jpg'



export default function ArtistsPage() {
  const [artistInfo, setArtistInfo] = useState<ContractData[]>([]);

  const getArtists = async ()=>{
    try {
     
        const data: ContractData[] = await readContract({
          address: ARTIST_CONTRACT_ADDRESS,
          abi: ARTIST_ABI,
          functionName: 'getAllArtists',
          
        }) as ContractData[];
        setArtistInfo(data)
  
    
        // const artistDetails = await getJSONFromCID(data.artistDetails)
        
     
    }
     catch (error) {
  
      console.log(error)  
    }
  
  
  }
  
  useEffect(()=> {    
     getArtists(); 
  }, [])
      

  const headers = {
  
    "content-type": "application/json",
}



  return (
    <>
     
          <main className={styles.main}>
            <Navbar />
            <Heading
              fontWeight={700}
              fontSize={'45px'}
              textAlign={'center'}
              fontFamily={'outfif'}
              lineHeight={'91px'}
              mb={10}
            >
              Meet Our Svaticians
            </Heading>

            <SimpleGrid  columns={4} spacing='45px'>
              {artistInfo.map((artist, index)=>{
                return(
                  <>
                  <div key={index}>
                  <ArtistCard artist={artist}/>
                  </div>
                  
                  </>
                )
              })}


            </SimpleGrid>    

            <Footer />
          </main>
       
    </>
  )
}
