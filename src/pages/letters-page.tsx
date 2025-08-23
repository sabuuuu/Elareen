import { useState } from 'react'
import { Heart, Send, Mail, Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import ResponsiveModal from '@/components/ui/reusable-modal'

export function LettersPage() {
  const [newLetter, setNewLetter] = useState('')
  const [subject, setSubject] = useState('')
  const [sendAsEmail, setSendAsEmail] = useState(false)
  const [showEditor, setShowEditor] = useState(false)

  const letters = [

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
    <div className="bg-[#DFF0D0] mx-auto p-4 space-y-4 text-[#d3e6dc]">
      {/* Header */}
      <div className="flex items-center justify-end">
        <Button
          onClick={() => setShowEditor(!showEditor)}
          className="bg-[#1B430F] cursor-pointer py-6 text-white hover:bg-[#12350B] hover:text-white rounded-lg transition-all duration-300 group relative overflow-hidden"
        >
          <Edit className="h-4 w-4 mr-2" />
          Write a Letter
        </Button>
      </div>

      {/* Letter Editor Modal */}
      <ResponsiveModal
        isOpen={showEditor}
        onClose={() => setShowEditor(false)}
        title="Write a Love Letter"
        description="Share your feelings with your partner"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-[#d3e6dc]">Subject</Label>
            <Input
              id="subject"
              placeholder="What's this letter about?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc] focus:ring-[#3fffa1] focus:border-[#3fffa1]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content" className="text-[#d3e6dc]">Your Letter</Label>
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
            <Label htmlFor="send-email" className="text-[#d3e6dc]">Send as email too</Label>
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
        </div>
      </ResponsiveModal>

      {/* Letters List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {letters.map((letter) => (
          <Card
            key={letter.id}
            className="bg-white w-full rounded-3xl p-3 shadow-xl relative overflow-hidden transition-all duration-500"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2 text-[#1B430F]">
                    {letter.subject}
                    {!letter.read && <Badge className="bg-[#e6c96b] text-[#0b0f0c] hover:bg-[#e6c96b]/90">New</Badge>}
                  </CardTitle>
                  <CardDescription className="text-gray-500 mt-1 text-xs">
                    From {letter.from} • {new Date(letter.date).toLocaleDateString()}
                  </CardDescription>
                </div>
                {letter.from === 'Partner' && (
                  <Mail className="h-5 w-5 text-[#1B430F]" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-black/80 leading-relaxed">
                {letter.content}
              </p>
              <div className="mt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-[#1B430F] cursor-pointer mt-4 w-full py-6 text-white hover:bg-[#12350B] hover:text-white rounded-lg transition-all duration-300 group relative overflow-hidden"
                >
                  Reply
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {letters.length === 0 && (
        <Card className="w-full bg-[#1B430F] rounded-3xl p-2 shadow-xl relative overflow-hidden transition-all duration-500">
          <CardContent className="text-center py-12">
            <Heart className="h-12 w-12 text-[#81BC62]/80 mx-auto mb-4 drop-shadow-[0_0_6px_rgba(62,255,161,0.2)]" />
            <h3 className="text-lg font-medium text-[#d3e6dc] mb-2">No letters yet</h3>
            <p className="text-[#d3e6dc]/70 mb-4">Start sharing your feelings with your first love letter.</p>
            <Button
              onClick={() => setShowEditor(true)}
              className="cursor-pointer bg-[#81BC62] hover:bg-[#8DC270]/90 text-[#0A1005] rounded-lg py-5 hover:shadow-[0_0_10px_rgba(62,255,161,0.4)]"
            >
              Write Your First Letter
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}