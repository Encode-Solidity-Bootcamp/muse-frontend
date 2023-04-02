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
              User/ Artiste Profile
            </Heading>

          <Center>
                    

            <Card align='center'>
            <CardHeader>
            <Wrap>
                
                   
                <WrapItem py={5} px={9}>
               
                    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
                </WrapItem>
                  
                </Wrap>
                <Heading size='md' textAlign={'center'}> Michal Jackson</Heading>
            </CardHeader>
            <CardBody pt={-1}>
                <Text>About Me.</Text>
            </CardBody>
            <CardFooter>
                <h6>Artiste</h6>
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
