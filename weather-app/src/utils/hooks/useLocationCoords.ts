import { useEffect, useState } from 'react'
import { BERLIN, getLocationUrl } from '../helpers.ts'
import type { Coords, LocationResponse } from '../types.ts'

export const useLocationCoords = () => {
  const [coords, setCoords] = useState<Coords | null>(null)
  const [location, setLocation] = useState<LocationResponse | null>(null)

  useEffect(() => {
    if (!coords) return
    const { lat, lon } = coords
    async function loadLocation() {
      try {
        const url = getLocationUrl(lat, lon)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch location')
        }

        const data: LocationResponse = await response.json()
        setLocation(data)
      } catch {
        setLocation(null)
      }
    }
    void loadLocation()
  }, [coords])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      },
      () => {
        setCoords(BERLIN)
      }
    )
  }, [])

  return { coords, setCoords, location }
}
