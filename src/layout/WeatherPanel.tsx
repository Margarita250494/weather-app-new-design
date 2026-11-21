import clsx from 'clsx'
import HeroCard from '../components/cards/HeroCard.tsx'
import HourlyPanel from '../components/cards/HourlyPanel.tsx'
import MetricCard from '../components/cards/MetricCard.tsx'
import { getMetricData } from '../utils/data.tsx'
import { useWeatherData } from '../utils/hooks/useWeatherData.ts'
import type { TWeatherPanel } from '../utils/types.ts'
import DailyPanel from './DailyPanel.tsx'
import { LoadingDots } from './Loading.tsx'

const WeatherPanel = ({ coords, location, units }: TWeatherPanel) => {
  const { weather, loading, error } = useWeatherData(coords, units)
  if (error) return <p>{error}</p>
  if (!weather) return null
  const metric = weather ? getMetricData(weather) : []

  return (
    <section className="w-full flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-[70%] flex flex-col gap-8">
        <div
          className={clsx(
            'hero-card flex items-center justify-center  h-75 duration-500',
            loading ? 'bg-neutral-800' : "bg-[url('/bg-today-large.svg')] bg-cover bg-center"
          )}
        >
          {loading || !weather ? (
            <LoadingDots />
          ) : (
            <HeroCard location={location} weather={weather} />
          )}
        </div>
        <div className="metrics-grid">
          {metric.map(({ title, value, unit }) => (
            <MetricCard key={title} title={title} weather={value} unit={unit} />
          ))}
        </div>
        <DailyPanel weather={weather} />
      </div>

      <HourlyPanel weather={weather} />
    </section>
  )
}
export default WeatherPanel
