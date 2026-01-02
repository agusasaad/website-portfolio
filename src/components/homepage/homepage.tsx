'use client'

import { Box, Image, Text } from '@chakra-ui/react'
import { SlideUpItem } from '../reusable/slide-up-Item'
import image_profile from '@/assets/image-profile-orange.webp'
import { LuArrowUpRight } from 'react-icons/lu'
import Noise from '../noise/noise'

const HomePage = () => {
  return (
    <Box
      as='section'
      w='100%'
      minH='calc(100vh - 109px)'
      display='flex'
      flexDir='column'
      justifyContent={{ base: 'flex-start', md: 'space-between' }}
      py={{ base: '40px', md: '80px' }}
      rowGap={'20px'}
    >
      {/* PRIMERA FILA */}
      <Box
        w='100%'
        display='flex'
        flexDir={{ base: 'column-reverse', md: 'row' }}
        justifyContent='space-between'
        alignItems='flex-start'
        rowGap={'40px'}
      >
        {/* TITULOS */}
        <Box display='flex' flexDir='column' gap='20px'>
          <SlideUpItem delay={1.3}>
            <Text
              as='h1'
              fontSize={{
                base: '55px',
                sm: '70px',
                md: '90px',
                lg: '120px',
                xl: '140px',
              }}
              fontWeight={650}
              textTransform='uppercase'
              lineHeight='80%'
              letterSpacing={{ base: '-1.5px', lg: '-2.5px' }}
              color='white'
            >
              FRONT END
            </Text>
          </SlideUpItem>

          <SlideUpItem delay={1.4}>
            <Text
              as='h2'
              fontSize={{
                base: '55px',
                sm: '70px',
                md: '90px',
                lg: '120px',
                xl: '140px',
              }}
              fontWeight={650}
              textTransform='uppercase'
              lineHeight='80%'
              letterSpacing={{ base: '-1.5px', lg: '-2.5px' }}
              color='white'
            >
              DEVELOPER
            </Text>
          </SlideUpItem>
        </Box>

        {/* FOTO + NOISE */}
        <Box
          position='relative'
          borderRadius='full'
          overflow='hidden'
          w={{ base: '130px', md: '160px', lg: '200px' }}
          h={{ base: '130px', md: '160px', lg: '200px' }}
        >
          <Noise refreshInterval={2} />

          <Image
            src={image_profile.src}
            alt='Foto de perfil de Agustín Asaad'
            w={'100%'}
            h={'100%'}
            objectFit={'cover'}
          />
        </Box>
      </Box>

      {/* SEGUNDA FILA */}
      <Box
        w='100%'
        display='flex'
        justifyContent='space-between'
        alignItems='flex-start'
        flexWrap={'wrap-reverse'}
        rowGap={'20px'}
      >
        <SlideUpItem delay={1.5}>
          <Text
            fontSize={{ base: '18px', md: '23px' }}
            fontWeight={450}
            display='flex'
            alignItems='center'
            gap='5px'
            letterSpacing={'0.2px'}
          >
            agustinasaad@gmail.com
            <LuArrowUpRight />
          </Text>
        </SlideUpItem>

        <SlideUpItem delay={1.5}>
          <Text
            fontSize={{ base: '18px', md: '23px' }}
            fontWeight={450}
            maxW='600px'
            letterSpacing={'0.2px'}
          >
            Hello, I&apos;m a Front-end Web Developer specializing in clean and
            efficient interfaces — based in Córdoba, Argentina, working
            remotely. Let&apos;s create!
          </Text>
        </SlideUpItem>
      </Box>
    </Box>
  )
}

export default HomePage
