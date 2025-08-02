import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heart, Copy, Mail, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'

export function SetupPage() {
  const [partnerEmail, setPartnerEmail] = useState('')
  const [copied, setCopied] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const invitationLink = `${window.location.origin}/join?invite=${Math.random().toString(36).substring(7)}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(invitationLink)
      setCopied(true)
      toast({
        title: 'Link copied!',
        description: 'Invitation link has been copied to your clipboard.',
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to copy link to clipboard.',
        variant: 'destructive',
      })
    }
  }

  const handleEmailInvite = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send an email via Supabase Edge Functions
    toast({
      title: 'Invitation sent!',
      description: `An invitation has been sent to ${partnerEmail}.`,
    })
  }

  const handleSkip = () => {
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#0b0f0c] flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-[#121c16] border-[#1e2a22] rounded-2xl shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-[#3fffa1] fill-current drop-shadow-[0_0_10px_rgba(62,255,161,0.4)] animate-pulse" />
          </div>
          <CardTitle className="text-2xl font-bold text-[#d3e6dc] font-cinzel">
            Invite Your Partner
          </CardTitle>
          <CardDescription className="text-[#a3b8ae] font-inter">
            Create a shared space for your relationship by inviting your partner to join your MoodHub
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="link" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#0b0f0c] border border-[#1e2a22] rounded-xl p-1">
              <TabsTrigger 
                value="link" 
                className="data-[state=active]:bg-[#3fffa1] data-[state=active]:text-[#0b0f0c] rounded-lg font-inter transition-all"
              >
                Share Link
              </TabsTrigger>
              <TabsTrigger 
                value="email" 
                className="data-[state=active]:bg-[#3fffa1] data-[state=active]:text-[#0b0f0c] rounded-lg font-inter transition-all"
              >
                Send Email
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="link" className="space-y-4 mt-6">
              <div className="space-y-4">
                <Label className="text-[#d3e6dc] font-inter">Invitation Link</Label>
                <div className="flex space-x-2">
                  <Input
                    value={invitationLink}
                    readOnly
                    className="font-mono text-sm bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc] focus:ring-[#3fffa1] focus:border-[#3fffa1] focus:shadow-[0_0_0_2px_rgba(62,255,161,0.3)]"
                  />
                  <Button 
                    onClick={handleCopyLink} 
                    variant="outline"
                    className="border-[#3fffa1] text-[#3fffa1] hover:bg-[#3fffa1]/10 hover:shadow-[0_0_8px_rgba(62,255,161,0.3)]"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm text-[#a3b8ae] font-inter">
                  Share this link with your partner so they can join your MoodHub space.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="email" className="space-y-4 mt-6">
              <form onSubmit={handleEmailInvite} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="partnerEmail" className="text-[#d3e6dc] font-inter">
                    Partner's Email
                  </Label>
                  <Input
                    id="partnerEmail"
                    type="email"
                    placeholder="Enter your partner's email"
                    value={partnerEmail}
                    onChange={(e) => setPartnerEmail(e.target.value)}
                    required
                    className="bg-[#0b0f0c] border-[#1e2a22] text-[#d3e6dc] focus:ring-[#3fffa1] focus:border-[#3fffa1] focus:shadow-[0_0_0_2px_rgba(62,255,161,0.3)]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_10px_rgba(62,255,161,0.4)] transition-all"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Invitation
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 pt-6 border-t border-[#1e2a22]">
            <p className="text-center text-sm text-[#a3b8ae] mb-4 font-inter">
              You can always invite your partner later from your dashboard.
            </p>
            <Button 
              variant="ghost" 
              onClick={handleSkip} 
              className="w-full text-[#d3e6dc] hover:text-[#3fffa1] hover:bg-[#121c16]/50"
            >
              Skip for now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}