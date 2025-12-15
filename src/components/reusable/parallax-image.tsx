'use client'

import { Box, Image } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Noise from '../noise/noise'

type Props = {
  src: string
}

const ParallaxImage = ({ src }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-80, 80])
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1])

  return (
    <Box ref={ref} position='relative' overflow='hidden'>
      <motion.div style={{ y, scale }}>
        <Image
          src={src}
          alt='image'
          w='100%'
          h='100%'
          maxH={{ base: '300px', md: '100%' }}
        />
      </motion.div>

      <Noise patternSize={600} refreshInterval={2} tileSize={90} alpha={30} />
    </Box>
  )
}

export default ParallaxImage
