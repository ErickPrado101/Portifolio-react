'use client'

import { useEffect, useMemo, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const state = {
      w: 0,
      h: 0,
      particles: [] as Particle[],
      pointerX: -9999,
      pointerY: -9999,
    }

    const resize = () => {
      const { innerWidth, innerHeight } = window
      state.w = innerWidth
      state.h = innerHeight
      canvas.width = Math.floor(innerWidth * dpr)
      canvas.height = Math.floor(innerHeight * dpr)
      canvas.style.width = `${innerWidth}px`
      canvas.style.height = `${innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round(Math.max(70, Math.min(220, (innerWidth * innerHeight) / 12000)))
      if (state.particles.length !== count) {
        state.particles = Array.from({ length: count }, () => ({
          x: Math.random() * innerWidth,
          y: Math.random() * innerHeight,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 1 + Math.random() * 1.4,
        }))
      }
    }

    const onPointerMove = (x: number, y: number) => {
      state.pointerX = x
      state.pointerY = y
    }

    const onMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY)

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      onPointerMove(t.clientX, t.clientY)
    }

    const onPointerLeave = () => {
      state.pointerX = -9999
      state.pointerY = -9999
    }

    const step = () => {
      ctx.clearRect(0, 0, state.w, state.h)

      const linkDist = 120
      const linkDist2 = linkDist * linkDist

      const pointerDist = 170
      const pointerDist2 = pointerDist * pointerDist

      const repelRadius = 90
      const repelRadius2 = repelRadius * repelRadius
      const repelStrength = 1.15

      for (const p of state.particles) {
        if (state.pointerX > -1000) {
          const dxp = p.x - state.pointerX
          const dyp = p.y - state.pointerY
          const d2p = dxp * dxp + dyp * dyp
          if (d2p > 0.0001 && d2p < repelRadius2) {
            const d = Math.sqrt(d2p)
            const t = 1 - d / repelRadius
            const nx = dxp / d
            const ny = dyp / d
            p.vx += nx * t * repelStrength
            p.vy += ny * t * repelStrength
          }
        }

        p.x += p.vx
        p.y += p.vy

        p.vx *= 0.98
        p.vy *= 0.98

        if (p.x < -20) p.x = state.w + 20
        if (p.x > state.w + 20) p.x = -20
        if (p.y < -20) p.y = state.h + 20
        if (p.y > state.h + 20) p.y = -20
      }

      // Links
      for (let i = 0; i < state.particles.length; i++) {
        const a = state.particles[i]
        for (let j = i + 1; j < state.particles.length; j++) {
          const b = state.particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 > linkDist2) continue

          const alpha = 1 - d2 / linkDist2
          ctx.strokeStyle = `rgba(255,255,255,${0.12 * alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // Particles
      for (const p of state.particles) {
        ctx.fillStyle = 'rgba(255,255,255,0.65)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = window.requestAnimationFrame(step)
    }

    resize()

    if (!prefersReducedMotion) {
      rafRef.current = window.requestAnimationFrame(step)
    } else {
      step()
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('mouseleave', onPointerLeave)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('mouseleave', onPointerLeave)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [prefersReducedMotion])

  return <canvas aria-hidden ref={canvasRef} className="particles-layer" />
}

export default ParticlesBackground
