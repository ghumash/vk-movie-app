import { useEffect, useRef } from 'react'

interface Options {
  callback: () => void
  enabled?: boolean
}

export const useInfiniteScroll = ({ callback, enabled = true }: Options) => {
  const loaderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!enabled) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callback()
      },
      { threshold: 1 },
    )

    const node = loaderRef.current
    if (node) observer.observe(node)

    return () => {
      if (node) observer.unobserve(node)
      observer.disconnect()
    }
  }, [callback, enabled])

  return { loaderRef }
}
