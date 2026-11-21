import drizzleDay from '../assets/day/icon-drizzle.png'
import fogDay from '../assets/day/icon-fog.png'
import overcastDay from '../assets/day/icon-overcast.png'
import partlyCloudyDay from '../assets/day/icon-partly-cloudy.png'
import rainDay from '../assets/day/icon-rain.png'
import snowDay from '../assets/day/icon-snow.png'
import stormDay from '../assets/day/icon-storm.png'
import sunnyDay from '../assets/day/icon-sunny.png'
import drizzleNight from '../assets/night/drizzle-night.png'
import fogNight from '../assets/night/fog-night.png'
import overcastNight from '../assets/night/overcast-night.png'
import partlyCloudyNight from '../assets/night/partly-cloudy-night.png'
import rainNight from '../assets/night/rain-night.png'
import snowNight from '../assets/night/snow-night.png'
import stormNight from '../assets/night/storm-night.png'
import sunnyNight from '../assets/night/sunny-night.png'
import undefinedWeatherIcon from '../assets/unknown.png'

import type { TWeatherIcon, TWeatherIconItem } from './types.ts'

export const weatherIcons: TWeatherIcon[] = [
  {
    label: 'Sunny',
    codes: [0, 1],
    day: sunnyDay,
    night: sunnyNight,
  },
  {
    label: 'Partly Cloudy',
    codes: [2],
    day: partlyCloudyDay,
    night: partlyCloudyNight,
  },
  {
    label: 'Overcast',
    codes: [3],
    day: overcastDay,
    night: overcastNight,
  },
  {
    label: 'Fog',
    codes: [45, 48],
    day: fogDay,
    night: fogNight,
  },
  {
    label: 'Drizzle',
    codes: [51, 53, 55, 56, 57],
    day: drizzleDay,
    night: drizzleNight,
  },
  {
    label: 'Rain',
    codes: [61, 63, 65, 66, 67, 80, 81, 82],
    day: rainDay,
    night: rainNight,
  },
  {
    label: 'Snow',
    codes: [71, 73, 75, 77, 85, 86],
    day: snowDay,
    night: snowNight,
  },
  {
    label: 'Storm',
    codes: [95, 96, 97, 99],
    day: stormDay,
    night: stormNight,
  },
]

export const getWeatherIcon = (code: number, isDay: number): TWeatherIconItem => {
  const group = weatherIcons.find((icon) => icon.codes.includes(code))

  if (!group) {
    return {
      icon: undefinedWeatherIcon,
      label: 'Unknown weather',
    }
  }

  return {
    icon: isDay ? group.day : group.night,
    label: isDay ? group.label : `${group.label} Night`,
  }
}
