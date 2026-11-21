import { useState } from 'react'

export const useListNavigation = (length: number) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const active = activeIndex < length ? activeIndex : -1

  const next = () => setActiveIndex(active === length - 1 ? 0 : active + 1)
  const prev = () => setActiveIndex(active <= 0 ? length - 1 : active - 1)
  const reset = () => setActiveIndex(-1)

  return { active, setActive: setActiveIndex, next, prev, reset }
}
