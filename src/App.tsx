import { useState } from 'react'
import Header from './layout/Header.tsx'
import Main from './layout/Main.tsx'
import { UNIT_SYSTEMS } from './utils/helpers.ts'
import type { UnitSettings } from './utils/types.ts'

function App() {
  const [units, setUnits] = useState<UnitSettings>(UNIT_SYSTEMS.metric)
  return (
    <div className=" flex flex-col items-center">
      <div className="weather-container py-5 md:py-12  flex flex-col items-center">
        <Header units={units} onSelect={setUnits} />

        <Main units={units} />
      </div>
    </div>
  )
}

export default App
