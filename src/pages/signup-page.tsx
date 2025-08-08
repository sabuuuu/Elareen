import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { signUp } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'
import LoginBackground from '@/assets/images/login.png'
import Logo from '@/assets/images/logo.png'

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
        title: 'Welcome to Your Garden! 🌱',
        description: 'Your account has been created successfully.',
      })
      navigate('/setup')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center flex-row-reverse pr-8 md:pr-16 bg-[#091605] text-[#a7b1a3] relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${LoginBackground})` }}
      ></div>

      <Card className="w-full max-w-md glass-card  rounded-3xl z-10 animate-fade-in-up lg:mr-40">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-2">
            <img src={Logo} alt="logo" className='size-12'/>
          </div>
          
          <CardTitle className="text-3xl font-semibold mb-2 text-white">
            Plant Your Garden
          </CardTitle>
          
          <CardDescription className="text-[#a7b1a3]/80 text-base">
            Create your account to start cultivating your secret garden.
          </CardDescription>
        </CardHeader>

        <div className="px-8">
          <div className="h-px w-full bg-[#a7b1a3]/20" />
        </div>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 px-8 pt-8">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#a7b1a3]">
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="e.g., gardener@secret.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 px-4 bg-transparent border-2 border-[#a7b1a3]/30 rounded-xl text-white placeholder:text-[#a7b1a3]/50 focus:border-[#6b9d47] focus:ring-[#6b9d47] transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-[#a7b1a3]">
                Your Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong secret"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 px-4 pr-12 bg-transparent border-2 border-[#a7b1a3]/30 rounded-xl text-white placeholder:text-[#a7b1a3]/50 focus:border-[#6b9d47] focus:ring-[#6b9d47] transition-all duration-300"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-[#a7b1a3]/60 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-[#a7b1a3]">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm your secret"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="h-11 px-4 bg-transparent border-2 border-[#a7b1a3]/30 rounded-xl text-white placeholder:text-[#a7b1a3]/50 focus:border-[#6b9d47] focus:ring-[#6b9d47] transition-all duration-300"
              />
            </div>
          </CardContent>

          <CardFooter className=" flex flex-col items-center justify-center space-y-4 px-8">
            <Button
              type="submit"
              size="lg"
              className="  glass-button-enhanced cursor-pointer h-11 w-full text-[#A7B1A3] hover:text-white/90 rounded-xl transition-all duration-300 group relative overflow-hidden"
              disabled={loading}
            >
                {loading ? 'Planting...' : 'Plant Your Garden'}
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
            
            <p className="text-center text-sm text-[#a7b1a3]/60 pt-2">
              Already have a garden?{' '}
              <Link 
                to="/login" 
                className="font-medium text-[#6b9d47] hover:text-[#8dc96c] hover:underline transition-colors duration-300"
              >
                Enter your sanctuary
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}