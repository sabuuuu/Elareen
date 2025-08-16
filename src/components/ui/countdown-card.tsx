import { useEffect, useState } from 'react'
import React from 'react'

interface CountdownCardProps {
  title: string
  targetDate: Date
  icon?: React.ReactNode
}

export function CountdownCard({ title, targetDate, icon }: CountdownCardProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-around py-3 bg-white rounded-3xl shadow-xl relative overflow-hidden transition-all duration-500">
      <h1 className="text-xs font-bold flex items-center gap-2 text-[#1B430F]">
        {icon && React.cloneElement(icon as React.ReactElement)}
        {title}
      </h1>
        <div className="grid grid-cols-4 gap-3 text-center py-1">
          <div className="flex items-center justify-center gap-1 bg-[#1B430F] p-1 rounded-md shadow-xl relative overflow-hidden transition-all duration-500">
            <div className="text-md font-semibold text-white">{timeLeft.days}</div>
            <div className="text-xs text-gray-200">Days</div>
          </div>
          <div className="flex items-center justify-center gap-1 bg-[#1B430F] p-1  rounded-md shadow-xl relative overflow-hidden transition-all duration-500">
            <div className="text-md font-semibold text-white">{timeLeft.hours}</div>
            <div className="text-xs text-gray-200">Hours</div>
          </div>
          <div className="flex items-center justify-center gap-1 bg-[#1B430F] p-1 rounded-md shadow-xl relative overflow-hidden transition-all duration-500">
            <div className="text-md font-semibold text-white">{timeLeft.minutes}</div>
            <div className="text-xs text-gray-200">Min</div>
          </div>
          <div className="flex items-center justify-center gap-1 bg-[#1B430F] p-1 rounded-md shadow-xl relative overflow-hidden transition-all duration-500">
            <div className="text-md font-semibold text-white">{timeLeft.seconds}</div>
            <div className="text-xs text-gray-200">Sec</div>
          </div>
        </div>
    </div>
  )
}