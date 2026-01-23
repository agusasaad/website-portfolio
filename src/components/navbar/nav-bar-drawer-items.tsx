import { navItems } from '@/data/placeholder-data'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import { SlideUpItem } from '../reusable/slide-up-Item'
import { SplitHoverText } from '../reusable/split-text-link'

const NavBarDrawerItems = () => {
  const fuzzyFontSize = useBreakpointValue({
    base: '45px',
    md: '90px',
    lg: '110px',
  })

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
          w='100%'
          display='flex'
          justifyContent='center'
        >
          <SplitHoverText
            href='/'
            text={item.label}
            fontSize={fuzzyFontSize}
            lineHeight={{ base: '45px', md: '90px' }}
            textTransform='uppercase'
            fontWeight={650}
          />
        </SlideUpItem>
      ))}
    </Box>
  )
}

export default NavBarDrawerItems
