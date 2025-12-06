'use client'

import { Box, BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const MotionDiv = motion.div

interface MotionFadeDownProps extends BoxProps {
  children: React.ReactNode
  delay?: number
  y?: number
}

export const MotionFadeDown = ({
  children,
  delay = 0,
  y = -40,
  ...props
}: MotionFadeDownProps) => {
  return (
    <Box {...props}>
      <MotionDiv
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay }}
        style={{ width: '100%', display: 'flex', alignItems: 'center' }}
      >
        {children}
      </MotionDiv>
    </Box>
  )
}
