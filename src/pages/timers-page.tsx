import { useState } from 'react';
import { Timer, Heart, Calendar, Gift, PartyPopper, PlusCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CountdownCard } from '@/components/ui/countdown-card';
import ResponsiveModal from '@/components/ui/reusable-modal';

// Define a type for a timer object for better code safety
interface CustomTimer {
  id: number;
  title: string;
  targetDate: Date;
  icon: React.ReactNode;
}

// Your original timers are now the initial state
const initialTimers: CustomTimer[] = [
  { id: 1, title: "Valentine's Date Night", targetDate: new Date('2025-02-14T19:00:00'), icon: <Heart className="h-5 w-5 text-[#e6c96b]" /> },
  { id: 2, title: 'Your Birthday', targetDate: new Date('2025-03-22T00:00:00'), icon: <Gift className="h-5 w-5 text-[#3fffa1]" /> },
  { id: 3, title: "Partner's Birthday", targetDate: new Date('2025-05-08T00:00:00'), icon: <PartyPopper className="h-5 w-5 text-[#e6c96b]" /> },
  { id: 4, title: 'Summer Vacation', targetDate: new Date('2025-07-20T00:00:00'), icon: <Calendar className="h-5 w-5 text-[#3fffa1]" /> },
  { id: 5, title: 'Next Anniversary', targetDate: new Date('2025-01-15T00:00:00'), icon: <Heart className="h-5 w-5 text-[#e6c96b]" /> },
];

export function TimersPage() {
  const [timers, setTimers] = useState<CustomTimer[]>(initialTimers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTimerTitle, setNewTimerTitle] = useState('');
  const [newTimerDate, setNewTimerDate] = useState('');

  const relationshipStart = new Date('2023-01-15T00:00:00');
  const daysTogether = Math.floor((new Date().getTime() - relationshipStart.getTime()) / (1000 * 60 * 60 * 24));
  const yearsTogether = Math.floor(daysTogether / 365);
  const remainingDays = daysTogether % 365;

  const handleAddTimer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTimerTitle || !newTimerDate) return;

    const newTimer: CustomTimer = {
      id: Date.now(),
      title: newTimerTitle,
      targetDate: new Date(newTimerDate),
      icon: <Calendar className="h-5 w-5 text-[#3fffa1]" />,
    };
    setTimers([...timers, newTimer]);
    setNewTimerTitle('');
    setNewTimerDate('');
    setIsModalOpen(false);
  };

  const handleDeleteTimer = (id: number) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  return (
    <>
      <div className="bg-[#DFF0D0] mx-auto p-6 space-y-6">
        {/* Time Together */}
        <Card className="bg-[#121c16] border border-[#1e2a22] hover:shadow-[0_0_15px_rgba(62,255,161,0.2)] transition-all">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2 font-cinzel">
              <Heart className="h-6 w-6 text-[#3fffa1] fill-current drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]" />
              Time Together
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {/* Cards for days, years, etc. */}
             </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-[#d3e6dc] font-cinzel">Upcoming Events</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-[#3fffa1]/10 text-[#3fffa1] font-semibold px-4 py-2 rounded-full border border-[#3fffa1]/30 hover:bg-[#3fffa1]/20 transition-all"
            >
              <PlusCircle className="h-5 w-5" />
              Add Timer
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timers
              .sort((a, b) => a.targetDate.getTime() - b.targetDate.getTime())
              .map((timer) => (
                <CountdownCard
                  key={timer.id}
                  title={timer.title}
                  targetDate={timer.targetDate}
                  icon={timer.icon}
                  onDelete={() => handleDeleteTimer(timer.id)}
                />
              ))}
          </div>
        </div>

        {/* Special Milestones (remains static) */}
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

      <ResponsiveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add a New Countdown">
        <form onSubmit={handleAddTimer} className="space-y-4 font-inter">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-[#d3e6dc]/80 mb-1">Event Title</label>
            <input
              type="text" id="title" value={newTimerTitle} onChange={(e) => setNewTimerTitle(e.target.value)}
              placeholder="e.g., Our Anniversary"
              className="w-full bg-[#0b0f0c] border border-[#1e2a22] text-white rounded-md p-2 focus:ring-2 focus:ring-[#3fffa1] outline-none" required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-[#d3e6dc]/80 mb-1">Date and Time</label>
            <input
              type="datetime-local" id="date" value={newTimerDate} onChange={(e) => setNewTimerDate(e.target.value)}
              className="w-full bg-[#0b0f0c] border border-[#1e2a22] text-white rounded-md p-2 focus:ring-2 focus:ring-[#3fffa1] outline-none" required
            />
          </div>
          <div className="flex justify-end pt-2">
            <button type="submit" className="bg-[#3fffa1] text-[#121c16] font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all">
              Save Timer
            </button>
          </div>
        </form>
      </ResponsiveModal>
    </>
  );
}