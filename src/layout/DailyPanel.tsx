import DailyCard from '../components/cards/DailyCard.tsx'
import { getDailyData, getDayNameShort } from '../utils/helpers.ts'
import type { WeatherResponse } from '../utils/types.ts'
import { getWeatherIcon } from '../utils/weatherIcons.ts'

const DailyPanel = ({ weather }: { weather: WeatherResponse }) => {
  const dailyData = getDailyData(weather)
  const unit = weather.current_units.temperature_2m
  const dayIsTrue = 1
  return (
    <div className=" flex flex-col gap-6">
      <h5 className="section-title">Daily Forecast</h5>
      <div className="daily-grid ">
        {dailyData.map(({ time, temperature_2m_min, temperature_2m_max, weather_code }) => {
          const icon = getWeatherIcon(weather_code, dayIsTrue)
          return (
            <DailyCard
              key={time}
              dayName={getDayNameShort(time)}
              icon={icon}
              tMin={temperature_2m_min}
              tMax={temperature_2m_max}
              unit={unit}
            />
          )
        })}
      </div>
    </div>
  )
}
export default DailyPanel
