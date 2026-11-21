import { useLocationCoords } from '../utils/hooks/useLocationCoords.ts'
import type { UnitSettings } from '../utils/types.ts'
import { getWeatherIcon } from '../utils/weatherIcons.ts'
import SearchField from './SearchField.tsx'
import WeatherPanel from './WeatherPanel.tsx'

const Main = ({ units }: { units: UnitSettings }) => {
  const { setCoords, coords, location } = useLocationCoords()
  console.log(getWeatherIcon(0, 1)) // sunny днём
  console.log(getWeatherIcon(0, 0)) // sunny ночью
  console.log(getWeatherIcon(999, 1)) // запасная картинка

  return (
    <main className="w-full flex flex-col gap-8 md:gap-16">
      <h1 className="heading text-center">How's the sky looking today?</h1>
      <SearchField onSelect={setCoords} />
      <WeatherPanel coords={coords} location={location} units={units} />
    </main>
  )
}
export default Main
