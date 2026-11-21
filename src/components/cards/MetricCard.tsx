const MetricCard = ({ title, weather, unit }: { title: string; weather: number; unit: string }) => {
  return (
    <div className="min-h-29.25 metric-card p-3 md:p-5 flex flex-col gap-4 md:gap-6 ">
      <h6 className="body-small text-neutral-300">{title}</h6>
      <span className="metric-value">
        {weather} {unit}
      </span>
    </div>
  )
}
export default MetricCard
