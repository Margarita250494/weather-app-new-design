import clsx from 'clsx'
import type { UnitSelectGroupProps } from '../utils/types.ts'
import { Check } from './Icons'

const UnitSelectGroup = <T,>({
  title,
  options,
  selectedValue,
  onSelect,
  className,
}: UnitSelectGroupProps<T>) => {
  return (
    <>
      <span className="dropdown-divider" />

      <span className="caption text-neutral-300 px-2">{title}</span>

      <ul className={clsx('w-full flex flex-col gap-2', className)}>
        {options.map(({ label, value }) => {
          const isSelected = selectedValue === value

          return (
            <li key={String(value)} className="w-full">
              <button
                type="button"
                onClick={() => onSelect(value)}
                className={clsx(
                  'dropdown-item duration-500 w-full',
                  isSelected && 'bg-neutral-0/20'
                )}
              >
                {label}
                {isSelected && <Check className="w-5 h-5" />}
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UnitSelectGroup
