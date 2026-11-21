import { type RefObject, useEffect } from 'react'

export const useClickOutside = (ref: RefObject<HTMLElement | null>, onOutside: () => void) => {
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onOutside()
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [ref, onOutside])
}
