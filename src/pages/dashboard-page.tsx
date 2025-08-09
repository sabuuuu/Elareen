import { Heart, Calendar, Camera, MessageCircle, Timer, TrendingUp, Sparkles } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MoodChart } from '@/components/ui/mood-chart'
import { CountdownCard } from '@/components/ui/countdown-card'
import { Link } from 'react-router-dom'
import Pattern from '@/assets/images/pattern.jpg'

export function DashboardPage() {
  const watchlist = [
    { title: 'The Notebook', type: 'Movie', status: 'watching' },
    { title: 'Friends', type: 'TV Show', status: 'plan-to-watch' },
    { title: 'Pride and Prejudice', type: 'Movie', status: 'completed' },
  ]

  const nextMeetup = new Date('1025-02-01T19:00:00')
  const anniversary = new Date('1025-06-15T00:00:00')

  return (
    <div className="relative mx-auto py-6 px-6 md:px-12 space-y-6 bg-[#11210A] min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${Pattern})` }}
      ></div>
      {/* Header */}
      <div className="mt-25 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#d3e6dc]">Your MoodHub Dashboard</h1>
          <p className="text-[#d3e6dc]/80 mt-1 ">Welcome back! Here's what's happening in your relationship.</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card rounded-xl  hover:shadow-xl hover:shadow-[#4c7934]/10 group relative overflow-hidden transition-all duration-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#d3e6dc] ">Together For</CardTitle>
            <Heart className="h-4 w-4 text-[#d3e6dc]/50" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-[#6CAB49]">2 years</div>
            <p className="text-xs text-[#d3e6dc]/50 ">734 days and counting</p>
          </CardContent>
        </Card>

        <Card className="glass-card rounded-xl  hover:shadow-xl hover:shadow-[#4c7934]/10 group relative overflow-hidden transition-all duration-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#d3e6dc] ">Shared Memories</CardTitle>
            <Camera className="h-4 w-4 text-[#d3e6dc]/50" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-[#6CAB49]">127</div>
            <p className="text-xs text-[#d3e6dc]/50 ">+5 this week</p>
          </CardContent>
        </Card>

        <Card className="glass-card rounded-xl  hover:shadow-xl hover:shadow-[#4c7934]/10 group relative overflow-hidden transition-all duration-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#d3e6dc] ">Love Letters</CardTitle>
            <MessageCircle className="h-4 w-4 text-[#d3e6dc]/50" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-[#6CAB49]">23</div>
            <p className="text-xs text-[#d3e6dc]/50 ">2 unread</p>
          </CardContent>
        </Card>

        <Card className="glass-card rounded-xl  hover:shadow-xl hover:shadow-[#4c7934]/10 group relative overflow-hidden transition-all duration-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#d3e6dc] ">Date Ideas</CardTitle>
            <Calendar className="h-4 w-4 text-[#d3e6dc]/50" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-[#6CAB49]">15</div>
            <p className="text-xs text-[#d3e6dc]/50 ">3 favorites</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Shared Watchlist */}
        <Card className="glass-card rounded-xl  hover:shadow-xl hover:shadow-[#4c7934]/10 group relative overflow-hidden transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#d3e6dc] font-cinzel">
              <Calendar className="h-5 w-5 text-[#6CAB49]" />
              Shared Watchlist
            </CardTitle>
            <CardDescription className="text-[#d3e6dc]/70 ">Your current movies and shows</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {watchlist.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card flex items-center justify-between p-3  rounded-xl transition-all"
                >
                  <div>
                    <h4 className="font-medium text-[#d3e6dc] ">{item.title}</h4>
                    <p className="text-sm text-[#d3e6dc]/60 ">{item.type}</p>
                  </div>
                  <Badge 
                    className='bg-[#12350B] text-[#0b0f0c] font-light rounded-sm py-1 hover:bg-[#12350B]'>
                    {item.status === 'watching' ? 'Watching' : 
                     item.status === 'plan-to-watch' ? 'Plan to Watch' : 'Completed'}
                  </Badge>
                </div>
              ))}
            </div>
            <Button 
              className="glass-button-enhanced cursor-pointer mt-4 w-full py-4 text-[#A7B1A3] hover:text-white rounded-lg transition-all duration-300 group relative overflow-hidden"
            >
              Add to Watchlist
            </Button>
          </CardContent>
        </Card>

        {/* Mood Chart Preview */}
        <Card className="glass-card rounded-xl  hover:shadow-xl hover:shadow-[#4c7934]/10 group relative overflow-hidden transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#d3e6dc] font-cinzel">
              <TrendingUp className="h-5 w-5 text-[#6CAB49]" />
              This Week's Mood
            </CardTitle>
            <CardDescription className="text-[#d3e6dc]/70 ">Your relationship happiness levels</CardDescription>
          </CardHeader>
          <CardContent>
            <MoodChart />
            <div className="mt-4 text-center">
              <p className="text-sm text-[#d3e6dc]/60 ">Average mood: 8.1/10</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Countdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CountdownCard
          title="Next Date Night"
          targetDate={nextMeetup}
          icon={<Calendar className="h-5 w-5 text-[#6CAB49]" />}
        />
        <CountdownCard
          title="Anniversary"
          targetDate={anniversary}
          icon={<Heart className="h-5 w-5 text-[#6CAB49]" />}
        />
      </div>

      {/* Quick Actions */}
      <Card className="glass-card rounded-xl  hover:shadow-xl hover:shadow-[#4c7934]/10 group relative overflow-hidden transition-all duration-500">
        <CardHeader>
          <CardTitle className="text-[#d3e6dc] font-cinzel tracking-wide flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#6CAB49] drop-shadow-[0_0_4px_rgba(62,255,161,0.5)]" />
            Quick Actions
          </CardTitle>
          <CardDescription className="text-[#a3b8ad] ">
            Jump into your favorite MoodHub features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/letters">
              <Button 
                variant="outline" 
                className="w-full h-24 flex flex-col gap-3 glass-button-enhanced text-[#d3e6dc] hover:text-[#d3e6dc]"
              >
                <div className="relative">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <span className="font-medium">Write a Letter</span>
              </Button>
            </Link>
            <Link to="/memories">
              <Button 
                variant="outline" 
                className="w-full h-24 flex flex-col gap-3 glass-button-enhanced text-[#d3e6dc] hover:text-[#d3e6dc]"
              >
                <div className="relative">
                  <Camera className="h-7 w-7" />
                </div>
                <span className="font-medium">Add Memory</span>
              </Button>
            </Link>
            <Link to="/date-ideas">
              <Button 
                variant="outline" 
                className="w-full h-24 flex flex-col gap-3 glass-button-enhanced text-[#d3e6dc] hover:text-[#d3e6dc]"
              >
                <div className="relative">
                  <Calendar className="h-7 w-7" />
                </div>
                <span className="font-medium">Plan Date</span>
              </Button>
            </Link>
            <Link to="/timers">
              <Button 
                variant="outline" 
                className="w-full h-24 flex flex-col gap-3 glass-button-enhanced text-[#d3e6dc] hover:text-[#d3e6dc]"
              >
                <div className="relative">
                  <Timer className="h-7 w-7" />
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