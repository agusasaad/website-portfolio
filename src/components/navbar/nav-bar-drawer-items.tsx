import { navItems } from '@/data/placeholder-data'
import { Box, Link, useBreakpointValue } from '@chakra-ui/react'
import { SlideUpItem } from '../reusable/slide-up-Item'

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
    >
      {navItems.map((item, index) => (
        <SlideUpItem
          key={index}
          delay={0.5 + index * 0.08}
          w='100%'
          display='flex'
          justifyContent='center'
        >
          <Link
            textTransform='uppercase'
            fontWeight={650}
            fontSize={fuzzyFontSize}
            lineHeight={'100px'}
          >
            {item.label}
          </Link>
        </SlideUpItem>
      ))}
    </Box>
  )
}

export default NavBarDrawerItems
