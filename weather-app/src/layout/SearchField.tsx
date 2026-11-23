import clsx from 'clsx'
import { MapPin, Search } from '../components/Icons.ts'
import { MIN_QUERY_LENGTH } from '../utils/hooks/useCitySearch.ts'
import { useCitySearchField } from '../utils/hooks/useCitySearchField.ts'
import type { Coords } from '../utils/types.ts'

const SearchField = ({ onSelect }: { onSelect: (coords: Coords) => void }) => {
  const {
    rootRef,
    query,
    results,
    active,
    tooShort,
    searching,
    searchError,
    notFound,
    showDropdown,
    setActive,
    handleChange,
    handlePick,
    handleSubmit,
    handleKeyDown,
    handleFocus,
  } = useCitySearchField(onSelect)

  return (
    <section ref={rootRef} className="relative w-full md:w-[50%] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 w-full  min-w-0 flex-1 items-center  rounded-full bg-glass px-4 py-3 shadow-soft backdrop-blur"
      >
        <Search className="w-6 h-6 opacity-45" />
        <label htmlFor="city-find" className="sr-only">
          Search Place
        </label>
        <input
          type="search"
          id="city-find"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          placeholder="Search for a place..."
          autoComplete="off"
          role="combobox"
          aria-expanded={showDropdown && results.length > 0}
          aria-controls="city-listbox"
          aria-activedescendant={
            active >= 0 ? `city-option-${active}` : undefined
          }
          className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-ink/50"
        />
      </form>

      {showDropdown && (
        <div className="absolute inset-x-0 top-full z-30 mt-3 rounded-3xl border-ink/10 bg-glass-strong/95 p-4 shadow-soft backdrop-blur-xl">
          {tooShort && (
            <p className="">
              Enter at least {MIN_QUERY_LENGTH} characters to search
            </p>
          )}
          {searching && <p className="">Searching...</p>}
          {searchError && <p className="">{searchError}</p>}
          {notFound && <p className="">Nothing found</p>}

          {results.length > 0 && (
            <ul
              id="city-listbox"
              role="listbox"
              className="max-h-72 overflow-y-auto  flex flex-col gap-4"
            >
              {results.map((city, index) => (
                <li
                  key={`${city.latitude}-${city.longitude}`}
                  id={`city-option-${index}`}
                  role="option"
                  aria-selected={index === active}
                  onClick={() => handlePick(city)}
                  onMouseEnter={() => setActive(index)}
                  //className={`dropdown-item cursor-pointer ${index === active ? 'selected' : ''}`}
                  className={clsx(
                    'cursor-pointer flex w-full justify-between items-center p-2 gap-3 rounded-2xl  text-left text-sm transition hover:bg-ink/10',
                    index === active && 'bg-ink/10'
                  )}
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> {city.name}
                  </span>
                  <span className="text-xs opacity-50">{city.country}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  )
}
export default SearchField
