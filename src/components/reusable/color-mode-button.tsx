import { Box } from '@chakra-ui/react'
import { TbMoonFilled, TbSunFilled } from 'react-icons/tb'
import { useColorMode, useColorModeValue } from '../ui/color-mode'

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const iconColor = useColorModeValue('black', 'white')
  return (
    <Box as='button' onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <TbMoonFilled size={35} color={iconColor} />
      ) : (
        <TbSunFilled size={35} color={iconColor} />
      )}
    </Box>
  )
}

export default ColorModeButton
