import { navItems } from '@/data/placeholder-data'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import { SlideUpItem } from '../reusable/slide-up-Item'
import { SplitHoverText } from '../reusable/split-text-link'
import { useColorModeValue } from '../ui/color-mode'

const NavBarDrawerItems = () => {
  const fuzzyFontSize = useBreakpointValue({
    base: '45px',
    md: '90px',
    lg: '110px',
  })

  const lineHeight = useBreakpointValue({
    base: '40px',
    md: '90px',
  })

  const numberColor = useColorModeValue('#0e0e0e', '#FFFFFFA3')

  return (
    <Box
      as='ul'
      h='100%'
      display='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      gap={'5px'}
    >
      {navItems.map((item, index) => (
        <SlideUpItem
          key={index}
          delay={0.5 + index * 0.08}
          display='flex'
          justifyContent='center'
          position={'relative'}
        >
          <SplitHoverText
            text={item.label}
            style={{
              fontSize: fuzzyFontSize,
              lineHeight: lineHeight,
              fontWeight: 650,
              textTransform: 'uppercase',
              paddingRight: '30px',
              paddingLeft: '30px',
            }}
          />
          <Box
            color={numberColor}
            position={'absolute'}
            top={0}
            right={0}
            zIndex={1000}
            fontWeight={500}
          >
            (0{index + 1})
          </Box>
        </SlideUpItem>
      ))}
    </Box>
  )
}

export default NavBarDrawerItems
