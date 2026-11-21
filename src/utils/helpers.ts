//default Location

import type { DailyItem, HourlyItem, Units, UnitSettings, WeatherResponse } from './types.ts'

export const BERLIN = { lat: 52.52, lon: 13.41 }

export enum UNITS_KEY {
  TEMPERATURE_M = 'celsius',
  TEMPERATURE_I = 'fahrenheit',
  WIND_M = 'kmh',
  WIND_I = 'mph',
  PRECIPITATION_M = 'mm',
  PRECIPITATION_I = 'inch',
}

export const UNIT_SYSTEMS: Record<Units, UnitSettings> = {
  metric: {
    temperatureUnit: UNITS_KEY.TEMPERATURE_M,
    windUnit: UNITS_KEY.WIND_M,
    precipitationUnit: UNITS_KEY.PRECIPITATION_M,
  },
  imperial: {
    temperatureUnit: UNITS_KEY.TEMPERATURE_I,
    windUnit: UNITS_KEY.WIND_I,
    precipitationUnit: UNITS_KEY.PRECIPITATION_I,
  },
}

export const getWeatherUrl = (lat: number, lon: number, units: UnitSettings): string => {
  return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code,is_day&hourly=temperature_2m,weather_code,is_day&timezone=auto&forecast_days=7&precipitation_unit=${units.precipitationUnit}&temperature_unit=${units.temperatureUnit}&wind_speed_unit=${units.windUnit}&daily=weather_code,temperature_2m_max,temperature_2m_min`
}

export const getLocationUrl = (lat: number, lon: number) => {
  return `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
}

export const showTime = new Date().toLocaleDateString('de-DE', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export const getGeocodingUrl = (name: string): string => {
  return `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=5&language=en`
}

export const getHourlyData = (weather: WeatherResponse): HourlyItem[] => {
  return weather.hourly.time.map((time, i) => {
    return {
      time,
      temperature: weather.hourly.temperature_2m[i],
      weather_code: weather.hourly.weather_code[i],
      is_day: weather.hourly.is_day[i],
    }
  })
}
export const getDailyData = (weather: WeatherResponse): DailyItem[] => {
  return weather.daily.time.map((time, i) => {
    return {
      time,
      weather_code: weather.daily.weather_code[i],
      temperature_2m_max: weather.daily.temperature_2m_max[i],
      temperature_2m_min: weather.daily.temperature_2m_min[i],
    }
  })
}
export const getDays = (items: HourlyItem[]): string[] => {
  return [...new Set(items.map((item) => item.time.slice(0, 10)))]
}

export const getDayName = (date: string) =>
  new Date(date).toLocaleDateString('de-DE', { weekday: 'long', timeZone: 'UTC' })
export const getDayNameShort = (date: string) =>
  new Date(date).toLocaleDateString('de-DE', { weekday: 'short', timeZone: 'UTC' })
export const getHourLabel = (time: string) => time.slice(11, 16)

export const isCurrentHour = (itemTime: string, currentTime: string) => {
  return itemTime.slice(0, 13) === currentTime.slice(0, 13)
}

//switcher weather
export const getWeatherUnits = (units: UnitSettings) => {
  const isImperial =
    units.temperatureUnit === UNITS_KEY.TEMPERATURE_I &&
    units.windUnit === UNITS_KEY.WIND_I &&
    units.precipitationUnit === UNITS_KEY.PRECIPITATION_I

  const switcherLabel = isImperial ? 'Metric' : 'Imperial'

  return { switcherLabel, isImperial }
}
