import { useToast } from '@chakra-ui/react'

export const useToastError = (msg: string) => {
  const toast = useToast()
  return toast({
    title: msg,
    status: 'error',
    duration: 5000,
    isClosable: true,
  })
}
export const useToastSuccess = (msg: string, description: string) => {
  const toast = useToast()
  return toast({
    title: msg,
    description: description,
    status: 'success',
    duration: 5000,
    isClosable: true,
  })
}
