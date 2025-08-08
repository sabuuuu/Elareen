import { Heart, Calendar, Camera, MessageCircle, Timer, TrendingUp, Sparkles } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MoodChart } from '@/components/ui/mood-chart'
import { CountdownCard } from '@/components/ui/countdown-card'
import { Link } from 'react-router-dom'

export function DashboardPage() {
  const watchlist = [
    { title: 'The Notebook', type: 'Movie', status: 'watching' },
    { title: 'Friends', type: 'TV Show', status: 'plan-to-watch' },
    { title: 'Pride and Prejudice', type: 'Movie', status: 'completed' },
  ]

  const nextMeetup = new Date('2025-02-01T19:00:00')
  const anniversary = new Date('2025-06-15T00:00:00')

  return (
    <div className=" mx-auto py-6 px-6 md:px-12 space-y-6 bg-[#091605] min-h-screen">
      {/* Header */}
      <div className="mt-25 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#d3e6dc]">Your MoodHub Dashboard</h1>
          <p className="text-[#d3e6dc]/80 mt-1 ">Welcome back! Here's what's happening in your relationship.</p>
        </div>
        <Heart className="h-8 w-8 text-[#3fffa1] fill-current drop-shadow-[0_0_10px_rgba(62,255,161,0.4)]" />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#121c16] border-[#121c16] hover:shadow-[0_0_10px_rgba(62,255,161,0.2)] transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#d3e6dc] ">Together For</CardTitle>
            <Heart className="h-4 w-4 text-[#d3e6dc]/50" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#3fffa1]">2 years</div>
            <p className="text-xs text-[#d3e6dc]/50 font-inter">734 days and counting</p>
          </CardContent>
        </Card>

        <Card className="bg-[#121c16] border-[#121c16] hover:shadow-[0_0_10px_rgba(62,255,161,0.2)] transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#d3e6dc] font-inter">Shared Memories</CardTitle>
            <Camera className="h-4 w-4 text-[#d3e6dc]/50" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#3fffa1]">127</div>
            <p className="text-xs text-[#d3e6dc]/50 font-inter">+5 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-[#121c16] border-[#121c16] hover:shadow-[0_0_10px_rgba(62,255,161,0.2)] transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#d3e6dc] font-inter">Love Letters</CardTitle>
            <MessageCircle className="h-4 w-4 text-[#d3e6dc]/50" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#3fffa1]">23</div>
            <p className="text-xs text-[#d3e6dc]/50 font-inter">2 unread</p>
          </CardContent>
        </Card>

        <Card className="bg-[#121c16] border-[#121c16] hover:shadow-[0_0_10px_rgba(62,255,161,0.2)] transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#d3e6dc] font-inter">Date Ideas</CardTitle>
            <Calendar className="h-4 w-4 text-[#d3e6dc]/50" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#3fffa1]">15</div>
            <p className="text-xs text-[#d3e6dc]/50 font-inter">3 favorites</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Shared Watchlist */}
        <Card className="bg-[#121c16] border-[#121c16] hover:shadow-[0_0_10px_rgba(62,255,161,0.2)] transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#d3e6dc] font-cinzel">
              <Calendar className="h-5 w-5 text-[#3fffa1]" />
              Shared Watchlist
            </CardTitle>
            <CardDescription className="text-[#d3e6dc]/70 font-inter">Your current movies and shows</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {watchlist.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 border border-[#121c16] rounded-2xl bg-[#0b0f0c] transition-all"
                >
                  <div>
                    <h4 className="font-medium text-[#d3e6dc] font-inter">{item.title}</h4>
                    <p className="text-sm text-[#d3e6dc]/60 font-inter">{item.type}</p>
                  </div>
                  <Badge 
                    variant={item.status === 'completed' ? 'default' : 'secondary'}
                    className={`${item.status === 'completed' ? 'bg-[#3fffa1] hover:bg-[#3fffa1] text-[#0b0f0c] py-1' : 'py-1 bg-[#121c16] hover:bg-[#121c16] text-[#d3e6dc] border-[#3fffa1]/30'}`}
                  >
                    {item.status === 'watching' ? 'Watching' : 
                     item.status === 'plan-to-watch' ? 'Plan to Watch' : 'Completed'}
                  </Badge>
                </div>
              ))}
            </div>
            <Button 
              className="w-full mt-4 bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_10px_rgba(62,255,161,0.4)]"
            >
              Add to Watchlist
            </Button>
          </CardContent>
        </Card>

        {/* Mood Chart Preview */}
        <Card className="bg-[#121c16] border-[#121c16] hover:shadow-[0_0_10px_rgba(62,255,161,0.2)] transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#d3e6dc] font-cinzel">
              <TrendingUp className="h-5 w-5 text-[#3fffa1]" />
              This Week's Mood
            </CardTitle>
            <CardDescription className="text-[#d3e6dc]/70 font-inter">Your relationship happiness levels</CardDescription>
          </CardHeader>
          <CardContent>
            <MoodChart />
            <div className="mt-4 text-center">
              <p className="text-sm text-[#d3e6dc]/60 font-inter">Average mood: 8.1/10</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Countdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CountdownCard
          title="Next Date Night"
          targetDate={nextMeetup}
          icon={<Calendar className="h-5 w-5 text-[#3fffa1]" />}
        />
        <CountdownCard
          title="Anniversary"
          targetDate={anniversary}
          icon={<Heart className="h-5 w-5 text-[#3fffa1]" />}
        />
      </div>

      {/* Quick Actions */}
      <Card className="bg-[#121c16] border-[#1e2a22] hover:shadow-[0_0_15px_rgba(62,255,161,0.3)] transition-all duration-300 group">
        <CardHeader>
          <CardTitle className="text-[#d3e6dc] font-cinzel tracking-wide flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#3fffa1] drop-shadow-[0_0_4px_rgba(62,255,161,0.5)]" />
            Quick Actions
          </CardTitle>
          <CardDescription className="text-[#a3b8ad] font-inter">
            Jump into your favorite MoodHub features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/letters">
              <Button 
                variant="outline" 
                className="w-full h-24 flex flex-col gap-3 border-[#1e2a22] bg-[#0b0f0c] text-[#d3e6dc] hover:text-[#3fffa1] hover:border-[#3fffa1] hover:bg-[#0b0f0c]/80 hover:shadow-[0_0_12px_rgba(62,255,161,0.4)] transition-all"
              >
                <div className="relative">
                  <MessageCircle className="h-7 w-7" />
                  <div className="absolute inset-0 rounded-full bg-[#3fffa1]/10 group-hover:bg-[#3fffa1]/20 transition-all" />
                </div>
                <span className="font-medium">Write Letter</span>
              </Button>
            </Link>
            <Link to="/memories">
              <Button 
                variant="outline" 
                className="w-full h-24 flex flex-col gap-3 border-[#1e2a22] bg-[#0b0f0c] text-[#d3e6dc] hover:text-[#3fffa1] hover:border-[#3fffa1] hover:bg-[#0b0f0c]/80 hover:shadow-[0_0_12px_rgba(62,255,161,0.4)] transition-all"
              >
                <div className="relative">
                  <Camera className="h-7 w-7" />
                  <div className="absolute inset-0 rounded-full bg-[#3fffa1]/10 group-hover:bg-[#3fffa1]/20 transition-all" />
                </div>
                <span className="font-medium">Add Memory</span>
              </Button>
            </Link>
            <Link to="/date-ideas">
              <Button 
                variant="outline" 
                className="w-full h-24 flex flex-col gap-3 border-[#1e2a22] bg-[#0b0f0c] text-[#d3e6dc] hover:text-[#3fffa1] hover:border-[#3fffa1] hover:bg-[#0b0f0c]/80 hover:shadow-[0_0_12px_rgba(62,255,161,0.4)] transition-all"
              >
                <div className="relative">
                  <Calendar className="h-7 w-7" />
                  <div className="absolute inset-0 rounded-full bg-[#3fffa1]/10 group-hover:bg-[#3fffa1]/20 transition-all" />
                </div>
                <span className="font-medium">Plan Date</span>
              </Button>
            </Link>
            <Link to="/timers">
              <Button 
                variant="outline" 
                className="w-full h-24 flex flex-col gap-3 border-[#1e2a22] bg-[#0b0f0c] text-[#d3e6dc] hover:text-[#3fffa1] hover:border-[#3fffa1] hover:bg-[#0b0f0c]/80 hover:shadow-[0_0_12px_rgba(62,255,161,0.4)] transition-all"
              >
                <div className="relative">
                  <Timer className="h-7 w-7" />
                  <div className="absolute inset-0 rounded-full bg-[#3fffa1]/10 group-hover:bg-[#3fffa1]/20 transition-all" />
                </div>
                <span className="font-medium">View Timers</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}