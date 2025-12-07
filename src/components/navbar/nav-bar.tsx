'use client'
import { Box, Image, Text } from '@chakra-ui/react'
import image_profile_white from '@/assets/image-profile-white.webp'
import NavBarDrawer from './nav-bar-drawer'
import { MotionFadeDown } from '../reusable/motion-fade-down'
import { CustomButton } from '../reusable/custom-button'
import { headingTextStyles, paragraphTextStyles } from '@/styles/comon-style'
import { useColorMode } from '../ui/color-mode'
import { TbMoonFilled, TbSunFilled } from 'react-icons/tb'

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      as='nav'
      w='100%'
      p='30px 0'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      gap={'20px'}
      borderBottom={'1px solid rgb(48, 48, 48)'}
    >
      {/* ------------------ LEFT SECTION: LOGO + NAME ------------------ */}
      <MotionFadeDown delay={1.1}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap='15px'
        >
          {/* Profile Image */}
          <Image
            src={image_profile_white.src}
            alt='image_profile_white'
            w={'40px'}
            h={'40px'}
            objectFit='contain'
          />
          <Box as={'div'} hideBelow={'md'}>
            {/* Name */}
            <Text {...headingTextStyles} as='span' fontSize={'18px'}>
              AGUSTIN ASAAD
            </Text>
            <Text
              {...paragraphTextStyles}
              as='span'
              fontSize={'13px'}
              display={'flex'}
              alignItems={'center'}
              gap={'5px'}
              fontWeight={500}
            >
              <Box
                as={'div'}
                w={'10px'}
                h={'10px'}
                rounded={'full'}
                bg={'#10b981'}
              ></Box>
              DISPONIBLE
            </Text>
          </Box>
        </Box>
      </MotionFadeDown>

      {/* ------------------ CENTER ICON (TOGGLE BUTTON) ------------------ */}
      <MotionFadeDown delay={1.1} order={{ base: '3', md: '2' }}>
        <NavBarDrawer />
      </MotionFadeDown>

      {/* ------------------ RIGHT BUTTON: CONTACT ------------------ */}
      <MotionFadeDown delay={1.1} order={{ base: '2', md: '3' }}>
        <Box
          minW={{ base: 'auto', md: '210px' }}
          display={'flex'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          gap={'20px'}
        >
          <CustomButton label='CONTACTAME' />
          <Box as='button' onClick={toggleColorMode}>
            {colorMode === 'light' ? (
              <TbSunFilled size={35} color='white' />
            ) : (
              <TbMoonFilled size={35} color='white' />
            )}
          </Box>
        </Box>
      </MotionFadeDown>
    </Box>
  )
}

export default NavBar
