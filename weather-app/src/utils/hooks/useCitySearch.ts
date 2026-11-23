import { useEffect, useState } from 'react'
import { getGeocodingUrl } from '../helpers.ts'
import type { GeoResponse, GeoResult } from '../types.ts'

export const MIN_QUERY_LENGTH = 3

interface SearchState {
  query: string
  results: GeoResult[]
  failed: boolean
}

export const useCitySearch = (query: string) => {
  const [state, setState] = useState<SearchState | null>(null)

  useEffect(() => {
    const name = query.trim()
    if (name.length < MIN_QUERY_LENGTH) return

    let cancelled = false

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(getGeocodingUrl(name))
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
        const data: GeoResponse = await response.json()
        if (!cancelled) setState({ query: name, results: data.results ?? [], failed: false })
      } catch {
        if (!cancelled) setState({ query: name, results: [], failed: true })
      }
    }, 400)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [query])

  const name = query.trim()
  const isActive = name.length >= MIN_QUERY_LENGTH
  const current = isActive && state && state.query === name ? state : null

  return {
    results: current?.results ?? [],
    searching: isActive && current === null,
    searchError: current?.failed ? 'Search failed' : null,
    notFound: current !== null && !current.failed && current.results.length === 0,
  }
}
