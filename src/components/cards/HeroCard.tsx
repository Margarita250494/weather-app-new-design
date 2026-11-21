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
    <div className="flex flex-col md:flex-row w-full gap-6 justify-between items-center">
      <h5 className="location flex flex-col gap-2 text-center md:text-left">
        {location?.city || location?.locality || '—'}, {location?.countryName}
        <span className=" body-small text-center md:text-left text-neutral-300">{showTime}</span>
      </h5>
      <img src={icon.icon} alt={icon.label} className="w-14 h-14" />
      <p className="temperature">
        {weather.current.temperature_2m}
        {weather.current_units.temperature_2m}
      </p>
    </div>
  )
}
export default HeroCard
