import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Item = { title: string; subtitle?: string; colorClass?: string }

interface StickyStackProps {
  items?: Item[]
  className?: string
  spacing?: number // vertical spacing (px) between stacked cards
  topClass?: string // override the sticky top utility classes
  scaleStep?: number // per-card scale decrement (default 0.03)
  minScale?: number // clamp minimum scale
  scrollRange?: [number, number] // scrollYProgress range to map from->to
}

const DEFAULT_ITEMS: Item[] = [
  { title: 'Project One', subtitle: 'Short description for project one.', colorClass: 'bg-white' },
  { title: 'Project Two', subtitle: 'Short description for project two.', colorClass: 'bg-white' },
  { title: 'Project Three', subtitle: 'Short description for project three.', colorClass: 'bg-white' },
]

export default function StickyStack({
  items = DEFAULT_ITEMS,
  className = '',
  spacing = 12,
  topClass = 'top-24 md:top-32',
  scaleStep = 0.03,
  minScale = 0.82,
  scrollRange = [0, 1],
}: StickyStackProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })

  const total = items.length

  return (
    <div ref={containerRef} className={`h-[85vh] ${className}`}>
      <div className="w-full h-full flex flex-col items-center justify-start">
        {items.map((item, index) => {
          const factor = total - 1 - index
          const targetScale = 1 - factor * scaleStep // matches formula in the request
          const clampedTarget = Math.max(minScale, targetScale)
          const scale = useTransform(scrollYProgress, scrollRange, [1, clampedTarget])
          const yTarget = factor * spacing
          const y = useTransform(scrollYProgress, scrollRange, [0, yTarget])

          return (
            <motion.div
              key={index}
              style={{ scale, y, transformOrigin: 'top center', zIndex: total - index }}
              className={`sticky ${topClass} w-full max-w-3xl px-4`}
            >
              <div
                className={`rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-800 ${
                  item.colorClass ?? 'bg-white'
                }`}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                {item.subtitle && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.subtitle}</p>}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
