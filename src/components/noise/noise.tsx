'use client'

import { useEffect, useRef, type FC } from 'react'
import './../../styles/Noise.css'

interface NoiseProps {
  tileSize?: number // tamaño del grano (MENOR = más grande)
  patternSize?: number // resolución del canvas (MENOR = más rápido)
  refreshInterval?: number // frames entre updates
  alpha?: number // intensidad
}

const Noise: FC<NoiseProps> = ({
  tileSize = 90,
  patternSize = 300, // 🔥 controla performance
  refreshInterval = 8, // ~8–10fps
  alpha = 35,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let raf: number

    // 🔹 Canvas principal con resolución limitada
    const resize = () => {
      canvas.width = patternSize
      canvas.height = patternSize

      canvas.style.width = '100%'
      canvas.style.height = '100%'
    }

    // 🔹 Tile de ruido
    const tile = document.createElement('canvas')
    tile.width = tileSize
    tile.height = tileSize
    const tileCtx = tile.getContext('2d')!

    const drawTile = () => {
      const img = tileCtx.createImageData(tileSize, tileSize)
      const d = img.data
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255
        d[i] = d[i + 1] = d[i + 2] = v
        d[i + 3] = alpha
      }
      tileCtx.putImageData(img, 0, 0)
    }

    const loop = () => {
      if (frame % refreshInterval === 0) {
        drawTile()
        const pattern = ctx.createPattern(tile, 'repeat')
        if (pattern) {
          ctx.clearRect(0, 0, patternSize, patternSize)
          ctx.fillStyle = pattern
          ctx.fillRect(0, 0, patternSize, patternSize)
        }
      }
      frame++
      raf = requestAnimationFrame(loop)
    }

    resize()
    loop()

    return () => cancelAnimationFrame(raf)
  }, [tileSize, patternSize, refreshInterval, alpha])

  return (
    <canvas
      ref={canvasRef}
      className='noise-overlay'
      style={{
        pointerEvents: 'none',
        imageRendering: 'pixelated',
      }}
    />
  )
}

export default Noise
