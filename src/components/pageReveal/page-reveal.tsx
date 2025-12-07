'use client'

import { motion } from 'framer-motion'

const panels = Array.from({ length: 5 })
const WAIT_TIME = 0.01

export default function PageReveal() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 9999,
        display: 'flex',
      }}
    >
      {panels.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{
            duration: 1.1,
            ease: [0.85, 0, 0.15, 1],
            delay: WAIT_TIME + i * 0.1,
          }}
          style={{
            flex: 1,
            background: '#ff462e',
          }}
        />
      ))}
    </div>
  )
}
