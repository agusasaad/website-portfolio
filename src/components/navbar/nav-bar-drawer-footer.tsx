import { Box, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import { LuArrowUpRight } from 'react-icons/lu'
import { MotionFadeDown } from '../reusable/motion-fade-down'
import { TiLocation } from 'react-icons/ti'
import { headingTextStyles } from '@/styles/comon-style'

const NavBarDrawerFooter = () => {
  // Definición de flexDir para el Text que contiene la ubicación y hora
  const locationFlexDir = useBreakpointValue({ base: 'row-reverse', sm: 'row' })

  return (
    <Box
      w={'100%'}
      minHeight={'110px'}
      display={'flex'}
      flexDir={{ base: 'column', sm: 'row' }}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={'15px'}
    >
      <MotionFadeDown delay={0.8} y={40} hideBelow={'md'}>
        <Text
          {...headingTextStyles}
          as='span'
          display={'flex'}
          // Usamos la variable responsiva definida:
          flexDir={locationFlexDir}
          alignItems={'center'}
          gap={'10px'}
        >
          <TiLocation size={25} />
          ARGENTINA
        </Text>
      </MotionFadeDown>

      <Box
        display={'flex'}
        alignItems={'center'}
        gap={{ base: '10px', sm: '30px' }}
        flexDir={{ base: 'column', sm: 'row' }}
      >
        <MotionFadeDown delay={0.8} y={40}>
          <Link {...headingTextStyles}>
            LINKEDIN
            <LuArrowUpRight size={20} />
          </Link>
        </MotionFadeDown>
        <MotionFadeDown delay={0.8} y={40}>
          <Link {...headingTextStyles}>
            GITHUB
            <LuArrowUpRight size={20} />
          </Link>
        </MotionFadeDown>
      </Box>
    </Box>
  )
}

export default NavBarDrawerFooter
