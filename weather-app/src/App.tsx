import { useState } from 'react'
import Header from './layout/Header.tsx'
import Main from './layout/Main.tsx'
import { UNIT_SYSTEMS } from './utils/helpers.ts'
import type { UnitSettings } from './utils/types.ts'

function App() {
  const [units, setUnits] = useState<UnitSettings>(UNIT_SYSTEMS.metric)
  return (
    <div className=" flex flex-col items-center relative min-h-screen overflow-hidden bg-sky font-sans font-light text-ink">
      <div className="w-full max-w-312.5 p-5 md:p-12  flex flex-col items-center">
        <Header units={units} onSelect={setUnits} />

        <Main units={units} />
      </div>
    </div>
  )
}

export default App
