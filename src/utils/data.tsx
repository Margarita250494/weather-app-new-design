import { UNITS_KEY } from './helpers.ts'
import type { MetricData, TUnitGroup, WeatherResponse } from './types.ts'

export const getMetricData = (weather: WeatherResponse): MetricData[] => [
  {
    title: 'Feels Like',
    value: weather.current.apparent_temperature,
    unit: weather.current_units.apparent_temperature,
  },
  {
    title: 'Humidity',
    value: weather.current.relative_humidity_2m,
    unit: weather.current_units.relative_humidity_2m,
  },
  {
    title: 'Wind Speed',
    value: weather.current.wind_speed_10m,
    unit: weather.current_units.wind_speed_10m,
  },
  {
    title: 'Precipitation',
    value: weather.current.precipitation,
    unit: weather.current_units.precipitation,
  },
]

export const UNIT_GROUPS: TUnitGroup[] = [
  {
    title: 'Temperature',
    unitKey: 'temperatureUnit',
    variants: [
      {
        label: 'Celsius (°C)',
        value: UNITS_KEY.TEMPERATURE_M,
      },
      {
        label: 'Fahrenheit (°F)',
        value: UNITS_KEY.TEMPERATURE_I,
      },
    ],
  },
  {
    title: 'Wind speed',
    unitKey: 'windUnit',
    variants: [
      {
        label: 'Kilometers per hour (kmh)',
        value: UNITS_KEY.WIND_M,
      },
      {
        label: 'Miles per hour (mph)',
        value: UNITS_KEY.WIND_I,
      },
    ],
  },
  {
    title: 'Precipitation',
    unitKey: 'precipitationUnit',
    variants: [
      {
        label: 'Millimeters (mm)',
        value: UNITS_KEY.PRECIPITATION_M,
      },
      {
        label: 'Inches (in)',
        value: UNITS_KEY.PRECIPITATION_I,
      },
    ],
  },
]
