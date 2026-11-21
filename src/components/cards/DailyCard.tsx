import type { TDailyCard } from '../../utils/types.ts'

const DailyCard = ({ dayName, icon, tMin, tMax, unit }: TDailyCard) => {
  return (
    <div className="daily-card flex flex-col gap-4 justify-between items-center">
      <h6 className="body-small">{dayName}</h6>
      <img src={icon.icon} alt={icon.label} className="w-14 h-14" />
      <div className="w-full flex justify-between gap-1 items-center">
        <span className="caption ">
          {Math.round(tMax)}
          {unit}
        </span>
        <span className="caption text-neutral-300">
          {Math.round(tMin)}
          {unit}
        </span>
      </div>
    </div>
  )
}
export default DailyCard
