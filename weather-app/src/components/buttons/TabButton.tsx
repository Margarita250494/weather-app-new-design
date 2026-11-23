import clsx from 'clsx'
import type { TTabButton } from '../../utils/types'

const TabButton = ({ label, value, activeMode, setMode }: TTabButton) => {
  const isActive = activeMode === value

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={() => setMode(value)}
      className={clsx('rounded-full px-4 py-1.5 transition cursor-pointer', {
        'bg-orb font-semibold': isActive,
        'opacity-50 hover:opacity-80': !isActive,
      })}
    >
      {label}
    </button>
  )
}

export default TabButton
