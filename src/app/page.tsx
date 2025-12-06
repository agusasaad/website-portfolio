import HomePage from '@/components/homepage/homepage'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box as={'main'} w={'100%'} h={'auto'} position={'relative'}>
      <HomePage />
    </Box>
  )
}
