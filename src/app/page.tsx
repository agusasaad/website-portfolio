import Noise from '@/components/noise/noise'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box as={'main'} w={'100%'} h={'100vh'} position={'relative'}>
      <Noise />
    </Box>
  )
}
