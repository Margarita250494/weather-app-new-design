import type { IconType } from 'react-icons'

const MetricCard = ({
  title,
  weather,
  unit,
  icon: Icon,
}: {
  title: string
  weather: number
  unit: string,
  icon:IconType
}) => {
  return (
    <div className="rounded-2xl bg-glass p-3 md:p-5 flex flex-col gap-4 shadow-soft backdrop-blur">
      <h6 className="flex font-medium items-center gap-3 text-sm opacity-70">
        <Icon size={20} />
        {title}
      </h6>
      <span className="text-3xl font-medium">
        {weather} {unit}
      </span>
    </div>
  )
}
export default MetricCard
