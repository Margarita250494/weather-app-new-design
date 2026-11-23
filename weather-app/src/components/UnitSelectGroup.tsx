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
      <span className="w-full h-px bg-glass" />

      <span className="caption text-neutral-300 px-2">{title}</span>

      <ul className={clsx('w-full flex flex-col gap-2', className)}>
        {options.map(({ label, value }) => {
          const isSelected = selectedValue === value

          return (
            <li key={String(value)} className="w-full px-2">
              <button
                type="button"
                onClick={() => onSelect(value)}
                className={clsx(
                  'flex items-center gap-2 justify-between duration-500 w-full',
                  isSelected && 'bg-neutral-0/20'
                )}
              >
                <span className="text-[16px] opacity-80 font-medium">
                  {label}
                </span>
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
