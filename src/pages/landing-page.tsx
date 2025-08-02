import { Heart, Users, Camera, MessageCircle, Calendar, Timer, Sparkles, Moon, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card,CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0b0f0c] text-[#d3e6dc] relative overflow-hidden">
      {/* Magical Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-green-900/20"></div>
      
      {/* Floating Magical Particles */}
      <div className="absolute top-10 left-10 animate-pulse opacity-40">
        <Sparkles className="h-4 w-4 text-[#3fffa1]" />
      </div>
      <div className="absolute top-32 right-16 animate-pulse opacity-30 delay-1000">
        <Star className="h-3 w-3 text-[#e6c96b]" />
      </div>
      <div className="absolute top-64 left-1/4 animate-pulse opacity-40 delay-2000">
        <Moon className="h-5 w-5 text-[#7c998a]" />
      </div>
      <div className="absolute bottom-32 right-10 animate-pulse opacity-30 delay-500">
        <Sparkles className="h-6 w-6 text-[#3fffa1]" />
      </div>
      <div className="absolute bottom-64 left-20 animate-pulse opacity-40 delay-1500">
        <Star className="h-4 w-4 text-[#e6c96b]" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <Heart className="h-16 w-16 text-[#3fffa1] mx-auto mb-6 animate-pulse drop-shadow-2xl shadow-[#3fffa1]/40" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="h-6 w-6 text-[#e6c96b] animate-spin" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Mystical
            <span className="text-[#3fffa1] block drop-shadow-2xl shadow-[#3fffa1]/30">
              Love Portal
            </span>
          </h1>
          
          <p className="text-lg italic text-[#e6c96b] mb-4">
            "Enter the Garden of Connection"
          </p>
          
          <p className="text-xl md:text-2xl text-[#7c998a] mb-8 max-w-3xl mx-auto leading-relaxed ">
            Weave magic into your long-distance love story. Track your hearts' rhythms, share enchanted memories, 
            and nurture your bond through the mystical realm of Elarin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" 
                      className="bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] text-lg px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#3fffa1]/40 ">
                Begin Your Journey
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" 
                      size="lg" 
                      className="text-lg px-8 py-3 border-[#e6c96b] text-[#e6c96b] hover:bg-[#e6c96b]/10 rounded-xl transition-all duration-300 ">
                Return to Portal
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating Mystical Hearts */}
        <div className="absolute top-20 left-10 opacity-30 animate-bounce">
          <Heart className="h-8 w-8 text-[#3fffa1] fill-current" />
        </div>
        <div className="absolute top-40 right-20 opacity-20 animate-bounce delay-1000">
          <Heart className="h-6 w-6 text-[#e6c96b] fill-current" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-25 animate-bounce delay-2000">
          <Heart className="h-10 w-10 text-[#7c998a] fill-current" />
        </div>
      </section>

      {/* Enchanted Divider */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center space-x-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#3fffa1]"></div>
          <Sparkles className="h-6 w-6 text-[#e6c96b]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#3fffa1]"></div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 ">
              Magical Tools for Your Love Journey
            </h2>
            <p className="text-xl text-[#7c998a] max-w-2xl mx-auto ">
              From enchanted mood crystals to mystical date planning, your portal awaits with powerful magic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#121c16] border border-[#3fffa1]/20 hover:border-[#3fffa1]/40 transition-all duration-300 rounded-3xl hover:shadow-2xl hover:shadow-black/30 group">
              <CardHeader className="text-center">
                <div className="relative inline-block mb-4">
                  <MessageCircle className="h-8 w-8 text-[#3fffa1] mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="h-4 w-4 text-[#e6c96b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardTitle className="text-[#d3e6dc] ">
                  Enchanted Letters
                </CardTitle>
                <CardDescription className="text-[#7c998a] ">
                  Craft magical love letters that shimmer with emotion and traverse any distance instantly
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#121c16] border border-[#3fffa1]/20 hover:border-[#3fffa1]/40 transition-all duration-300 rounded-3xl hover:shadow-2xl hover:shadow-black/30 group">
              <CardHeader className="text-center">
                <div className="relative inline-block mb-4">
                  <Camera className="h-8 w-8 text-[#3fffa1] mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1">
                    <Star className="h-4 w-4 text-[#e6c96b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardTitle className="text-[#d3e6dc] ">
                  Memory Crystals
                </CardTitle>
                <CardDescription className="text-[#7c998a] ">
                  Preserve precious moments in luminous crystal galleries that glow with shared memories
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#121c16] border border-[#3fffa1]/20 hover:border-[#3fffa1]/40 transition-all duration-300 rounded-3xl hover:shadow-2xl hover:shadow-black/30 group">
              <CardHeader className="text-center">
                <div className="relative inline-block mb-4">
                  <Calendar className="h-8 w-8 text-[#3fffa1] mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1">
                    <Moon className="h-4 w-4 text-[#e6c96b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardTitle className="text-[#d3e6dc] ">
                  Mystical Meetings
                </CardTitle>
                <CardDescription className="text-[#7c998a] ">
                  Conjure perfect virtual dates with our enchanted planning spells and magical ideas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#121c16] border border-[#3fffa1]/20 hover:border-[#3fffa1]/40 transition-all duration-300 rounded-3xl hover:shadow-2xl hover:shadow-black/30 group">
              <CardHeader className="text-center">
                <div className="relative inline-block mb-4">
                  <Timer className="h-8 w-8 text-[#3fffa1] mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="h-4 w-4 text-[#e6c96b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardTitle className="text-[#d3e6dc] ">
                  Time Weaving
                </CardTitle>
                <CardDescription className="text-[#7c998a] ">
                  Count down to reunions and celebrate milestones with glowing temporal magic
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#121c16] border border-[#3fffa1]/20 hover:border-[#3fffa1]/40 transition-all duration-300 rounded-3xl hover:shadow-2xl hover:shadow-black/30 group">
              <CardHeader className="text-center">
                <div className="relative inline-block mb-4">
                  <Heart className="h-8 w-8 text-[#3fffa1] mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1">
                    <Star className="h-4 w-4 text-[#e6c96b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardTitle className="text-[#d3e6dc] ">
                  Heart Resonance
                </CardTitle>
                <CardDescription className="text-[#7c998a] ">
                  Monitor your souls' harmony with ethereal mood tracking and mystical insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#121c16] border border-[#3fffa1]/20 hover:border-[#3fffa1]/40 transition-all duration-300 rounded-3xl hover:shadow-2xl hover:shadow-black/30 group">
              <CardHeader className="text-center">
                <div className="relative inline-block mb-4">
                  <Users className="h-8 w-8 text-[#3fffa1] mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1">
                    <Moon className="h-4 w-4 text-[#e6c96b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardTitle className="text-[#d3e6dc] ">
                  Soul Binding
                </CardTitle>
                <CardDescription className="text-[#7c998a] ">
                  Invite your beloved to join your sacred grove and create an eternal connection
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Enchanted Divider */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center space-x-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#e6c96b]"></div>
          <Heart className="h-6 w-6 text-[#3fffa1] fill-current animate-pulse" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#e6c96b]"></div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 relative mb-20 mx-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3fffa1]/10 via-transparent to-[#e6c96b]/10 rounded-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="mb-6">
            <Sparkles className="h-12 w-12 text-[#e6c96b] mx-auto animate-spin" />
          </div>
          <h2 className="text-4xl font-bold mb-6 ">
            Ready to Weave Your Love Magic?
          </h2>
          <p className="text-xl text-[#7c998a] mb-8 max-w-2xl mx-auto ">
            Join thousands of souls who have discovered the ancient art of nurturing love across any distance through the mystical realm of Elarin.
          </p>
          <Link to="/signup">
            <Button size="lg" 
                    className="bg-[#e6c96b] hover:bg-[#e6c96b]/90 text-[#0b0f0c] text-lg px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#e6c96b]/40 ">
              Enter the Portal - Free Forever
            </Button>
          </Link>
        </div>
      </section>

      {/* Bottom magical elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-30">
        <div className="flex space-x-8">
          <Sparkles className="h-4 w-4 text-[#3fffa1] animate-pulse" />
          <Star className="h-4 w-4 text-[#e6c96b] animate-pulse delay-500" />
          <Moon className="h-4 w-4 text-[#7c998a] animate-pulse delay-1000" />
        </div>
      </div>
    </div>
  )
}