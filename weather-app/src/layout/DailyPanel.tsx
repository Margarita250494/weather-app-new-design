import DailyCard from '../components/cards/DailyCard.tsx'
import { getDailyData, getDayNameShort } from '../utils/helpers.ts'
import type { WeatherResponse } from '../utils/types.ts'
import { getMoonPhase, getWeatherIcon } from '../utils/weatherIcons.ts'

const DailyPanel = ({ weather }: { weather: WeatherResponse }) => {
  const dailyData = getDailyData(weather)
  const unit = weather.current_units.temperature_2m
  const dayIsTrue = 1
  console.log(getDailyData(weather)[0])
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-10  overflow-x-auto pb-2 sm:justify-between ">
        {dailyData.map(
          ({
            time,
            temperature_2m_min,
            temperature_2m_max,
            weather_code,
            moon_phase,
          }) => {
            const icon = getWeatherIcon(weather_code, dayIsTrue)
            const moonPhase = getMoonPhase(moon_phase)
            return (
              <DailyCard
                key={time}
                dayName={getDayNameShort(time)}
                icon={icon}
                tMin={temperature_2m_min}
                tMax={temperature_2m_max}
                unit={unit}
                iconMoon={moonPhase.Icon}
              />
            )
          }
        )}
      </div>
    </div>
  )
}
export default DailyPanel
