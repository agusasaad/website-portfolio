'use client'

import { HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionText = motion(Text)
const MotionSpan = motion.span

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const letterVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    y: 60,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
}

const HeaderSection = ({
  title,
  section,
}: {
  title: string
  section: string
}) => {
  return (
    <HStack w='100%' align='flex-start' gap='16px'>
      <HStack w='100%' align='flex-start' gap='10px'>
        <MotionText
          fontSize='60px'
          fontWeight={600}
          lineHeight='normal'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          display='inline-block'
        >
          {title.split('').map((char, index) => (
            <span
              key={index}
              style={{ display: 'inline-block', overflow: 'hidden' }}
            >
              <MotionSpan
                variants={letterVariants}
                style={{
                  display: 'inline-block',
                  whiteSpace: char === ' ' ? 'pre' : 'normal',
                }}
              >
                {char}
              </MotionSpan>
            </span>
          ))}
        </MotionText>

        <Text>[ {section} ]</Text>
      </HStack>
    </HStack>
  )
}

export default HeaderSection
