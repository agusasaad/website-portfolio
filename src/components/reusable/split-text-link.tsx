import { motion, type MotionStyle, type Easing } from 'framer-motion'

const MotionDiv = motion.div

type SplitHoverTextProps = {
  text: string
  style?: MotionStyle
  className?: string
}

const containerVariants = {
  rest: { transition: { staggerChildren: 0.015, staggerDirection: -1 } },
  hover: { transition: { staggerChildren: 0.02, staggerDirection: 1 } },
}

const hardEaseIn: Easing = [0.7, 0, 0.84, 0]

const topLetterVariants = {
  rest: { y: '0%', transition: { duration: 0.4, ease: hardEaseIn } },
  hover: { y: '-100%', transition: { duration: 0.4, ease: hardEaseIn } },
}

const bottomLetterVariants = {
  rest: { y: '100%', transition: { duration: 0.4, ease: hardEaseIn } },
  hover: { y: '0%', transition: { duration: 0.4, ease: hardEaseIn } },
}

export const SplitHoverText = ({
  text,
  style,
  className,
}: SplitHoverTextProps) => {
  return (
    <MotionDiv
      variants={containerVariants}
      initial='rest'
      animate='rest'
      whileHover='hover'
      style={{
        display: 'inline-flex',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        gap: 0,
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        fontWeight: style?.fontWeight,
        textTransform: style?.textTransform,
        ...style,
      }}
      className={className}
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
    </MotionDiv>
  )
}
