import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { signUp } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match.',
        variant: 'destructive',
      })
      return
    }

    if (password.length < 6) {
      toast({
        title: 'Error',
        description: 'Password must be at least 6 characters long.',
        variant: 'destructive',
      })
      return
    }

    setLoading(true)

    const { error } = await signUp(email, password)

    if (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'Welcome to MoodHub!',
        description: 'Your account has been created successfully.',
      })
      navigate('/setup')
    }

    setLoading(false)
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0b0f0c 0%, #1a251e 50%, #0b0f0c 100%)',
      }}
    >
      {/* Magical floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-yellow-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <Card 
        className="w-full max-w-md border-0 shadow-2xl relative backdrop-blur-sm"
        style={{ 
          backgroundColor: '#121c16',
          borderRadius: '1.25rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(63, 255, 161, 0.1)'
        }}
      >
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart 
                className="h-14 w-14 fill-current animate-pulse" 
                style={{ color: '#3fffa1' }}
              />
              <div 
                className="absolute inset-0 h-14 w-14 rounded-full animate-ping opacity-20"
                style={{ backgroundColor: '#3fffa1' }}
              ></div>
            </div>
          </div>
          
          <CardTitle 
            className="text-3xl font-bold mb-2 text-[#d3e6dc]"
          >
            Create Your Sanctuary
          </CardTitle>
          
          <div 
            className="text-sm mb-4 italic"
            style={{ color: '#7c998a' }}
          >
            Begin Your Journey of Connection
          </div>
          
          <CardDescription style={{ color: '#7c998a' }}>
            Start your journey to a stronger relationship
          </CardDescription>
        </CardHeader>

        {/* Soft divider */}
        <div className="px-6">
          <div 
            className="h-px w-full mb-6"
            style={{ 
              background: 'linear-gradient(90deg, transparent 0%, rgba(124, 153, 138, 0.3) 50%, transparent 100%)'
            }}
          ></div>
        </div>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 px-6">
            <div className="space-y-3">
              <Label 
                htmlFor="email"
                className="text-sm font-medium"
                style={{ color: '#d3e6dc' }}
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-0 h-12 px-4 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-offset-0"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '0.75rem',
                  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
                }}
                onFocus={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
                  target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 15px rgba(63, 255, 161, 0.2)'
                }}
                onBlur={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                  target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.3)'
                }}
              />
            </div>

            <div className="space-y-3">
              <Label 
                htmlFor="password"
                className="text-sm font-medium"
                style={{ color: '#d3e6dc' }}
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-0 h-12 px-4 pr-12 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-offset-0"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '0.75rem',
                    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
                  }}
                  onFocus={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
                    target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 15px rgba(63, 255, 161, 0.2)'
                  }}
                  onBlur={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                    target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.3)'
                  }}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" style={{ color: '#7c998a' }} />
                  ) : (
                    <Eye className="h-5 w-5" style={{ color: '#7c998a' }} />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <Label 
                htmlFor="confirmPassword"
                className="text-sm font-medium"
                style={{ color: '#d3e6dc' }}
              >
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border-0 h-12 px-4 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-offset-0"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '0.75rem',
                  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
                }}
                onFocus={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
                  target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 15px rgba(63, 255, 161, 0.2)'
                }}
                onBlur={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                  target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.3)'
                }}
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-6 px-6 pt-8">
            <Button
              type="submit"
              className="w-full h-12 text-black font-semibold transition-all duration-300 border-0 rounded-xl relative overflow-hidden group"
              disabled={loading}
              style={{ 
                backgroundColor: '#3fffa1',
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.boxShadow = '0 0 20px rgba(63, 255, 161, 0.6)'
                target.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.boxShadow = '0 0 10px rgba(63, 255, 161, 0.4)'
                target.style.transform = 'translateY(0)'
              }}
            >
              <span className="relative z-10">
                {loading ? 'Creating your sanctuary...' : 'Create Your Sanctuary'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>

            {/* Soft divider before signin link */}
            <div 
              className="h-px w-full"
              style={{ 
                background: 'linear-gradient(90deg, transparent 0%, rgba(124, 153, 138, 0.2) 50%, transparent 100%)'
              }}
            ></div>

            <p className="text-center text-sm" style={{ color: '#7c998a' }}>
              Already have a sanctuary?{' '}
              <Link 
                to="/login" 
                className="font-medium transition-all duration-300 hover:underline"
                style={{ color: '#e6c96b' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.textShadow = '0 0 8px rgba(230, 201, 107, 0.5)'
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.textShadow = 'none'
                }}
              >
                Enter your garden
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}