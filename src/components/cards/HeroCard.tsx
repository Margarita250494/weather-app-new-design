import clsx from 'clsx'
import { showTime } from '../../utils/helpers.ts'
import type { LocationResponse, WeatherResponse } from '../../utils/types.ts'
import { getWeatherIcon } from '../../utils/weatherIcons.ts'

const HeroCard = ({
  location,
  weather,
}: {
  location: LocationResponse | null
  weather: WeatherResponse
}) => {
  const icon = getWeatherIcon(weather.current.weather_code, weather.current.is_day)
  return (
    <div className="flex flex-col w-full gap-6 justify-between items-center">
      <div className="flex flex-col items-center gap-2">
        <h5 className="text-2xl opacity-80 sm:text-3xl font-heading">
          {location?.city || location?.locality || '—'}, {location?.countryName}
        </h5>
        <span className="text-sm opacity-60 font-medium">{showTime}</span>
      </div>
      <p className="text-7xl font-semibold sm:text-8xl tracking-wide">
        {weather.current.temperature_2m}
        {weather.current_units.temperature_2m}
      </p>
      <div className="relative  grid h-46 w-46 place-items-center sm:h-62 sm:w-62">
        <div className={clsx('absolute inset-6 rounded-full blur-3xl', icon.bgClass)} />

        <icon.icon
          className={clsx('relative h-32 w-32 animate-float icon-3d sm:h-40' +
            ' sm:w-40', icon.textClass)}
        />
      </div>
    </div>
  )
}
export default HeroCard

//{`relative h-32 w-32 animate-float ${icon.textClass} icon-3d sm:h-40 sm:w-40`}