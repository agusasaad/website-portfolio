import { Box, Button, Image, Text } from '@chakra-ui/react'
import image_profile_white from '@/assets/image-profile-white.webp'
import NavBarDrawer from './nav-bar-drawer'
import { MotionFadeDown } from '../reusable/motion-fade-down'

const NavBar = () => {
  return (
    <Box
      as='nav'
      w='100%'
      p='30px 0'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      {/* ------------------ LEFT SECTION: LOGO + NAME ------------------ */}
      <MotionFadeDown>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap='10px'
        >
          {/* Profile Image */}
          <Image
            src={image_profile_white.src}
            alt='image_profile_white'
            w={{ base: '45px', md: '35px' }}
            h={{ base: '45px', md: '35px' }}
            objectFit='contain'
          />

          {/* Name */}
          <Text
            as='span'
            fontSize='20px'
            fontWeight={600}
            color='#ffffff'
            hideBelow={'md'}
          >
            AGUSTIN ASAAD
          </Text>
        </Box>
      </MotionFadeDown>

      {/* ------------------ CENTER ICON (TOGGLE BUTTON) ------------------ */}
      <MotionFadeDown order={{ base: '3', md: '2' }}>
        <NavBarDrawer />
      </MotionFadeDown>

      {/* ------------------ RIGHT BUTTON: CONTACT ------------------ */}
      <MotionFadeDown order={{ base: '2', md: '3' }}>
        <Box
          minW={{ base: 'auto', md: '210px' }}
          display={'flex'}
          justifyContent={'flex-end'}
        >
          <Button
            size={{ base: 'sm', md: 'xl' }}
            minH={'50px'}
            p='0px 24px'
            rounded='full'
            fontSize='16px'
            fontWeight={600}
            bg='transparent'
            border='1.5px solid #FFFFFF'
            color='#FFFFFF'
          >
            CONTACTAME
          </Button>
        </Box>
      </MotionFadeDown>
    </Box>
  )
}

export default NavBar
