import { Box, Button, Text } from '@chakra-ui/react'
import { MotionFadeDown } from '../reusable/motion-fade-down'
import { CgClose } from 'react-icons/cg'
import { CustomButton } from '../reusable/custom-button'
import { headingTextStyles, paragraphTextStyles } from '@/styles/comon-style'
import ColorModeButton from '../reusable/color-mode-button'
import ReusableDateTime from '../reusable/reusable-date-time'
import { useColorModeValue } from '../ui/color-mode'

const NavBarDrawerHeader = ({ onClose }: { onClose: () => void }) => {
  const closeBg = useColorModeValue('#ffffff', '#0f0f0f')
  const closeBorder = useColorModeValue('#e5e5e5', 'rgb(36, 36, 36)')
  const closeColor = useColorModeValue('#0e0e0e', 'grey')

  const hoverBg = useColorModeValue('#0e0e0e', '#ffffff')
  const hoverColor = useColorModeValue('#ffffff', '#0e0e0e')
  const dataTimeText = useColorModeValue(
    'rgb(24, 24, 24)',
    'rgba(255, 255, 255, 0.87)'
  )
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
        <Box as={'div'} hideBelow={'md'} minW={{ base: 'auto', md: '210px' }}>
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
            color={dataTimeText}
          >
            <ReusableDateTime />
          </Text>
        </Box>
      </MotionFadeDown>

      {/* ------------------ CENTER ICON (TOGGLE BUTTON) ------------------ */}
      <Button
        size='xl'
        bg={closeBg}
        border='1px solid'
        borderColor={closeBorder}
        rounded='full'
        transition='all 0.3s ease'
        color={closeColor}
        _hover={{
          bg: hoverBg,
          color: hoverColor,
          '& svg': {
            color: hoverColor,
            transition: 'color 0.3s ease',
          },
        }}
        onClick={onClose}
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
