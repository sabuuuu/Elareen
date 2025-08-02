import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
    <Card className="bg-[#121c16] border-[#1e2a22] hover:shadow-[0_0_15px_rgba(62,255,161,0.2)] transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg text-[#d3e6dc] font-cinzel">
          {icon && React.cloneElement(icon as React.ReactElement, {
            className: "text-[#3fffa1] drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]"
          })}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-3 text-center">
          <div className="bg-[#0b0f0c] border border-[#1e2a22] rounded-xl p-3 hover:border-[#3fffa1] hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
            <div className="text-2xl font-bold text-[#3fffa1]">{timeLeft.days}</div>
            <div className="text-xs text-[#a3b8ad] font-inter">Days</div>
          </div>
          <div className="bg-[#0b0f0c] border border-[#1e2a22] rounded-xl p-3 hover:border-[#3fffa1] hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
            <div className="text-2xl font-bold text-[#3fffa1]">{timeLeft.hours}</div>
            <div className="text-xs text-[#a3b8ad] font-inter">Hours</div>
          </div>
          <div className="bg-[#0b0f0c] border border-[#1e2a22] rounded-xl p-3 hover:border-[#3fffa1] hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
            <div className="text-2xl font-bold text-[#3fffa1]">{timeLeft.minutes}</div>
            <div className="text-xs text-[#a3b8ad] font-inter">Min</div>
          </div>
          <div className="bg-[#0b0f0c] border border-[#1e2a22] rounded-xl p-3 hover:border-[#3fffa1] hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
            <div className="text-2xl font-bold text-[#3fffa1]">{timeLeft.seconds}</div>
            <div className="text-xs text-[#a3b8ad] font-inter">Sec</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}