'use client'

import { useEffect, useRef } from 'react'

const InteractiveBackground = () => {
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const root = document.documentElement

    const setPos = (clientX: number, clientY: number) => {
      const x = (clientX / window.innerWidth) * 100
      const y = (clientY / window.innerHeight) * 100
      root.style.setProperty('--mx', `${x}%`)
      root.style.setProperty('--my', `${y}%`)
    }

    const onMove = (event: MouseEvent) => {
      if (rafRef.current) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        setPos(event.clientX, event.clientY)
      })
    }

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) return
      if (rafRef.current) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        setPos(touch.clientX, touch.clientY)
      })
    }

    setPos(window.innerWidth * 0.5, window.innerHeight * 0.35)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTouchMove)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [])

  return <div aria-hidden className="water-layer" />
}

export default InteractiveBackground
