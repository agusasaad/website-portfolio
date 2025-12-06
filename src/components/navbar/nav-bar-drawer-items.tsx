import { navItems } from '@/data/placeholder-data'
import { Box, Link } from '@chakra-ui/react'
import { SlideUpItem } from '../reusable/slide-up-Item'

const NavBarDrawerItems = () => {
  return (
    <Box
      as={'ul'}
      h={'100%'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {navItems.map((item, index) => (
        <SlideUpItem key={index} delay={0.5 + index * 0.08}>
          <Link
            fontStyle={'normal'}
            fontSize={{ base: '50px', md: '90px', lg: '110px' }}
            fontWeight={600}
            textTransform={'uppercase'}
            lineHeight={'90%'}
            letterSpacing={'-0.5px'}
            color={'#FFFFFF'}
          >
            {item.label}
          </Link>
        </SlideUpItem>
      ))}
    </Box>
  )
}

export default NavBarDrawerItems
