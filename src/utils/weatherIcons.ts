import {
  DayCloudy,
  DayDrizzle,
  DayFog,
  DayOvercast,
  DayRain,
  DaySnow,
  DayStorm,
  DaySunny,
  NightClear,
  NightDrizzle,
  NightFog,
  NightOvercast,
  NightPartlyCloudy,
  NightRain,
  NightSnow, NightStorm, UnknownWeather,
} from '../components/Icons.ts'

import type { TWeatherIcon, TWeatherIconItem } from './types.ts'

export const weatherIcons: TWeatherIcon[] = [
  {
    label: 'Sunny',
    codes: [0, 1],
    day: DaySunny,
    night: NightClear,
    bgClass: 'bg-sunny/25',
    textClass: 'text-sunny',
  },
  {
    label: 'Partly Cloudy',
    codes: [2],
    day: DayCloudy,
    night: NightPartlyCloudy,
    bgClass: 'bg-partly-cloudy/25',
    textClass: 'text-partly-cloudy',
  },
  {
    label: 'Overcast',
    codes: [3],
    day: DayOvercast,
    night: NightOvercast,
    bgClass: 'bg-overcast/25',
    textClass: 'text-overcast',
  },
  {
    label: 'Fog',
    codes: [45, 48],
    day: DayFog,
    night: NightFog,
    bgClass: 'bg-fog/25',
    textClass: 'text-fog',
  },
  {
    label: 'Drizzle',
    codes: [51, 53, 55, 56, 57],
    day: DayDrizzle,
    night: NightDrizzle,
    bgClass: 'bg-drizzle/25',
    textClass: 'text-drizzle',
  },
  {
    label: 'Rain',
    codes: [61, 63, 65, 66, 67, 80, 81, 82],
    day: DayRain,
    night: NightRain,
    bgClass: 'bg-rain/25',
    textClass: 'text-rain',
  },
  {
    label: 'Snow',
    codes: [71, 73, 75, 77, 85, 86],
    day: DaySnow,
    night: NightSnow,
    bgClass: 'bg-snow/25',
    textClass: 'text-snow',
  },
  {
    label: 'Storm',
    codes: [95, 96, 97, 99],
    day: DayStorm,
    night: NightStorm,
    bgClass: 'bg-storm/25',
    textClass: 'text-storm',
  },
]

export const getWeatherIcon = (code: number, isDay: number): TWeatherIconItem => {
  const group = weatherIcons.find((icon) => icon.codes.includes(code))

  if (!group) {
    return {
      icon: UnknownWeather,
      label: 'Unknown weather',
      bgClass: 'bg-overcast/25',
      textClass: 'text-overcast',
    }
  }

  return {
    icon: isDay ? group.day : group.night,
    label: isDay ? group.label : `${group.label} Night`,
    bgClass: group.bgClass,
    textClass: group.textClass,
  }
}
