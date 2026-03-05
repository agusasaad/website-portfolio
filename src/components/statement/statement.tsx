'use client'

import { Box, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionText = motion(Text)
const MotionBox = motion(Box)

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing, delay },
  }),
}

const Statement = () => {
  return (
    <VStack
      as='section'
      w='100%'
      py={{ base: '60px', md: '100px', lg: '120px' }}
      align='center'
      textAlign='center'
      gap={{ base: '24px', md: '32px' }}
    >
      {/* Decorative line */}
      <MotionBox
        w='40px'
        h='1px'
        bg='var(--orange)'
        opacity={0.5}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-60px' }}
        custom={0}
        variants={fadeUp}
      />

      {/* Quote */}
      <MotionText
        fontSize={{ base: '24px', sm: '32px', md: '40px', lg: '48px' }}
        fontWeight={500}
        lineHeight='140%'
        letterSpacing={{ base: '-0.5px', md: '-1.5px' }}
        maxW='900px'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-60px' }}
        custom={0.15}
        variants={fadeUp}
      >
        I believe great software is{' '}
        <Box as='span' opacity={0.3}>
          more than just code — it&apos;s about crafting
        </Box>{' '}
        <Box as='span' color='var(--orange)'>
          experiences
        </Box>{' '}
        <Box as='span' opacity={0.3}>
          that people genuinely
        </Box>{' '}
        enjoy using.
      </MotionText>

      {/* Attribution */}
      <MotionText
        fontSize='13px'
        fontWeight={400}
        opacity={0.25}
        textTransform='uppercase'
        letterSpacing='2px'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-60px' }}
        custom={0.3}
        variants={fadeUp}
      >
        — Agustin Asaad
      </MotionText>
    </VStack>
  )
}

export default Statement
