'use client'

import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { LuArrowUpRight } from 'react-icons/lu'

const MotionBox = motion(Box)
const MotionText = motion(Text)

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing, delay },
  }),
}

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

const Contact = () => {
  return (
    <VStack
      as='section'
      w='100%'
      py={{ base: '50px', md: '80px' }}
      gap={{ base: '32px', md: '48px' }}
    >
      <VStack w='100%' gap={{ base: '40px', md: '56px' }} align='center'>
        {/* Big CTA — editorial style */}
        <VStack gap={0} align='center' textAlign='center'>
          <MotionText
            fontSize={{
              base: '44px',
              sm: '60px',
              md: '80px',
              lg: '100px',
              xl: '120px',
            }}
            fontWeight={650}
            lineHeight='95%'
            letterSpacing={{ base: '-1px', md: '-4px' }}
            textTransform='uppercase'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-80px' }}
            custom={0.1}
            variants={fadeUp}
          >
            Have an idea?
          </MotionText>

          <MotionText
            fontSize={{
              base: '44px',
              sm: '60px',
              md: '80px',
              lg: '100px',
              xl: '120px',
            }}
            fontWeight={650}
            lineHeight='95%'
            letterSpacing={{ base: '-1px', md: '-4px' }}
            textTransform='uppercase'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-80px' }}
            custom={0.2}
            variants={fadeUp}
          >
            <Box as='span' color='var(--orange)'>
              Let&apos;s work
            </Box>{' '}
            together
          </MotionText>
        </VStack>

        {/* Email pill */}
        <MotionBox
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-60px' }}
          custom={0.35}
          variants={fadeUp}
        >
          <motion.a
            href='mailto:agustinasaad@gmail.com'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 28px',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.12)',
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'inherit',
            }}
            whileHover={{
              borderColor: 'var(--orange)',
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
          >
            <Text
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight={500}
              letterSpacing='0.2px'
            >
              agustinasaad@gmail.com
            </Text>
            <Box
              w='32px'
              h='32px'
              borderRadius='full'
              bg='var(--orange)'
              color='white'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <LuArrowUpRight size={14} />
            </Box>
          </motion.a>
        </MotionBox>

        {/* Socials + availability row */}
        <MotionBox
          w='100%'
          display='flex'
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent='center'
          alignItems='center'
          gap={{ base: '20px', md: '32px' }}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-60px' }}
          custom={0.45}
          variants={fadeUp}
        >
          <HStack
            gap={{ base: '10px', md: '16px' }}
            flexWrap='wrap'
            justifyContent='center'
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                whileHover={{
                  borderColor: 'var(--orange)',
                  y: -2,
                }}
                transition={{ duration: 0.25 }}
              >
                <Text fontSize='14px' fontWeight={450}>
                  {social.label}
                </Text>
                <LuArrowUpRight size={12} />
              </motion.a>
            ))}
          </HStack>

          <Box
            w='1px'
            h='20px'
            bg='rgba(255,255,255,0.1)'
            display={{ base: 'none', md: 'block' }}
          />

          <HStack gap='8px'>
            <Box w='6px' h='6px' borderRadius='full' bg='#4ade80' />
            <Text fontSize='13px' fontWeight={450} opacity={0.4}>
              Available for freelance work
            </Text>
          </HStack>
        </MotionBox>
      </VStack>
    </VStack>
  )
}

export default Contact
