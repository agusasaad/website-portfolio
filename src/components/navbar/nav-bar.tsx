'use client'
import { Box, HStack, Text } from '@chakra-ui/react'
import NavBarDrawer from './nav-bar-drawer'
import { motion } from 'framer-motion'
import ReusableDateTime from '../reusable/reusable-date-time'

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

const NavBar = () => {
  return (
    <Box
      as='nav'
      w='100%'
      py={{ base: '18px', md: '24px' }}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      gap='20px'
      borderBottom='1px solid'
      borderColor='rgba(255,255,255,0.07)'
    >
      {/* Left: Name + Time */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easing, delay: 1.3 }}
      >
        <HStack gap='12px' align='baseline'>
          <Text
            fontSize={{ base: '15px', md: '17px' }}
            fontWeight={600}
            letterSpacing='-0.3px'
            textTransform='uppercase'
          >
            Agustin Asaad
          </Text>
          <Text
            fontSize={{ base: '12px', md: '13px' }}
            fontWeight={400}
            opacity={0.3}
            fontFamily='monospace'
            display={{ base: 'none', md: 'block' }}
          >
            <ReusableDateTime />
          </Text>
        </HStack>
      </motion.div>

      {/* Right: Menu trigger */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easing, delay: 1.3 }}
      >
        <NavBarDrawer />
      </motion.div>
    </Box>
  )
}

export default NavBar
