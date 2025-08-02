import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, LogOut, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import type { User as SupabaseUser } from '@supabase/supabase-js'

export function Navbar() {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      if (subscription) subscription.unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      navigate('/')
    }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-[#0b0f0c] backdrop-blur-sm border-b border-[#121c16] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 group"
          >
            <Heart className="h-8 w-8 text-[#3fffa1] fill-current drop-shadow-[0_0_10px_rgba(62,255,161,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(62,255,161,0.6)] transition-all" />
            <span className="text-xl font-bold text-[#d3e6dc] font-cinzel tracking-wider">
              MoodHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all font-inter hover:drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/letters" 
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all font-inter hover:drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]"
                >
                  Letters
                </Link>
                <Link 
                  to="/complaints" 
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all font-inter hover:drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]"
                >
                  Complaints
                </Link>
                <Link 
                  to="/memories" 
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all font-inter hover:drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]"
                >
                  Memories
                </Link>
                <Link 
                  to="/date-ideas" 
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all font-inter hover:drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]"
                >
                  Date Ideas
                </Link>
                <Link 
                  to="/timers" 
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all font-inter hover:drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]"
                >
                  Timers
                </Link>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 bg-[#121c16] border-[#3fffa1] text-[#d3e6dc] hover:bg-[#121c16]/80 hover:text-[#3fffa1] hover:shadow-[0_0_10px_rgba(62,255,161,0.4)]"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button 
                    variant="ghost" 
                    className="text-[#d3e6dc] hover:text-[#3fffa1] hover:bg-[#121c16] hover:shadow-[0_0_6px_rgba(62,255,161,0.2)]"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button 
                    className="bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_15px_rgba(62,255,161,0.6)]"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu}
              className="text-[#d3e6dc] hover:text-[#3fffa1] hover:bg-[#121c16]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 hover:drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]" />
              ) : (
                <Menu className="h-6 w-6 hover:drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#121c16] bg-[#0b0f0c]/95 backdrop-blur-lg">
            {user ? (
              <div className="flex flex-col space-y-4">
                <Link
                  to="/dashboard"
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all px-4 py-2 font-inter hover:bg-[#121c16] rounded-lg hover:shadow-[0_0_6px_rgba(62,255,161,0.2)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/letters"
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all px-4 py-2 font-inter hover:bg-[#121c16] rounded-lg hover:shadow-[0_0_6px_rgba(62,255,161,0.2)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Letters
                </Link>
                <Link
                  to="/complaints"
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all px-4 py-2 font-inter hover:bg-[#121c16] rounded-lg hover:shadow-[0_0_6px_rgba(62,255,161,0.2)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Complaints
                </Link>
                <Link
                  to="/memories"
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all px-4 py-2 font-inter hover:bg-[#121c16] rounded-lg hover:shadow-[0_0_6px_rgba(62,255,161,0.2)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Memories
                </Link>
                <Link
                  to="/date-ideas"
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all px-4 py-2 font-inter hover:bg-[#121c16] rounded-lg hover:shadow-[0_0_6px_rgba(62,255,161,0.2)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Date Ideas
                </Link>
                <Link
                  to="/timers"
                  className="text-[#d3e6dc] hover:text-[#3fffa1] transition-all px-4 py-2 font-inter hover:bg-[#121c16] rounded-lg hover:shadow-[0_0_6px_rgba(62,255,161,0.2)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Timers
                </Link>
                <div className="px-4 py-2 border-t border-[#121c16]">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSignOut}
                    className="w-full bg-[#121c16] border-[#3fffa1] text-[#d3e6dc] hover:bg-[#121c16]/80 hover:text-[#3fffa1] hover:shadow-[0_0_10px_rgba(62,255,161,0.4)]"
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-4 px-4">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="ghost" 
                    className="w-full text-[#d3e6dc] hover:text-[#3fffa1] hover:bg-[#121c16] hover:shadow-[0_0_6px_rgba(62,255,161,0.2)]"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className="w-full bg-[#3fffa1] hover:bg-[#3fffa1]/90 text-[#0b0f0c] font-bold hover:shadow-[0_0_15px_rgba(62,255,161,0.6)]"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}