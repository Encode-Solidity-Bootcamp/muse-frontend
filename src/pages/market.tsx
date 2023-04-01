import styles from '@/styles/Home.module.css'
import { Navbar, Footer, NftCard } from '@/components'

import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
 
} from '@chakra-ui/react'
import ReactPlayer from 'react-player'

const IMAGE = 'https://cdn.punchng.com/wp-content/uploads/2022/12/18034549/Davido-1.jpg'



export default function MarketPlace() {
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
            >
              Explore Wonderful Artists
            </Heading>

            <Stack
              py={4}
              display={'grid'}
              gridTemplateColumns={'repeat(4, 1fr)'}
              gridAutoRows={'min(0,auto)'}
            >
             <NftCard />
            

           
            </Stack>

            <Footer />
          </main>
       
    </>
  )
}