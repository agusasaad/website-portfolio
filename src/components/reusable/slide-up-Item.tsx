'use client'
import { Box, BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

interface SlideUpItemProps extends BoxProps {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export const SlideUpItem = ({
  children,
  delay = 0,
  duration = 0.9,
  ...props
}: SlideUpItemProps) => {
  return (
    <Box overflow={'hidden'} {...props}>
      <motion.div
        initial={{ y: 130, opacity: 0 }}
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
