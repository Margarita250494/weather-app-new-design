import { useEffect, useState } from 'react'
import { getWeatherUrl } from '../helpers.ts'
import type { Coords, UnitSettings, WeatherResponse } from '../types.ts'

export const useWeatherData = (coords: Coords | null, units: UnitSettings) => {
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [loadedKey, setLoadedKey] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const weatherKey = coords
    ? `${coords.lat},${coords.lon},${units.temperatureUnit},${units.windUnit},${units.precipitationUnit}`
    : null
  useEffect(() => {
    if (!coords) return
    const { lat, lon } = coords
    let cancelled = false

    async function loadWeather() {
      try {
        const response = await fetch(getWeatherUrl(lat, lon, units))
        if (!response.ok) {
          throw new Error('Failed to fetch weather')
        }
        const data: WeatherResponse = await response.json()
        if (cancelled) return
        setWeather(data)
        setError(null)
      } catch {
        if (!cancelled) setError('something wrong')
      } finally {
        if (!cancelled) setLoadedKey(weatherKey)
      }
    }
    void loadWeather()

    return () => {
      cancelled = true
    }
  }, [coords, units, weatherKey])

  const loading = !weatherKey || loadedKey !== weatherKey

  return { weather, loading, error }
}
