import { Box, Button, Image, Text } from '@chakra-ui/react'
import image_profile_orange from '@/assets/image-profile-orange.webp'
import { MotionFadeDown } from '../reusable/motion-fade-down'
import { CgClose } from 'react-icons/cg'
import { CustomButton } from '../reusable/custom-button'
import { headingTextStyles, paragraphTextStyles } from '@/styles/comon-style'
import ColorModeButton from '../reusable/color-mode-button'
import ReusableDateTime from '../reusable/reusable-date-time'

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
          gap='15px'
        >
          {/* Profile Image */}
          <Image
            src={image_profile_orange.src}
            alt='image_profile_orange'
            w='40px'
            h='40px'
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
              fontSize={'16px'}
              display={'flex'}
              alignItems={'center'}
              fontWeight={500}
              textTransform={'uppercase'}
              letterSpacing={'0.5px'}
            >
              <ReusableDateTime />
            </Text>
          </Box>
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

export default NavBarDrawerHeader
