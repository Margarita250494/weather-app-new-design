import clsx from 'clsx'
import type { TDailyCard } from '../../utils/types.ts'

const DailyCard = ({ dayName, icon, tMin, tMax, unit }: TDailyCard) => {
  return (
    <div className="flex shrink-0 flex-col items-center gap-4 px-3">
      <h6 className="text-[16px] font-medium">{dayName}</h6>
      <span className={clsx('grid h-16 w-16 place-items-center rounded-full bg-orb')}>
        <icon.icon className={clsx('w-8 h-8 icon-3d', icon.textClass)} />
      </span>
      <div className="w-full flex justify-between gap-1 items-center">
        <span className="text-sm opacity-80 font-semibold ">
          {Math.round(tMax)}
          {unit}
        </span>
        <span className="text-sm opacity-50 font-semibold">
          {Math.round(tMin)}
          {unit}
        </span>
      </div>
    </div>
  )
}
export default DailyCard
