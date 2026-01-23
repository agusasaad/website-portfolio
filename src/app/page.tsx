import AboutMe from '@/components/about-me/about-me'
import HomePage from '@/components/homepage/homepage'
import Projects from '@/components/my-projects/projects'
import Services from '@/components/my-services/services'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box as={'main'} w={'100%'} h={'auto'} position={'relative'}>
      <HomePage />
      {/* <Services /> */}
      {/* <Projects /> */}
      {/* <AboutMe /> */}
    </Box>
  )
}
