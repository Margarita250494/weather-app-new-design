import clsx from 'clsx'
import type { TButton } from '../utils/types.ts'
import { CaretDown } from './Icons.ts'

const Button = ({
  handleMenuOpen,
  ariaExpanded,
  icon,
  buttonLabel = 'Units',
  className,
}: TButton) => {
  return (
    <button
      onClick={handleMenuOpen}
      aria-expanded={ariaExpanded}
      className={clsx(
        'rounded-sm py-2 px-4 flex gap-3 items-center',
        'transition-all duration-500 ease-out',
        'hover:shadow-[0_4px_12px_rgba(2,1,44,0.45)]',
        'hover:bg-neutral-0/30',
        'active:shadow-[inset_0_2px_6px_rgba(2,1,44,0.35)]',
        'active:scale-[0.98]',
        className
      )}
    >
      {icon}
      <span>{buttonLabel}</span>
      <CaretDown className={clsx('duration-500', ariaExpanded ? 'rotate-180' : 'rotate-0')} />
    </button>
  )
}
export default Button
