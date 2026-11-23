import type { TSwitcherInput } from '../utils/types.ts'

const SwitcherInput = ({ switcherLabel, isImperial, handleChange }: TSwitcherInput) => {
  return (
    <div className="px-2 pt-2 flex w-full justify-between items-center">
      <span>Switch to {switcherLabel}</span>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="units-toggle"
          id="units-toggle"
          className="sr-only peer"
          checked={isImperial}
          onChange={handleChange}
        />

        <label
          htmlFor="units-toggle"
          className="units-toggle"
          aria-label="Switch between metric and imperial units"
        />
      </div>
    </div>
  )
}
export default SwitcherInput
