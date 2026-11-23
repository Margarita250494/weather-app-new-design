import clsx from 'clsx'
import { getDayName, getHourLabel, isCurrentHour } from '../../utils/helpers.ts'
import { useHourlyWeather } from '../../utils/hooks/useHourlyWeather.ts'
import type { WeatherResponse } from '../../utils/types.ts'
import { getWeatherIcon } from '../../utils/weatherIcons.ts'

const HourlyPanel = ({ weather }: { weather: WeatherResponse }) => {
  const {
    listRef,
    currentRef,
    selectDay,
    activeDay,
    days,
    dayHours,
    unit,
  } = useHourlyWeather(weather)

  return (
    <div className="flex flex-col ">
      <div role="tablist" aria-label="Choose day">
        <ul className="flex items-center overflow-x-auto gap-2">
          {days.map((day) => (
            <li key={day} className=" flex justify-center items-center pb-6 px-2">
              <button
                className={clsx(
                  'flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-sm ' +
                    ' duration-500 w-full cursor-pointer',
                  day === activeDay ? 'bg-orb' : 'bg-glass-strong/60 opacity-60 hover:opacity-90'
                )}
                onClick={selectDay(day)}
              >
                {getDayName(day)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div ref={listRef} className="pt-1 flex overflow-x-auto pb-2 ">
        {dayHours.map((item) => {
          const isCurrent = isCurrentHour(item.time, weather.current.time)
          const icon = getWeatherIcon(item.weather_code, item.is_day)

          return (
            <div
              key={item.time}
              ref={isCurrent ? currentRef : null}
              className="flex shrink-0 flex-col items-center gap-4 pl-8 pr-4"
            >
              <span className="text-sm">{getHourLabel(item.time)}</span>
              <span className="grid h-16 w-16 place-items-center rounded-full bg-orb">
                <icon.icon className={clsx('w-8 h-8 icon-3d', icon.textClass)} />
              </span>

              <span className="text-sm opacity-80 font-semibold">
                {item.temperature}
                {unit}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default HourlyPanel

