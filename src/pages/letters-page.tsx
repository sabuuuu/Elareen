import { useState } from 'react'
import { Heart, Send, Mail, Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'

export function LettersPage() {
  const [newLetter, setNewLetter] = useState('')
  const [subject, setSubject] = useState('')
  const [sendAsEmail, setSendAsEmail] = useState(false)
  const [showEditor, setShowEditor] = useState(false)

  const letters = [
    {
      id: 1,
      subject: 'Missing You',
      content: 'My dearest love, I was just thinking about you and couldn\'t help but smile. Your laugh echoes in my mind, and I can\'t wait to hold you again...',
      date: '2025-01-15',
      from: 'You',
      read: true,
    },
    {
      id: 2,
      subject: 'Thank You for Everything',
      content: 'I wanted to take a moment to tell you how grateful I am for everything you do. Your kindness, your patience, and your love mean the world to me...',
      date: '2025-01-12',
      from: 'Partner',
      read: false,
    },
    {
      id: 3,
      subject: 'Our Adventure',
      content: 'Remember when we got lost on that hiking trail? At first I was worried, but then I realized - being lost with you is better than being found with anyone else...',
      date: '2025-01-08',
      from: 'You',
      read: true,
    },
  ]

  const handleSendLetter = () => {
    if (newLetter.trim() && subject.trim()) {
      // In a real app, this would save to Supabase
      console.log('Sending letter:', { subject, content: newLetter, sendAsEmail })
      setNewLetter('')
      setSubject('')
      setShowEditor(false)
    }
  }

  return (
    <div className="bg-[#0b0f0c] mx-auto p-6 space-y-6 text-[#d3e6dc]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2 font-cinzel">
            <Heart className="h-8 w-8 text-[#3fffa1] fill-current drop-shadow-[0_0_10px_rgba(62,255,161,0.4)]" />
            Love Letters
          </h1>
          <p className="text-[#d3e6dc]/80 mt-1 font-inter">Express your feelings and share your thoughts</p>
        </div>
        <Button 
          onClick={() => setShowEditor(!showEditor)}
          className="bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_10px_rgba(62,255,161,0.4)] transition-all"
        >
          <Edit className="h-4 w-4 mr-2" />
          Write Letter
        </Button>
      </div>

      {/* Letter Editor */}
      {showEditor && (
        <Card className="bg-[#121c16] border-[#1e2a22]">
          <CardHeader>
            <CardTitle className="font-cinzel text-[#d3e6dc]">Write a Love Letter</CardTitle>
            <CardDescription className="text-[#d3e6dc]/70 font-inter">Share your feelings with your partner</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-[#d3e6dc] font-inter">Subject</Label>
              <Input
                id="subject"
                placeholder="What's this letter about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc] focus:ring-[#3fffa1] focus:border-[#3fffa1]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content" className="text-[#d3e6dc] font-inter">Your Letter</Label>
              <Textarea
                id="content"
                placeholder="Dear love..."
                value={newLetter}
                onChange={(e) => setNewLetter(e.target.value)}
                className="min-h-[200px] resize-none bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc] focus:ring-[#3fffa1] focus:border-[#3fffa1]"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="send-email"
                checked={sendAsEmail}
                onCheckedChange={setSendAsEmail}
                className="data-[state=checked]:bg-[#3fffa1] data-[state=unchecked]:bg-[#1e2a22]"
              />
              <Label htmlFor="send-email" className="text-[#d3e6dc] font-inter">Send as email too</Label>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleSendLetter}
                className="bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_10px_rgba(62,255,161,0.4)] transition-all"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Letter
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowEditor(false)}
                className="border-[#3fffa1] text-[#d3e6dc] hover:bg-[#121c16]/80 hover:text-[#3fffa1] hover:shadow-[0_0_6px_rgba(62,255,161,0.3)]"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Letters List */}
      <div className="space-y-4">
        {letters.map((letter) => (
          <Card 
            key={letter.id} 
            className="bg-[#121c16] border-[#1e2a22] hover:shadow-[0_0_10px_rgba(62,255,161,0.1)] transition-all"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2 font-cinzel text-[#d3e6dc]">
                    {letter.subject}
                    {!letter.read && <Badge className="bg-[#e6c96b] text-[#0b0f0c] hover:bg-[#e6c96b]/90">New</Badge>}
                  </CardTitle>
                  <CardDescription className="text-[#d3e6dc]/70 font-inter">
                    From {letter.from} • {new Date(letter.date).toLocaleDateString()}
                  </CardDescription>
                </div>
                {letter.from === 'Partner' && (
                  <Mail className="h-5 w-5 text-[#3fffa1]" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#d3e6dc]/90 leading-relaxed font-inter">
                {letter.content}
              </p>
              <div className="mt-4 pt-4 border-t border-[#1e2a22]">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-[#3fffa1] hover:bg-[#121c16]/50 hover:text-[#3fffa1]"
                >
                  Reply
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {letters.length === 0 && (
        <Card className="bg-[#121c16] border-[#1e2a22]">
          <CardContent className="text-center py-12">
            <Heart className="h-12 w-12 text-[#3fffa1]/50 mx-auto mb-4 drop-shadow-[0_0_6px_rgba(62,255,161,0.2)]" />
            <h3 className="text-lg font-medium font-cinzel text-[#d3e6dc] mb-2">No letters yet</h3>
            <p className="text-[#d3e6dc]/70 mb-4 font-inter">Start sharing your feelings with your first love letter.</p>
            <Button 
              onClick={() => setShowEditor(true)}
              className="bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_10px_rgba(62,255,161,0.4)]"
            >
              Write Your First Letter
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}