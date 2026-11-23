import { useCallback, useState } from 'react'

export const useCityShowSearch = () => {
  const [selected, setSelected] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const dismiss = useCallback(() => setDismissed(true), [])
  const undismiss = useCallback(() => setDismissed(false), [])
  const select = useCallback(() => setSelected(true), [])
  const unselect = useCallback(() => setSelected(false), [])

  return { selected, dismissed, dismiss, undismiss, select, unselect }
}
