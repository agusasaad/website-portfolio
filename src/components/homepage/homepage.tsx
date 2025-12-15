import { Box, Text } from '@chakra-ui/react'
import { SlideUpItem } from '../reusable/slide-up-Item'

const HomePage = () => {
  return (
    <Box
      as={'section'}
      w={'100%'}
      display={'flex'}
      gap={{ base: '20px', md: '0px' }}
    >
      <Box
        w={'100%'}
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        gap={{ base: '15px', lg: '30px' }}
        p={{ base: '100px 0px', md: '100px 0px 150px 0px' }}
      >
        <SlideUpItem delay={0.1}>
          <Text
            as={'span'}
            fontStyle={'normal'}
            fontSize={{ base: '18px', md: '20px', lg: '25px' }}
            fontWeight={500}
            textTransform={'uppercase'}
            color={'#999999'}
            letterSpacing={'0.5px'}
            textAlign={'center'}
          >
            [ AVAILABLE FOR WORK ]
          </Text>
        </SlideUpItem>
        <Box
          display={'flex'}
          flexDir={'column'}
          alignItems={'center'}
          gap={'15px'}
        >
          <SlideUpItem delay={0.2}>
            <Text
              as={'h1'}
              fontStyle={'normal'}
              fontSize={{ base: '55px', sm: '70px', md: '100px', lg: '135px' }}
              fontWeight={650}
              textTransform={'uppercase'}
              lineHeight={'80%'}
              letterSpacing={{ base: '-1.5px', lg: '-2.5px' }}
              color={'#FFFFFF'}
              textAlign={'center'}
              px={'5px'}
            >
              FRONT END
            </Text>
          </SlideUpItem>
          <SlideUpItem delay={0.3}>
            <Text
              as={'h2'}
              fontStyle={'normal'}
              fontSize={{ base: '55px', sm: '70px', md: '100px', lg: '135px' }}
              fontWeight={650}
              textTransform={'uppercase'}
              lineHeight={'80%'}
              letterSpacing={{ base: '-1.5px', lg: '-2.5px' }}
              color={'#FFFFFF'}
              textAlign={'center'}
              px={'5px'}
            >
              DEVELOPER
            </Text>
          </SlideUpItem>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
