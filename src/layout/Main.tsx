import { useLocationCoords } from '../utils/hooks/useLocationCoords.ts'
import type { UnitSettings } from '../utils/types.ts'
import SearchField from './SearchField.tsx'
import WeatherPanel from './WeatherPanel.tsx'

const Main = ({ units }: { units: UnitSettings }) => {
  const { setCoords, coords, location } = useLocationCoords()
  return (
    <main className="w-full flex flex-col gap-8 md:gap-16">
      <SearchField onSelect={setCoords} />
      <WeatherPanel coords={coords} location={location} units={units} />
    </main>
  )
}
export default Main
