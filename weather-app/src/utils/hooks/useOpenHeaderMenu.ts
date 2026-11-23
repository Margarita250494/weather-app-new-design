import { useCallback, useRef, useState } from 'react'
import { useClickOutside } from './useClickOutside.ts'

export const useOpenHeaderMenu = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const headerMenuRef = useRef<HTMLDivElement>(null)
  const handleMenuClick = () => {
    setOpenMenu((prev) => !prev)
  }
  const closeHeaderMenu = useCallback(() => {
    setOpenMenu(false)
  }, [])

  useClickOutside(headerMenuRef, closeHeaderMenu)

  return { openMenu, handleMenuClick, headerMenuRef }
}
