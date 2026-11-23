import clsx from 'clsx'
import * as React from 'react'
import Logo from '../assets/logo.svg'
import { CaretDown, Settings } from '../components/Icons.ts'
import SwitcherInput from '../components/SwitcherInput.tsx'
import UnitSelectGroup from '../components/UnitSelectGroup.tsx'
import { UNIT_GROUPS } from '../utils/data.tsx'
import { getWeatherUnits, UNITS_KEY } from '../utils/helpers.ts'
import { useOpenHeaderMenu } from '../utils/hooks/useOpenHeaderMenu.ts'
import type { UnitSettings } from '../utils/types.ts'

const Header = ({
  units,
  onSelect,
}: {
  units: UnitSettings
  onSelect: (units: UnitSettings) => void
}) => {
  const { openMenu, handleMenuClick, headerMenuRef } = useOpenHeaderMenu()
  const { switcherLabel, isImperial } = getWeatherUnits(units)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    const isChecked = e.target.checked

    onSelect({
      ...units,
      temperatureUnit: isChecked
        ? UNITS_KEY.TEMPERATURE_I
        : UNITS_KEY.TEMPERATURE_M,
      windUnit: isChecked ? UNITS_KEY.WIND_I : UNITS_KEY.WIND_M,
      precipitationUnit: isChecked
        ? UNITS_KEY.PRECIPITATION_I
        : UNITS_KEY.PRECIPITATION_M,
    })
  }

  return (
    <header className=" pb-5 md:pb-12 w-full flex gap-2 justify-between">
      <img
        src={Logo}
        alt="Weather-now-logo"
        className="object-fit max-w-37.5 md:max-w-49.25"
      />
      <div ref={headerMenuRef} className="relative">
        <button
          type="button"
          onClick={handleMenuClick}
          className="cursor-pointer flex gap-2 items-center rounded-full bg-orb px-4 py-2 transition-all duration-500 scale-100 hover:scale-[1.02] active:scale-[0.98] "
          aria-expanded={openMenu}
        >
          <Settings />
          <span className="text-sm opacity-80 font-semibold">Units</span>
          <CaretDown
            className={clsx(
              'duration-500',
              openMenu ? 'rotate-180' : 'rotate-0'
            )}
          />
        </button>

        {openMenu && (
          <div className="rounded-3xl border-ink/10 bg-glass-strong/95 p-2 text-ink shadow-soft backdrop-blur-xl absolute right-0 top-full z-10 mt-2 w-70 flex flex-col gap-4">
            <SwitcherInput
              switcherLabel={switcherLabel}
              isImperial={isImperial}
              handleChange={handleChange}
            />
            {UNIT_GROUPS.map(({ title, unitKey, variants }, index) => {
              const isLast = index === UNIT_GROUPS.length - 1
              return (
                <UnitSelectGroup
                  key={unitKey}
                  title={title}
                  selectedValue={units[unitKey]}
                  onSelect={(value) => onSelect({ ...units, [unitKey]: value })}
                  options={variants}
                  className={clsx(isLast && 'pb-1.5')}
                />
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
