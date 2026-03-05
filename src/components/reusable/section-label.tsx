'use client'

import { HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionHStack = motion(HStack)

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

const SectionLabel = ({
  number,
  label,
}: {
  number: string
  label: string
}) => {
  return (
    <MotionHStack
      w='100%'
      gap='12px'
      align='center'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: easing }}
      pb={{ base: '16px', md: '20px' }}
      borderBottom='1px solid'
      borderColor='rgba(255,255,255,0.07)'
    >
      <Text
        fontSize={{ base: '13px', md: '15px' }}
        fontWeight={500}
        color='var(--orange)'
        fontFamily='monospace'
      >
        {number}
      </Text>
      <Text
        fontSize={{ base: '13px', md: '15px' }}
        fontWeight={500}
        textTransform='uppercase'
        letterSpacing='1.5px'
        opacity={0.5}
      >
        {label}
      </Text>
    </MotionHStack>
  )
}

export default SectionLabel
