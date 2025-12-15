import { navItems } from '@/data/placeholder-data'
import { Box, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import { SlideUpItem } from '../reusable/slide-up-Item'
import FuzzyText from '../reusable/fuzzy-text'

const NavBarDrawerItems = () => {
  const fuzzyFontSize = useBreakpointValue({
    base: '45px',
    md: '90px',
    lg: '110px',
  })

  // 👇 solo true en lg+
  const enableFuzzy = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  })

  return (
    <Box
      as='ul'
      h='100%'
      display='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      gap={{ base: '5px', md: '16px' }}
    >
      {navItems.map((item, index) => (
        <SlideUpItem
          key={index}
          delay={0.5 + index * 0.08}
          w='100%'
          display='flex'
          justifyContent='center'
        >
          <Link>
            {enableFuzzy ? (
              <FuzzyText
                baseIntensity={0}
                hoverIntensity={0.45}
                textTransform='uppercase'
                fontWeight={650}
                fontSize={fuzzyFontSize}
              >
                {item.label}
              </FuzzyText>
            ) : (
              <Text
                textTransform='uppercase'
                fontWeight={650}
                fontSize={fuzzyFontSize}
                lineHeight={'30px'}
              >
                {item.label}
              </Text>
            )}
          </Link>
        </SlideUpItem>
      ))}
    </Box>
  )
}

export default NavBarDrawerItems
