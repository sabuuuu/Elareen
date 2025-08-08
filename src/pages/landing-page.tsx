import { Heart, Users, Camera, MessageCircle, Calendar, Timer, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Background from '@/assets/images/bg.png'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#091605] text-[#a7b1a3] relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-20 h-full bg-gradient-to-b from-[#4c7934]/40 via-[#4c7934]/15 to-transparent transform rotate-12 blur-3xl opacity-80"></div>
        <div className="absolute top-0 left-1/4 w-8 h-full bg-gradient-to-b from-[#6b9d47]/60 via-[#6b9d47]/25 to-transparent transform rotate-12 blur-xl"></div>
        
        <div className="absolute top-0 right-1/3 w-16 h-full bg-gradient-to-b from-[#4c7934]/35 via-[#4c7934]/12 to-transparent transform -rotate-6 blur-2xl opacity-70"></div>
        <div className="absolute top-0 right-1/3 w-6 h-full bg-gradient-to-b from-[#6b9d47]/50 via-[#6b9d47]/20 to-transparent transform -rotate-6 blur-lg"></div>
        
        <div className="absolute top-0 left-1/2 w-24 h-full bg-gradient-to-b from-[#4c7934]/45 via-[#4c7934]/18 to-transparent transform rotate-3 blur-3xl opacity-85"></div>
        <div className="absolute top-0 left-1/2 w-10 h-full bg-gradient-to-b from-[#6b9d47]/70 via-[#6b9d47]/30 to-transparent transform rotate-3 blur-xl"></div>
        
        <div className="absolute top-0 right-1/4 w-18 h-full bg-gradient-to-b from-[#4c7934]/38 via-[#4c7934]/14 to-transparent transform -rotate-12 blur-2xl opacity-75"></div>
        <div className="absolute top-0 right-1/4 w-7 h-full bg-gradient-to-b from-[#6b9d47]/55 via-[#6b9d47]/22 to-transparent transform -rotate-12 blur-lg"></div>
        
        <div className="absolute top-0 left-3/4 w-14 h-full bg-gradient-to-b from-[#4c7934]/32 via-[#4c7934]/10 to-transparent transform rotate-8 blur-2xl opacity-65"></div>
        <div className="absolute top-0 left-3/4 w-5 h-full bg-gradient-to-b from-[#6b9d47]/45 via-[#6b9d47]/18 to-transparent transform rotate-8 blur-lg"></div>
        

        <div className="absolute top-0 left-1/6 w-12 h-2/3 bg-gradient-to-b from-[#4c7934]/30 via-[#4c7934]/8 to-transparent transform rotate-15 blur-xl opacity-60"></div>
        <div className="absolute top-0 right-1/6 w-16 h-3/4 bg-gradient-to-b from-[#4c7934]/28 via-[#4c7934]/7 to-transparent transform -rotate-9 blur-2xl opacity-55"></div>
        <div className="absolute top-0 left-2/3 w-10 h-1/2 bg-gradient-to-b from-[#4c7934]/25 via-[#4c7934]/6 to-transparent transform rotate-20 blur-xl opacity-50"></div>

        <div className="absolute top-0 left-1/3 w-8 h-4/5 bg-gradient-to-b from-[#8bc34a]/30 via-[#8bc34a]/10 to-transparent transform rotate-25 blur-lg opacity-40"></div>
        <div className="absolute top-0 right-2/3 w-12 h-3/5 bg-gradient-to-b from-[#8bc34a]/25 via-[#8bc34a]/8 to-transparent transform -rotate-18 blur-xl opacity-35"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#235421]/8 via-transparent to-[#4c7934]/8"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#4c7934]/5 via-transparent to-transparent"></div>

      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url(${Background})`,
          }}
        ></div>
        
        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-semibold mb-8 md:mt-40  text-white drop-shadow-lg">
            Your Secret
            <span className="text-[#4C7934] italic"> Garden</span>
            <br />of Memories
          </h1>
          
          <p className="text-xl md:text-2xl text-[#a7b1a3]/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            A magical place where friends and lovers plant their sweetest moments, nurture their bond, and watch their story bloom—no matter the distance between hearts.
          </p>
          <Link to='login'>
            <Button size="lg" 
              className="cursor-pointer text-lg px-12 py-6 bg-[#12350B]/80 border border-[#4C7934]/50 hover:border-[#12350B]/90  text-[#A7B1A3] hover:bg-[#4c7934]/10 rounded-xl transition-all duration-300 backdrop-blur-sm">
              Plant Your Garden
              <Sparkles className="ml-2 h-6 w-6 hover:rotate-12 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4 text-white">
              Everything you need to grow together
            </h2>
            <p className="text-lg text-[#a7b1a3]/70 max-w-2xl mx-auto">
              Gentle tools to help you and your favorite people create a beautiful space filled with love, laughter, and cherished moments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[#0d1f08]/80 to-[#11210a]/60 border-2 border-[#235421]/80 hover:border-[#6b9d47]/60 transition-all duration-500 rounded-3xl hover:shadow-2xl hover:shadow-[#4c7934]/20 group backdrop-blur-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4c7934]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center p-8 relative z-10">
                <div className="mb-6 relative">
                  <MessageCircle className="h-10 w-10 text-[#6b9d47] mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10" />
                </div>
                <CardTitle className="text-white text-xl font-medium mb-3">
                  Secret Whispers
                </CardTitle>
                <CardDescription className="text-[#a7b1a3]/80 leading-relaxed text-base">
                  Share your deepest thoughts and sweetest words in your own private sanctuary. Every message is a seed of love.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-[#0d1f08]/80 to-[#11210a]/60 border-2 border-[#235421]/80 hover:border-[#6b9d47]/60 transition-all duration-500 rounded-3xl hover:shadow-2xl hover:shadow-[#4c7934]/20 group backdrop-blur-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4c7934]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center p-8 relative z-10">
                <div className="mb-6 relative">
                  <Camera className="h-10 w-10 text-[#6b9d47] mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10" />
                </div>
                <CardTitle className="text-white text-xl font-medium mb-3">
                  Memory Blossoms
                </CardTitle>
                <CardDescription className="text-[#a7b1a3]/80 leading-relaxed text-base">
                  Collect all your beautiful moments like pressed flowers in a digital diary. Watch your story unfold through pictures.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-[#0d1f08]/80 to-[#11210a]/60 border-2 border-[#235421]/80 hover:border-[#6b9d47]/60 transition-all duration-500 rounded-3xl hover:shadow-2xl hover:shadow-[#4c7934]/20 group backdrop-blur-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4c7934]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center p-8 relative z-10">
                <div className="mb-6 relative">
                  <Calendar className="h-10 w-10 text-[#6b9d47] mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10" />
                </div>
                <CardTitle className="text-white text-xl font-medium mb-3">
                  Dream Dates
                </CardTitle>
                <CardDescription className="text-[#a7b1a3]/80 leading-relaxed text-base">
                  Plan your next adventure together and count the days until you're reunited. Every moment apart brings you closer.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-[#0d1f08]/80 to-[#11210a]/60 border-2 border-[#235421]/80 hover:border-[#6b9d47]/60 transition-all duration-500 rounded-3xl hover:shadow-2xl hover:shadow-[#4c7934]/20 group backdrop-blur-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4c7934]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center p-8 relative z-10">
                <div className="mb-6 relative">
                  <Timer className="h-10 w-10 text-[#6b9d47] mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10" />
                </div>
                <CardTitle className="text-white text-xl font-medium mb-3">
                  Love Milestones
                </CardTitle>
                <CardDescription className="text-[#a7b1a3]/80 leading-relaxed text-base">
                  Celebrate every precious anniversary and special moment. Mark the growth of your beautiful connection.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-[#0d1f08]/80 to-[#11210a]/60 border-2 border-[#235421]/80 hover:border-[#6b9d47]/60 transition-all duration-500 rounded-3xl hover:shadow-2xl hover:shadow-[#4c7934]/20 group backdrop-blur-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4c7934]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center p-8 relative z-10">
                <div className="mb-6 relative">
                  <Heart className="h-10 w-10 text-[#6b9d47] mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10" />
                </div>
                <CardTitle className="text-white text-xl font-medium mb-3">
                  Daily Sunshine
                </CardTitle>
                <CardDescription className="text-[#a7b1a3]/80 leading-relaxed text-base">
                  Share your daily joys and gentle moments. Let each other know you're thinking of them, always.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-[#0d1f08]/80 to-[#11210a]/60 border-2 border-[#235421]/80 hover:border-[#6b9d47]/60 transition-all duration-500 rounded-3xl hover:shadow-2xl hover:shadow-[#4c7934]/20 group backdrop-blur-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4c7934]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center p-8 relative z-10">
                <div className="mb-6 relative">
                  <Users className="h-10 w-10 text-[#6b9d47] mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10" />
                </div>
                <CardTitle className="text-white text-xl font-medium mb-3">
                  Your Love Story
                </CardTitle>
                <CardDescription className="text-[#a7b1a3]/80 leading-relaxed text-base">
                  Create a beautiful space that tells the story of your unique bond, filled with all the little things that make you special.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 mb-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4c7934]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 relative">
            <div className="flex justify-center space-x-4 mb-6">
              <Heart className="h-8 w-8 text-[#6b9d47] fill-current animate-pulse" style={{animationDelay: '0s'}} />
              <Sparkles className="h-6 w-6 text-[#4c7934] animate-pulse" style={{animationDelay: '0.5s'}} />
              <Heart className="h-8 w-8 text-[#6b9d47] fill-current animate-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>
          
          <h2 className="text-4xl font-light mb-6 text-white leading-relaxed">
            Ready to start your
            <span className="text-[#6b9d47] font-normal"> magical journey</span>?
          </h2>
          <p className="text-xl text-[#a7b1a3]/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the sweetest souls who've already found their perfect place to keep love alive and friendships blooming across any distance.
          </p>
          
          <div className="space-y-4">
            <Button size="lg" 
                    className="bg-gradient-to-r from-[#4c7934] via-[#6b9d47] to-[#8bc34a] hover:from-[#235421] hover:via-[#4c7934] hover:to-[#6b9d47] text-white text-xl px-16 py-6 rounded-2xl font-medium transition-all duration-500 group shadow-2xl hover:shadow-[#6b9d47]/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center">
                Create Your Garden
                <Heart className="ml-3 h-6 w-6 fill-current group-hover:scale-125 transition-transform duration-300" />
              </span>
            </Button>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-[#a7b1a3]/60">
              <Sparkles className="h-4 w-4 text-[#6b9d47]" />
              <span>Free forever • Made with love • No strings attached</span>
              <Sparkles className="h-4 w-4 text-[#6b9d47]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}