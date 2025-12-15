'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const panels = Array.from({ length: 5 })
const WAIT_TIME = 0.01

export default function PageReveal() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 9999,
        display: 'flex',
        maxHeight: '100dvh',
      }}
    >
      {panels.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: '-100%', opacity: 0 }} // 👈 Se agrega la opacidad
          transition={{
            duration: 1.1,
            ease: [0.85, 0, 0.15, 1],
            delay: WAIT_TIME + i * 0.1,
          }}
          onAnimationComplete={() => {
            if (i === panels.length - 1) {
              setTimeout(() => {
                setVisible(false)
              }, 80)
            }
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
