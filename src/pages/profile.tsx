import styles from '@/styles/Home.module.css'
import { Navbar, Footer, CreateCollection, CustomNftCard } from '@/components'

import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Avatar,
  Wrap,
  WrapItem,
  Center,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
 
} from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import { getAccount } from '@wagmi/core'
import { readContract } from '@wagmi/core'
import { ARTIST_ABI, ARTIST_CONTRACT_ADDRESS } from '@/contracts/constants'
import { useState } from 'react'
import { getJSONFromCID } from '@/utils'
 
type Artist = {
  artistName: string;
  bio: string;
  imgHash: string;
 
}
 
const account = getAccount()



const IMAGE = 'https://cdn.punchng.com/wp-content/uploads/2022/12/18034549/Davido-1.jpg'



export default function Profile() {
  const [allArtists, setAllArtists] = useState<[]>([]);
  const [artistDetails, setArtistDetails]= useState<Artist>({
    artistName: '',
    bio: '',
    imgHash: ''
  });

  const getArtist = async ()=>{
    const data = await readContract({
      address: ARTIST_CONTRACT_ADDRESS,
      abi: ARTIST_ABI,
      functionName: 'addressToArtist',
      args: [account.address]
    })

    const artistDetails = await getJSONFromCID(data.artistDetails)
    setArtistDetails(artistDetails);
    
  }
  getArtist(); 

 
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
               Profile
            </Heading>

          <Center>
                    

            <Card align='center'>
            <CardHeader>
            <Wrap>
                
                   
                <WrapItem py={5} px={9}>
               
                    <Avatar size='2xl' name={artistDetails.artistName || `User`} src={`https://ipfs.io/ipfs/${artistDetails.imgHash}`} />{' '}
                </WrapItem>
                  
                </Wrap>
                <Heading size='md' textAlign={'center'}> {artistDetails.artistName||`Svatician`}</Heading>
            </CardHeader>
            <CardBody pt={-1}>
                <Text>{artistDetails.bio}</Text>
            </CardBody>
            <CardFooter>
                <h6>Artist</h6>
            </CardFooter>
        </Card>

        
         </Center>

         <Tabs isFitted variant='enclosed' py={9}>
            <TabList mb='1em'>
                <Tab>NFTs you Own</Tab>
                <Tab>Create Collection</Tab>
                <Tab>Transaction History</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <CustomNftCard/>
                </TabPanel>
                <TabPanel mt={-7}>
                <CreateCollection  />
                </TabPanel>
                {/* Transaction History */}
                <TabPanel>
                <TableContainer>
  <Table size={'md'} variant='striped' align="center" colorScheme='teal' width={'50%'}>
    <Thead>
      <Tr>
        <Th>Activity</Th>
        <Th>Transaction Hash</Th>
        <Th isNumeric>Date</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Buy</Td>
        <Td>0x789086ybufw.......68347</Td>
        <Td isNumeric>20/05/2023</Td>
      </Tr>
      <Tr>
      <Td>sell</Td>
        <Td>0x789086ybufw.......68347</Td>
        <Td isNumeric>20/05/2023</Td>
      </Tr>
      <Tr>
      <Td>Transfer</Td>
        <Td>0x789086ybufw.......68347</Td>
        <Td isNumeric>20/05/2023</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
      <Th>Activity</Th>
        <Th>Transaction Hash</Th>
        <Th isNumeric>Date</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
                </TabPanel>
            </TabPanels>
        </Tabs>
            

           
            <Footer />
          </main>
       
    </>
  )
}
