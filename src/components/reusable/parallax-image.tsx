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
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1])

  return (
    <Box
      ref={ref}
      position='relative'
      overflow='hidden'
      aspectRatio={16 / 10}
      w='100%'
    >
      <motion.div style={{ y, scale }} className='parallax-inner'>
        <Image src={src} alt='image' w='100%' h='100%' objectFit='cover' />
      </motion.div>

      <Noise patternSize={500} refreshInterval={2} tileSize={90} alpha={40} />
    </Box>
  )
}

export default ParallaxImage
