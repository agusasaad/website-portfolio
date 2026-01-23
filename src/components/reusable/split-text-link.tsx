import { Easing, motion, type MotionStyle } from 'framer-motion'
import { Link, type LinkProps } from '@chakra-ui/react'

const MotionLink = motion(Link)

type SplitHoverTextProps = LinkProps & {
  text: string
}

/* =========================
   Container
========================= */

const containerVariants = {
  rest: {
    transition: {
      staggerChildren: 0.015,
      staggerDirection: -1,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: 1,
    },
  },
}

/* =========================
   Easing (video-style)
========================= */

// Muy lento al inicio → termina seco y rápido
const hardEaseIn: Easing = [0.7, 0, 0.84, 0]

const topLetterVariants = {
  rest: {
    y: '0%',
    transition: {
      duration: 0.4,
      ease: hardEaseIn,
    },
  },
  hover: {
    y: '-100%',
    transition: {
      duration: 0.4,
      ease: hardEaseIn,
    },
  },
}

const bottomLetterVariants = {
  rest: {
    y: '100%',
    transition: {
      duration: 0.4,
      ease: hardEaseIn,
    },
  },
  hover: {
    y: '0%',
    transition: {
      duration: 0.4,
      ease: hardEaseIn,
    },
  },
}

/* =========================
   Component
========================= */

export const SplitHoverText = ({ text, ...linkProps }: SplitHoverTextProps) => {
  return (
    <MotionLink
      variants={containerVariants}
      initial='rest'
      animate='rest'
      whileHover='hover'
      display='inline-flex'
      whiteSpace='nowrap'
      cursor='pointer'
      gap='0px'
      {...linkProps}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          style={
            {
              position: 'relative',
              display: 'inline-flex',
              overflow: 'hidden',
            } as MotionStyle
          }
        >
          <motion.span
            variants={topLetterVariants}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>

          <motion.span
            variants={bottomLetterVariants}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'inline-block',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </motion.span>
      ))}
    </MotionLink>
  )
}
