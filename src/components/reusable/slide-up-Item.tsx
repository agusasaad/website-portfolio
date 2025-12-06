'use client'

import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

interface SlideUpItemProps {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export const SlideUpItem = ({
  children,
  delay = 0,
  duration = 0.8,
}: SlideUpItemProps) => {
  return (
    <Box overflow={'hidden'}>
      <motion.div
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay,
          duration,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </Box>
  )
}
