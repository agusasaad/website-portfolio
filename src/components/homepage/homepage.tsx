import { Box, Text } from '@chakra-ui/react'
import { SlideUpItem } from '../reusable/slide-up-Item'
import { headingTextStyles, paragraphTextStyles } from '@/styles/comon-style'

const HomePage = () => {
  return (
    <Box
      as={'section'}
      w={'100%'}
      p={'50px 0px'}
      display={'flex'}
      flexDir={'column'}
      gap={{ base: '25px', md: '50px' }}
    >
      <Box
        display={'flex'}
        flexDir={'column'}
        alignItems={'flex-start'}
        gap={{ base: '5px', md: '0px' }}
      >
        <SlideUpItem delay={1.1}>
          <Text
            as={'h1'}
            fontStyle={'normal'}
            fontSize={{ base: '75px', md: '100px', lg: '200px' }}
            fontWeight={600}
            textTransform={'uppercase'}
            lineHeight={'80%'}
            letterSpacing={'-1.5px'}
            color={'#FFFFFF'}
          >
            AGUSTIN
          </Text>
        </SlideUpItem>
        <SlideUpItem delay={1.1}>
          <Text
            as={'h2'}
            fontStyle={'normal'}
            fontSize={{ base: '75px', md: '100px', lg: '200px' }}
            fontWeight={600}
            textTransform={'uppercase'}
            lineHeight={'80%'}
            letterSpacing={'-1.5px'}
            color={'#FFFFFF'}
          >
            .DEV<span style={{ color: '#ff462e' }}>*</span>
          </Text>
        </SlideUpItem>
      </Box>

      <Box display={'flex'} flexDir={'column'} gap={'10px'}>
        <SlideUpItem delay={1.1}>
          <Text {...headingTextStyles} as={'h2'}>
            DESARROLLADOR FRONT-END
          </Text>
        </SlideUpItem>
        <SlideUpItem delay={1.1}>
          <Text {...paragraphTextStyles} as={'p'} maxW={'601px'}>
            Desarrollador Web de Córdoba, Argentina. Me especializo en
            desarrollo Front-end, con experiencia en la creación de interfaces
            de usuario eficientes y visualmente atractivas.
          </Text>
        </SlideUpItem>
      </Box>
    </Box>
  )
}

export default HomePage
