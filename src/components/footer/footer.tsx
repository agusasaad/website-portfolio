'use client'

import { navItems, technologies } from '@/data/placeholder-data'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const duplicatedTech = [...technologies, ...technologies, ...technologies]

  return (
    <Box
      as='footer'
      w='100%'
      pt={{ base: '40px', md: '56px' }}
      pb={{ base: '24px', md: '28px' }}
    >
      <VStack w='100%' gap={0}>
        {/* Tech marquee */}
        <Box
          w='100vw'
          ml='calc(-50vw + 50%)'
          overflow='hidden'
          borderTop='1px solid'
          borderBottom='1px solid'
          borderColor='rgba(255,255,255,0.07)'
          py={{ base: '12px', md: '16px' }}
          mb={{ base: '32px', md: '48px' }}
        >
          <motion.div
            style={{ display: 'flex', whiteSpace: 'nowrap' }}
            animate={{ x: ['-33.33%', '0%'] }}
            transition={{
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            }}
          >
            {duplicatedTech.map((tech, i) => (
              <HStack
                key={i}
                gap={{ base: '20px', md: '28px' }}
                mr={{ base: '20px', md: '28px' }}
                flexShrink={0}
              >
                <Text
                  fontSize={{ base: '13px', md: '15px' }}
                  fontWeight={500}
                  opacity={0.3}
                  whiteSpace='nowrap'
                  textTransform='uppercase'
                  letterSpacing='2px'
                >
                  {tech}
                </Text>
                <Box
                  w='3px'
                  h='3px'
                  borderRadius='full'
                  bg='var(--orange)'
                  opacity={0.5}
                  flexShrink={0}
                />
              </HStack>
            ))}
          </motion.div>
        </Box>

        {/* Bottom row: copyright | nav links | tagline */}
        <Box
          w='100%'
          display='flex'
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent='space-between'
          alignItems={{ base: 'flex-start', md: 'center' }}
          gap={{ base: '20px', md: '0' }}
          pt={{ base: '16px', md: '20px' }}
        >
          <Text fontSize='13px' fontWeight={400} opacity={0.25} flexShrink={0}>
            &copy; {currentYear} Agustin Asaad
          </Text>

          <HStack
            gap={{ base: '14px', md: '24px' }}
            flexWrap='wrap'
            justifyContent='center'
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  opacity: 0.4,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </HStack>

          <Text
            fontSize='13px'
            fontWeight={400}
            opacity={0.25}
            flexShrink={0}
            textAlign='right'
          >
            Built with passion
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}

export default Footer
