import clsx from 'clsx'
import { useState } from 'react'
import HeroCard from '../components/cards/HeroCard.tsx'
import HourlyPanel from '../components/cards/HourlyPanel.tsx'
import MetricCard from '../components/cards/MetricCard.tsx'
import { Hourly, Week } from '../components/Icons.ts'
import { getMetricData } from '../utils/data.tsx'
import { useWeatherData } from '../utils/hooks/useWeatherData.ts'
import type { TWeatherPanel } from '../utils/types.ts'
import DailyPanel from './DailyPanel.tsx'
import { LoadingDots } from './Loading.tsx'
import TabButton from '../components/buttons/TabButton.tsx'

const WeatherPanel = ({ coords, location, units }: TWeatherPanel) => {
  const [mode, setMode] = useState<'day' | 'week'>('day')
  const { weather, loading, error } = useWeatherData(coords, units)
  if (error) return <p>{error}</p>
  if (!weather) return null
  const metric = weather ? getMetricData(weather) : []

  return (
    <div className="w-full flex flex-col  gap-8">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
        <section
          className={clsx(
            'w-full flex items-center justify-center duration-500'
          )}
        >
          {loading || !weather ? (
            <LoadingDots />
          ) : (
            <HeroCard location={location} weather={weather} />
          )}
        </section>
        <section className="h-auto grid grid-cols-2 gap-4 w-full">
          {metric.map(({ title, value, unit, icon }) => (
            <MetricCard
              key={title}
              title={title}
              weather={value}
              unit={unit}
              icon={icon}
            />
          ))}
        </section>
      </div>
      <section
        className={clsx(
          'relative rounded-[30px] bg-glass flex flex-col shadow-soft px-2' +
            ' py-3' +
            ' md:p-6' +
            ' backdrop-blur ',
          mode === 'day' ? 'gap-4' : 'gap-8'
        )}
      >
        <div className="flex items-center justify-between gap-3 px-2">
          <h2 className="text-lg opacity-80 font-bold flex gap-3 items-center">
            {mode === 'day' ? <Hourly /> : <Week />}Forecast
          </h2>
          <div
            role="tablist"
            aria-label="Weather forecast"
            className="flex rounded-full bg-glass-strong p-1 text-xs uppercase tracking-widest shadow-soft"
          >
            <TabButton
              label="Day"
              value="day"
              activeMode={mode}
              setMode={setMode}
            />

            <TabButton
              label="Week"
              value="week"
              activeMode={mode}
              setMode={setMode}
            />
          </div>
        </div>
        {mode === 'day' ? (
          <HourlyPanel weather={weather} />
        ) : (
          <DailyPanel weather={weather} />
        )}
      </section>
    </div>
  )
}
export default WeatherPanel
