import { Timer, Heart, Calendar, Gift, PartyPopper } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CountdownCard } from '@/components/ui/countdown-card'

export function TimersPage() {
  // Sample dates - in a real app, these would be configurable
  const relationshipStart = new Date('2023-01-15T00:00:00')
  const nextMeetup = new Date('2025-02-14T19:00:00')
  const anniversary = new Date('2025-01-15T00:00:00')
  const yourBirthday = new Date('2025-03-22T00:00:00')
  const partnerBirthday = new Date('2025-05-08T00:00:00')
  const vacation = new Date('2025-07-20T00:00:00')

  // Calculate how long you've been together
  const daysTogether = Math.floor((new Date().getTime() - relationshipStart.getTime()) / (1000 * 60 * 60 * 24))
  const yearsTogether = Math.floor(daysTogether / 365)
  const remainingDays = daysTogether % 365

  return (
    <div className="bg-[#DFF0D0] mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#d3e6dc] font-cinzel flex items-center justify-center gap-2 mb-2">
          <Timer className="h-8 w-8 text-[#3fffa1] drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]" />
          Relationship Timers
        </h1>
        <p className="text-[#d3e6dc]/80 font-inter">Track your milestones and count down to special moments</p>
      </div>

      {/* Time Together */}
      <Card className="bg-[#121c16] border border-[#1e2a22] hover:shadow-[0_0_15px_rgba(62,255,161,0.2)] transition-all">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2 font-cinzel">
            <Heart className="h-6 w-6 text-[#3fffa1] fill-current drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]" />
            Time Together
          </CardTitle>
          <CardDescription className="text-[#d3e6dc]/70 font-inter">Celebrating your beautiful journey</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#0b0f0c] rounded-2xl p-4 border border-[#1e2a22] hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
              <div className="text-3xl font-bold text-[#3fffa1]">{daysTogether}</div>
              <div className="text-sm text-[#d3e6dc]/80 font-inter">Total Days</div>
            </div>
            <div className="bg-[#0b0f0c] rounded-2xl p-4 border border-[#1e2a22] hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
              <div className="text-3xl font-bold text-[#3fffa1]">{yearsTogether}</div>
              <div className="text-sm text-[#d3e6dc]/80 font-inter">Years</div>
            </div>
            <div className="bg-[#0b0f0c] rounded-2xl p-4 border border-[#1e2a22] hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
              <div className="text-3xl font-bold text-[#3fffa1]">{remainingDays}</div>
              <div className="text-sm text-[#d3e6dc]/80 font-inter">Days This Year</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#d3e6dc] font-cinzel">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CountdownCard
            title="Valentine's Date Night"
            targetDate={nextMeetup}
            icon={<Heart className="h-5 w-5 text-[#e6c96b]" />}
          />
          
          <CountdownCard
            title="Your Birthday"
            targetDate={yourBirthday}
            icon={<Gift className="h-5 w-5 text-[#3fffa1]" />}
          />
          
          <CountdownCard
            title="Partner's Birthday"
            targetDate={partnerBirthday}
            icon={<PartyPopper className="h-5 w-5 text-[#e6c96b]" />}
          />
          
          <CountdownCard
            title="Summer Vacation"
            targetDate={vacation}
            icon={<Calendar className="h-5 w-5 text-[#3fffa1]" />}
          />
          
          <CountdownCard
            title="Next Anniversary"
            targetDate={anniversary}
            icon={<Heart className="h-5 w-5 text-[#e6c96b]" />}
          />
        </div>
      </div>

      {/* Special Milestones */}
      <Card className="bg-[#121c16] border border-[#1e2a22] hover:shadow-[0_0_15px_rgba(62,255,161,0.2)] transition-all">
        <CardHeader>
          <CardTitle className="font-cinzel text-[#d3e6dc]">Milestone Tracker</CardTitle>
          <CardDescription className="text-[#d3e6dc]/70 font-inter">Special relationship milestones you've reached</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-[#0b0f0c] rounded-2xl border border-[#1e2a22] hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#3fffa1] rounded-full drop-shadow-[0_0_4px_rgba(62,255,161,0.5)]"></div>
                <span className="font-medium text-[#d3e6dc] font-inter">First "I Love You"</span>
              </div>
              <span className="text-sm text-[#d3e6dc]/70 font-inter">3 months ago</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-[#0b0f0c] rounded-2xl border border-[#1e2a22] hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#3fffa1] rounded-full drop-shadow-[0_0_4px_rgba(62,255,161,0.5)]"></div>
                <span className="font-medium text-[#d3e6dc] font-inter">First Trip Together</span>
              </div>
              <span className="text-sm text-[#d3e6dc]/70 font-inter">8 months ago</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-[#0b0f0c] rounded-2xl border border-[#1e2a22] hover:shadow-[0_0_8px_rgba(62,255,161,0.2)] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#3fffa1] rounded-full drop-shadow-[0_0_4px_rgba(62,255,161,0.5)]"></div>
                <span className="font-medium text-[#d3e6dc] font-inter">One Year Together</span>
              </div>
              <span className="text-sm text-[#d3e6dc]/70 font-inter">1 year ago</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-[#0b0f0c] rounded-2xl border border-[#1e2a22] hover:shadow-[0_0_8px_rgba(230,201,107,0.3)] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#e6c96b] rounded-full drop-shadow-[0_0_4px_rgba(230,201,107,0.5)]"></div>
                <span className="font-medium text-[#d3e6dc] font-inter">Meeting the Parents</span>
              </div>
              <span className="text-sm text-[#d3e6dc]/70 font-inter">Coming up</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}