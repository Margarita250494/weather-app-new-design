import * as React from 'react'
import { type ReactNode } from 'react'
import { UNITS_KEY } from './helpers.ts'

export interface WeatherResponse {
  current_units: {
    temperature_2m: string
    apparent_temperature: string
    relative_humidity_2m: string
    wind_speed_10m: string
    precipitation: string
  }
  current: {
    time: string
    temperature_2m: number
    apparent_temperature: number
    relative_humidity_2m: number
    wind_speed_10m: number
    precipitation: number
    weather_code: number
    is_day: number
  }
  hourly: {
    time: string[]
    temperature_2m: number[]
    weather_code: number[]
    is_day: number[]
  }
  daily: {
    time: string[]
    weather_code: number[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
  }
}

export interface LocationResponse {
  countryName: string
  city: string
  locality?: string
}

export interface MetricData {
  title: string
  value: number
  unit: string
}

export interface Coords {
  lat: number
  lon: number
}

export interface GeoResult {
  name: string
  latitude: number
  longitude: number
  country: string
}

export interface GeoResponse {
  results?: GeoResult[]
}

export interface HourlyItem {
  time: string
  temperature: number
  weather_code: number
  is_day: number
}

export interface DailyItem {
  time: string
  temperature_2m_max: number
  temperature_2m_min: number
  weather_code: number
}

export type Units = 'metric' | 'imperial'

export type TemperatureUnit = UNITS_KEY.TEMPERATURE_M | UNITS_KEY.TEMPERATURE_I
export type WindUnit = UNITS_KEY.WIND_M | UNITS_KEY.WIND_I
export type PrecipitationUnit = UNITS_KEY.PRECIPITATION_M | UNITS_KEY.PRECIPITATION_I

export type UnitSettings = {
  temperatureUnit: TemperatureUnit
  windUnit: WindUnit
  precipitationUnit: PrecipitationUnit
}

export type TButton = {
  handleMenuOpen: () => void
  ariaExpanded: boolean
  icon?: ReactNode
  buttonLabel?: ReactNode
  className?: string
}

export type TSwitcherInput = {
  switcherLabel: string
  isImperial: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void
}

type Option<T> = {
  label: string
  value: T
}

export type UnitSelectGroupProps<T> = {
  title: string
  options: Option<T>[]
  selectedValue: T
  onSelect: (value: T) => void
  className?: string
}

export type TWeatherPanel = {
  coords: Coords | null
  location: LocationResponse | null
  units: UnitSettings
}

export type TUnitGroup = {
  title: string
  unitKey: keyof UnitSettings
  variants: Option<UnitSettings[keyof UnitSettings]>[]
}

export type TWeatherIcon = {
  label: string
  codes: number[]
  day: string
  night: string
}

export type TWeatherIconItem = {
  icon: string
  label: string
}

export type TDailyCard = {
  dayName: string
  icon: TWeatherIconItem
  tMin: number
  tMax: number
  unit: string
}
