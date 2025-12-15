import { navItems } from '@/data/placeholder-data'
import { Box, Link, useBreakpointValue } from '@chakra-ui/react'
import { SlideUpItem } from '../reusable/slide-up-Item'
import FuzzyText from '../reusable/fuzzy-text'

const NavBarDrawerItems = () => {
  const fuzzyFontSize = useBreakpointValue({
    base: '40px',
    md: '90px',
    lg: '110px',
  })
  return (
    <Box
      as={'ul'}
      h={'100%'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={{ base: '5px', md: '16px' }}
    >
      {navItems.map((item, index) => (
        <SlideUpItem
          key={index}
          delay={0.5 + index * 0.08}
          w={'100%'}
          display={'flex'}
          justifyContent={'center'}
        >
          <Link>
            <FuzzyText
              baseIntensity={0}
              hoverIntensity={0.45}
              textTransform='uppercase'
              fontWeight={650}
              fontSize={fuzzyFontSize}
            >
              {item.label}
            </FuzzyText>
          </Link>
        </SlideUpItem>
      ))}
    </Box>
  )
}

export default NavBarDrawerItems
