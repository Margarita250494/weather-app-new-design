import { Search } from '../components/Icons.ts'
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
      <form onSubmit={handleSubmit} className="search-field w-full">
        <Search className="w-6 h-6" />
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
          aria-activedescendant={active >= 0 ? `city-option-${active}` : undefined}
        />
      </form>

      {showDropdown && (
        <div className="dropdown absolute left-0 top-full z-10 mt-2 w-full">
          {tooShort && (
            <p className="dropdown-group-label">
              Enter at least {MIN_QUERY_LENGTH} characters to search
            </p>
          )}
          {searching && <p className="dropdown-group-label">Searching...</p>}
          {searchError && <p className="dropdown-group-label">{searchError}</p>}
          {notFound && <p className="dropdown-group-label">Nothing found</p>}

          {results.length > 0 && (
            <ul id="city-listbox" role="listbox">
              {results.map((city, index) => (
                <li
                  key={`${city.latitude}-${city.longitude}`}
                  id={`city-option-${index}`}
                  role="option"
                  aria-selected={index === active}
                  onClick={() => handlePick(city)}
                  onMouseEnter={() => setActive(index)}
                  className={`dropdown-item cursor-pointer ${index === active ? 'selected' : ''}`}
                >
                  <span>{city.name}</span>
                  <span className="text-neutral-300">{city.country}</span>
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
