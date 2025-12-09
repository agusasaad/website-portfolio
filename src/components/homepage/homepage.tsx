import { Box, Text } from '@chakra-ui/react'
import { SlideUpItem } from '../reusable/slide-up-Item'
import { headingTextStyles, paragraphTextStyles } from '@/styles/comon-style'

const HomePage = () => {
  return (
    <Box
      as={'section'}
      w={'100%'}
      minH={'calc(100vh - 106px)'}
      p={'50px 0px'}
      display={'flex'}
      flexDir={'column'}
      gap={{ base: '25px', md: '50px' }}
    >
      <Box
        display={'flex'}
        flexDir={'column'}
        alignItems={'flex-start'}
        gap={{ base: '10px', md: '0px' }}
      >
        <SlideUpItem delay={1.1}>
          <Text
            as={'h1'}
            fontStyle={'normal'}
            fontSize={{ base: '50px', sm: '100px', md: '150px', lg: '250px' }}
            fontWeight={600}
            textTransform={'uppercase'}
            lineHeight={'80%'}
            letterSpacing={'-2.5px'}
            color={'#FFFFFF'}
          >
            AGUSTIN
          </Text>
        </SlideUpItem>
        <SlideUpItem delay={1.1}>
          <Text
            as={'h2'}
            fontStyle={'normal'}
            fontSize={{ base: '50px', sm: '100px', md: '150px', lg: '250px' }}
            fontWeight={600}
            textTransform={'uppercase'}
            lineHeight={'80%'}
            letterSpacing={'-2.5px'}
            color={'#FFFFFF'}
          >
            .DEV<span style={{ color: '#ff462e' }}>*</span>
          </Text>
        </SlideUpItem>
      </Box>

      <Box
        display={'flex'}
        justifyContent={{ base: 'flex-start', lg: 'flex-end' }}
      >
        <SlideUpItem delay={1.1}>
          <Box maxW={'700px'} display={'flex'} flexDir={'column'} gap={'5px'}>
            <Text
              {...headingTextStyles}
              as={'h2'}
              fontSize={{ base: '20px', md: '24px' }}
            >
              DESARROLLADOR FRONT-END
            </Text>
            <Text
              {...paragraphTextStyles}
              as={'p'}
              fontSize={{ base: '18px', md: '20px' }}
            >
              Desarrollador Web enfocado en crear interfaces dinámicas, modernas
              y bien animadas. Trabajo con React y Next.js para construir
              experiencias digitales rápidas, limpias y visualmente atractivas.
            </Text>
          </Box>
        </SlideUpItem>
      </Box>
    </Box>
  )
}

export default HomePage
