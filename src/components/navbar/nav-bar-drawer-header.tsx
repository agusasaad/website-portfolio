import { Box, Button, Image, Text } from '@chakra-ui/react'
import image_profile_white from '@/assets/image-profile-white.webp'
import { MotionFadeDown } from '../reusable/motion-fade-down'
import { CgClose } from 'react-icons/cg'

const NavBarDrawerHeader = ({ onClose }: { onClose: () => void }) => {
  return (
    <Box
      as={'div'}
      w='100%'
      p='30px 0'
      display='flex'
      alignItems='center'
      justifyContent={{ base: 'center', md: 'space-between' }}
    >
      {/* ------------------ LEFT SECTION: LOGO + NAME ------------------ */}
      <MotionFadeDown delay={0.5} hideBelow={'md'}>
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
            w='30px'
            h='30px'
            objectFit='contain'
          />

          {/* Name */}
          <Text as='span' fontSize='20px' fontWeight={600} color='#ffffff'>
            AGUSTIN ASAAD
          </Text>
        </Box>
      </MotionFadeDown>

      {/* ------------------ CENTER ICON (TOGGLE BUTTON) ------------------ */}
      <Button
        size='xl'
        bg='#0f0f0f'
        border='1px solid rgb(36, 36, 36)'
        outline='none'
        rounded='full'
        transition='all 0.3s ease'
        color='grey'
        _hover={{
          bg: 'white',
          color: 'black',
          '& svg': {
            color: 'black',
            transition: 'color 0.3s ease',
          },
        }}
        onClick={() => onClose()}
      >
        <CgClose />
      </Button>

      {/* ------------------ RIGHT BUTTON: CONTACT ------------------ */}
      <MotionFadeDown delay={0.5} hideBelow={'md'}>
        <Box minW={'210px'} display={'flex'} justifyContent={'flex-end'}>
          <Button
            minH='50px'
            p='0px 24px'
            rounded='full'
            fontSize='16px'
            fontWeight={600}
            bg='transparent'
            border='1.5px solid #FFFFFF'
            color='#FFFFFF'
            outline={'none'}
          >
            CONTACTAME
          </Button>
        </Box>
      </MotionFadeDown>
    </Box>
  )
}

export default NavBarDrawerHeader
