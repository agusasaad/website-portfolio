import { useScroll, useTransform } from 'framer-motion'
import { RefObject } from 'react'

export const useParallax = (ref: RefObject<HTMLElement>, distance = 100) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1])

  return { y, scale, opacity }
}
