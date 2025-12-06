'use client'

import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const MotionBox = motion(Box)

interface MotionHoverContentProps {
  children: React.ReactNode
  height?: number // altura de cada "span"
  duration?: number
}

export const MotionHoverContent = ({
  children,
  height = 35,
  duration = 0.3,
}: MotionHoverContentProps) => {
  return (
    <Box position='relative' overflow='hidden' h={`${height}px`}>
      <MotionBox
        display='flex'
        flexDirection='column'
        gap='0'
        whileHover={{ y: -height }}
        transition={{ duration, ease: 'easeInOut' }}
      >
        <Box display='flex' alignItems='center' gap='8px'>
          {children}
        </Box>
        <Box display='flex' alignItems='center' gap='8px'>
          {children}
        </Box>
      </MotionBox>
    </Box>
  )
}
