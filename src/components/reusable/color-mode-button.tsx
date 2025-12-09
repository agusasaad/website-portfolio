import { Box } from '@chakra-ui/react'
import { TbMoonFilled, TbSunFilled } from 'react-icons/tb'
import { useColorMode } from '../ui/color-mode'

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box as='button' onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <TbSunFilled size={35} color='white' />
      ) : (
        <TbMoonFilled size={35} color='white' />
      )}
    </Box>
  )
}

export default ColorModeButton
