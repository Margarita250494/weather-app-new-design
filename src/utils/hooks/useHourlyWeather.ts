import { useCallback, useEffect, useRef, useState } from 'react'
import { getDays, getHourlyData } from '../helpers.ts'
import type { WeatherResponse } from '../types.ts'
import { useClickOutside } from './useClickOutside.ts'

export const useHourlyWeather = (weather: WeatherResponse) => {
  const hours = getHourlyData(weather)
  const days = getDays(hours)
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [openDay, setOpenDay] = useState<boolean>(false)
  const activeDay = selectedDay && days.includes(selectedDay) ? selectedDay : days[0]
  const unit = weather.current_units.temperature_2m
  const dayHours = hours.filter((hour) => hour.time.startsWith(activeDay))
  const listRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeDayMenu = useCallback(() => setOpenDay(false), [setOpenDay])
  useClickOutside(menuRef, closeDayMenu)
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const current = currentRef.current

    list.scrollTop = current ? current.offsetTop : 0
  }, [activeDay, weather])

  const toggleDayMenu = () => setOpenDay((prev) => !prev)

  const selectDay = (day: string) => () => {
    setSelectedDay(day)
    setOpenDay(false)
  }

  return {
    listRef,
    currentRef,
    menuRef,
    toggleDayMenu,
    selectDay,
    activeDay,
    openDay,
    days,
    dayHours,
    unit,
  }
}
