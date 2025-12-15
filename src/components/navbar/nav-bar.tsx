'use client'
import { Box, Image, Text } from '@chakra-ui/react'
import image_profile_orange from '@/assets/image-profile-orange.webp'
import NavBarDrawer from './nav-bar-drawer'
import { MotionFadeDown } from '../reusable/motion-fade-down'
import { CustomButton } from '../reusable/custom-button'
import { headingTextStyles, paragraphTextStyles } from '@/styles/comon-style'
import ColorModeButton from '../reusable/color-mode-button'
import ReusableDateTime from '../reusable/reusable-date-time'

const NavBar = () => {
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
      <MotionFadeDown delay={0.1}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap='15px'
        >
          {/* Profile Image */}
          <Image
            src={image_profile_orange.src}
            alt='image_profile_orange'
            w={'40px'}
            h={'40px'}
            objectFit='contain'
          />
          <Box as={'div'}>
            {/* Name */}
            <Text {...headingTextStyles} as='span' fontSize={'18px'}>
              AGUSTIN ASAAD
            </Text>
            <Text
              {...paragraphTextStyles}
              as='span'
              fontSize={'16px'}
              display={'flex'}
              alignItems={'center'}
              fontWeight={500}
              textTransform={'uppercase'}
              letterSpacing={'0.5px'}
              lineHeight={'normal'}
            >
              <ReusableDateTime />
            </Text>
          </Box>
        </Box>
      </MotionFadeDown>

      {/* ------------------ CENTER ICON (TOGGLE BUTTON) ------------------ */}
      <MotionFadeDown delay={0.1} order={{ base: '3', md: '2' }}>
        <NavBarDrawer />
      </MotionFadeDown>

      {/* ------------------ RIGHT BUTTON: CONTACT AND COLOR MODE ------------------ */}
      <MotionFadeDown
        delay={0.1}
        order={{ base: '2', md: '3' }}
        hideBelow={'md'}
      >
        <Box
          minW={{ base: 'auto', md: '210px' }}
          display={'flex'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          gap={'20px'}
        >
          <CustomButton label='CONTACT ME' />
          <ColorModeButton />
        </Box>
      </MotionFadeDown>
    </Box>
  )
}

export default NavBar
