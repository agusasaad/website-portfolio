'use client'

import { motion } from 'framer-motion'
import { HStack, Text } from '@chakra-ui/react'

type InfiniteCarouselProps = {
  items: string[]
  speed?: number
  gap?: number
}

const InfiniteCarousel = ({
  items,
  speed = 30,
  gap = 40,
}: InfiniteCarouselProps) => {
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <HStack
      w='100%'
      overflow='hidden'
      position='relative'
      whiteSpace='nowrap'
      border={'1px solid red'}
      bg={'var(--orange)'}
      py={'5px'}
      transform={'rotate(-1deg)'}
      mt={'100px'}
    >
      <motion.div
        style={{ display: 'flex' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Text
            key={index}
            fontSize='24px'
            fontWeight={550}
            mr={`${gap}px`}
            whiteSpace='nowrap'
          >
            {item}
          </Text>
        ))}
      </motion.div>
    </HStack>
  )
}

export default InfiniteCarousel
