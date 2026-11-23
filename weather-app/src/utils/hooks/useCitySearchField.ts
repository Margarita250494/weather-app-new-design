import * as React from 'react'
import { useRef, useState } from 'react'
import type { Coords, GeoResult } from '../types.ts'
import { MIN_QUERY_LENGTH, useCitySearch } from './useCitySearch.ts'
import { useCityShowSearch } from './useCityShowSearch.ts'
import { useClickOutside } from './useClickOutside.ts'
import { useListNavigation } from './useListNavigation.ts'

export const useCitySearchField = (onSelect: (coords: Coords) => void) => {
  const [query, setQuery] = useState('')

  const { selected, dismissed, dismiss, undismiss, select, unselect } = useCityShowSearch()
  const rootRef = useRef<HTMLElement>(null)

  const searchTerm = selected ? '' : query
  const { results, searching, searchError, notFound } = useCitySearch(searchTerm)
  const { active, setActive, next, prev, reset } = useListNavigation(results.length)
  const trimmed = searchTerm.trim()
  const tooShort = trimmed.length > 0 && trimmed.length < MIN_QUERY_LENGTH

  const showDropdown =
    !dismissed && (tooShort || searching || searchError !== null || notFound || results.length > 0)

  useClickOutside(rootRef, dismiss)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    unselect()
    undismiss()
    reset()
  }

  const handlePick = (city: GeoResult) => {
    onSelect({ lat: city.latitude, lon: city.longitude })
    setQuery(`${city.name}, ${city.country}`)
    select()
    reset()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!showDropdown || results.length === 0) return
    handlePick(results[active >= 0 ? active : 0])
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      close()
      return
    }
    if (!showDropdown || results.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      next()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      prev()
    }
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select()
    undismiss() // открыть снова
  }

  return {
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
  }
}
