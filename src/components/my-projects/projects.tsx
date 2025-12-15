import { image_projects } from '@/data/placeholder-data'
import { Box } from '@chakra-ui/react'
import ParallaxImage from '../reusable/parallax-image'

const Projects = () => {
  return (
    <Box
      w='100%'
      display='grid'
      gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
      gap='20px'
    >
      {image_projects.map((image, idx) => (
        <ParallaxImage key={idx} src={image.src} />
      ))}
      {image_projects.map((image, idx) => (
        <ParallaxImage key={idx} src={image.src} />
      ))}
    </Box>
  )
}

export default Projects
