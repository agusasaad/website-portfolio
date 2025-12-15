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
    offset: ['start 90%', 'start 30%'],
  })

  // 🔥 CLAVE: entra grande → se normaliza
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

  return (
    <Box ref={ref} position='relative' overflow='hidden'>
      <motion.div style={{ scale, willChange: 'transform' }}>
        <Image src={src} alt='image' w='100%' h='100%' objectFit='cover' />
      </motion.div>

      <Noise patternSize={600} refreshInterval={2} tileSize={90} alpha={30} />
    </Box>
  )
}

export default ParallaxImage
