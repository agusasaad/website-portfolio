import HomePage from '@/components/homepage/homepage'
import Projects from '@/components/my-projects/projects'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box as={'main'} w={'100%'} h={'auto'} position={'relative'}>
      <HomePage />
      <Projects />
    </Box>
  )
}
