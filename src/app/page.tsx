import HomePage from '@/components/homepage/homepage'
import Services from '@/components/my-services/services'
import Works from '@/components/my-projects/projects'
import Testimonials from '@/components/testimonials/testimonials'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box as={'main'} w={'100%'} h={'auto'} position={'relative'}>
      <HomePage />
      <Works />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </Box>
  )
}
