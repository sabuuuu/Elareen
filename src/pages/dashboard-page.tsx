import { useState } from 'react'
import { Heart, Calendar, Camera, MessageCircle, TrendingUp } from 'lucide-react'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MoodChart } from '@/components/ui/mood-chart'
import { CountdownCard } from '@/components/ui/countdown-card'
import ProfileCard from '@/components/layout/profile-card'
import ResponsiveModal from '@/components/ui/reusable-modal'
// import Pattern from '@/assets/images/pattern.jpg'

interface WatchlistItem {
  title: string;
  type: 'Movie' | 'TV Show';
  status: 'watching' | 'plan-to-watch' | 'completed';
}

export function DashboardPage() {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([
    { title: 'The Notebook', type: 'Movie', status: 'watching' },
    { title: 'Friends', type: 'TV Show', status: 'plan-to-watch' },
    { title: 'Pride and Prejudice', type: 'Movie', status: 'completed' },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newType, setNewType] = useState<'Movie' | 'TV Show'>('Movie')

  const nextMeetup = new Date('1025-02-01T19:00:00')
  const anniversary = new Date('1025-06-15T00:00:00')

  return (
    <div className="relative mx-auto py-6 px-4 space-y-6 bg-[#DFF0D0] min-h-screen">
      {/* <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${Pattern})` }}
      ></div> */}
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className='md:w-[90%]'>
          <ProfileCard />
        </div>
        {/* Countdowns */}
        <div className="md:w-[50%]">
          <div className='flex flex-col gap-2'>
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
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-3xl p-3 shadow-xl relative overflow-hidden transition-all duration-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700 ">Together For</CardTitle>
            <Heart className="h-4 w-4 text-[#1B430F]" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-[#1B430F]">2 years</div>
            <p className="text-xs text-[#1B430F] ">734 days and counting</p>
          </CardContent>
        </div>

        <div className="bg-white rounded-3xl p-3  shadow-xl group relative overflow-hidden transition-all duration-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700 ">Shared Memories</CardTitle>
            <Camera className="h-4 w-4 text-[#1B430F]" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-[#1B430F]">127</div>
            <p className="text-xs text-[#1B430F] ">+5 this week</p>
          </CardContent>
        </div>

        <div className="bg-white rounded-3xl p-3  shadow-xl group relative overflow-hidden transition-all duration-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700 ">Love Letters</CardTitle>
            <MessageCircle className="h-4 w-4 text-[#1B430F]" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-[#1B430F]">23</div>
            <p className="text-xs text-[#1B430F] ">2 unread</p>
          </CardContent>
        </div>

        <div className="bg-white rounded-3xl p-3  shadow-xl group relative overflow-hidden transition-all duration-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700 ">Date Ideas</CardTitle>
            <Calendar className="h-4 w-4 text-[#1B430F]" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-[#1B430F]">15</div>
            <p className="text-xs text-[#1B430F] ">3 favorites</p>
          </CardContent>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 ">
        {/* Mood Chart Preview */}
        <div className="bg-white w-full rounded-3xl p-3 shadow-xl relative overflow-hidden transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#1B430F]">
              <TrendingUp className="h-5 w-5 text-[#1B430F]" />
              This Week's Mood
            </CardTitle>
            <CardDescription className="text-[#1B430F] ">Your relationship happiness levels</CardDescription>
          </CardHeader>
          <CardContent>
            <MoodChart />
            <div className="mt-4 text-center">
              <p className="text-sm text-[#1B430F] ">Average mood: 8.1/10</p>
            </div>
          </CardContent>
        </div>
        {/* Shared Watchlist */}
        <div className="bg-white w-full md:w-1/2 rounded-3xl p-3 shadow-xl relative overflow-hidden transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#1B430F]">
              <Calendar className="h-5 w-5 text-[#1B430F]" />
              Shared Watchlist
            </CardTitle>
            <CardDescription className="text-[#1B430F] ">Your current movies and shows</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {watchlist.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#DFF0D0] flex items-center justify-between p-3  rounded-xl transition-all"
                >
                  <div>
                    <h4 className="font-bold text-[#1B430F] text-sm ">{item.title}</h4>
                    <p className="text-xs text-[#090F05]">{item.type}</p>
                  </div>
                  <Badge
                    className='bg-[#12350B] text-white text-xs font-light rounded-sm py-1 hover:bg-[#12350B]'>
                    {item.status === 'watching' ? 'Watching' :
                      item.status === 'plan-to-watch' ? 'Plan to Watch' : 'Completed'}
                  </Badge>
                </div>
              ))}
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1B430F] cursor-pointer mt-4 w-full py-6 text-white hover:bg-[#12350B] rounded-lg transition-all duration-300 group relative overflow-hidden"
            >
              Add to Watchlist
            </Button>
          </CardContent>
        </div>
      </div>

      {/* Add to Watchlist Modal */}
      <ResponsiveModal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        title="Add to Watchlist"
        description="Add a new movie or TV show that you're currently watching"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-[#d3e6dc]">Title</Label>
            <Input
              id="title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter movie or show title"
              className="bg-[#1e2a22] border-[#2a3a2e] text-[#d3e6dc] placeholder:text-[#d3e6dc]/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type" className="text-[#d3e6dc]">Type</Label>
            <Select value={newType} onValueChange={(value: 'Movie' | 'TV Show') => setNewType(value)}>
              <SelectTrigger className="bg-[#1e2a22] border-[#2a3a2e] text-[#d3e6dc]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1e2a22] border-[#2a3a2e]">
                <SelectItem value="Movie" className="text-[#d3e6dc] focus:bg-[#2a3a2e]">Movie</SelectItem>
                <SelectItem value="TV Show" className="text-[#d3e6dc] focus:bg-[#2a3a2e]">TV Show</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              onClick={() => {
                if (newTitle.trim()) {
                  setWatchlist(prev => [...prev, {
                    title: newTitle.trim(),
                    type: newType,
                    status: 'watching'
                  }])
                  setNewTitle('')
                  setNewType('Movie')
                  setIsModalOpen(false)
                }
              }}
              className="flex-1 bg-[#6CAB49] hover:bg-[#5a9640] text-white"
            >
              Add to Watching
            </Button>
            <Button
              onClick={() => {
                setNewTitle('')
                setNewType('Movie')
                setIsModalOpen(false)
              }}
              variant="outline"
              className="flex-1 border-[#2a3a2e] text-[#d3e6dc] hover:bg-[#2a3a2e]"
            >
              Cancel
            </Button>
          </div>
        </div>
      </ResponsiveModal>
    </div>
  )
}