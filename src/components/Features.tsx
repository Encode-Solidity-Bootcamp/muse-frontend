import { ReactElement } from 'react'
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
  Heading,
} from '@chakra-ui/react'
import {
  FcApprove,
  FcAssistant,
  FcDonate,
  FcInTransit,
  FcMoneyTransfer,
  FcMusic,
} from 'react-icons/fc'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function Features() {
  return (
    <Box p={4} py={9} mt={9}>
      <Center>
        <Heading>Features</Heading>
      </Center>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={10}
        py={9}
        mt={9}
        ml={9}
        px={5}
        mr={9}
      >
        <Feature
          icon={<Icon as={FcMusic} w={10} h={10} />}
          title={'Mint Songs as NFTs'}
          text={
            'Svatisians can uplaod songs and mint them as NFTs and list them on the Svati market place'
          }
        />
        <Feature
          icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
          title={'Buy & Resell NFTs'}
          text={'Buy and Resell Nfts on the Svati market place.'}
        />
        <Feature
          icon={<Icon as={FcApprove} w={10} h={10} />}
          title={'Vote Top Artists '}
          text={'Vote for your favourite artist to be on the top ranking list'}
        />
      </SimpleGrid>
    </Box>
  )
}
