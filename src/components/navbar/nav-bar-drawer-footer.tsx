import { Box, Link, Text } from '@chakra-ui/react'
import { LuArrowUpRight } from 'react-icons/lu'
import { MotionFadeDown } from '../reusable/motion-fade-down'
import { TiLocation } from 'react-icons/ti'

const NavBarDrawerFooter = () => {
  return (
    <Box
      w={'100%'}
      p='30px 0'
      display={'flex'}
      flexDir={{ base: 'column', sm: 'row' }}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={'15px'}
    >
      <MotionFadeDown delay={0.8} y={40}>
        <Text
          as='span'
          fontSize='20px'
          fontWeight={600}
          color='#ffffff'
          display={'flex'}
          flexDir={{ base: 'row-reverse', sm: 'row' }}
          alignItems={'center'}
          gap={'5px'}
        >
          <TiLocation size={25} />
          ARGENTINA
        </Text>
      </MotionFadeDown>

      <Box
        display={'flex'}
        alignItems={'center'}
        gap={{ base: '15px', sm: '30px' }}
        flexDir={{ base: 'column', sm: 'row' }}
      >
        <MotionFadeDown delay={0.8} y={40}>
          <Link fontSize='20px' fontWeight={600} color='#ffffff'>
            LINKEDIN
            <LuArrowUpRight size={20} />
          </Link>
        </MotionFadeDown>
        <MotionFadeDown delay={0.8} y={40}>
          <Link fontSize='20px' fontWeight={600} color='#ffffff'>
            GITHUB
            <LuArrowUpRight size={20} />
          </Link>
        </MotionFadeDown>
      </Box>
    </Box>
  )
}

export default NavBarDrawerFooter
