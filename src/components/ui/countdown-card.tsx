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
    <Card className="glass-card rounded-xl  hover:shadow-xl hover:shadow-[#4c7934]/10 group relative overflow-hidden transition-all duration-500">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-[#d3e6dc] font-cinzel">
          {icon && React.cloneElement(icon as React.ReactElement)}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-3 text-center">
          <div className="glass-card rounded-lg p-3  hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
            <div className="text-2xl font-bold text-[#6CAB49]">{timeLeft.days}</div>
            <div className="text-xs text-[#a3b8ad] font-inter">Days</div>
          </div>
          <div className="glass-card rounded-lg p-3  hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
            <div className="text-2xl font-bold text-[#6CAB49]">{timeLeft.hours}</div>
            <div className="text-xs text-[#a3b8ad] font-inter">Hours</div>
          </div>
          <div className="glass-card rounded-lg p-3  hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
            <div className="text-2xl font-bold text-[#6CAB49]">{timeLeft.minutes}</div>
            <div className="text-xs text-[#a3b8ad] font-inter">Min</div>
          </div>
          <div className="glass-card rounded-lg p-3  hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
            <div className="text-2xl font-bold text-[#6CAB49]">{timeLeft.seconds}</div>
            <div className="text-xs text-[#a3b8ad] font-inter">Sec</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}