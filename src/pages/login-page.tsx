import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'
import LoginBackground from '@/assets/images/login.png'
import Logo from '@/assets/images/logo.png'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { success, failure } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await signIn(email, password)
    if (error) {
      failure('Login failed !')
    } else {
      success('Welcome to Your Garden! 🌱')
      navigate('/dashboard')
    }
    setLoading(false)
  }

  return (
    <div className="h-screen bg-[#11210A] p-4">
      <div className="glass-card flex h-full lg:flex-row items-stretch justify-center rounded-3xl">
        {/* left side (form) */}
        <div className="w-full h-full rounded-2xl lg:w-1/2 p-10 flex flex-col justify-center shadow-xl">
          <div className="flex justify-center mb-6">
            <img src={Logo} alt="logo" className="w-12 h-12" />
          </div>

          <h2 className="text-2xl font-semibold text-white mb-2 text-center">Welcome Back</h2>
          <p className="text-neutral-400 text-center mb-8">Enter your credentials to unlock your secret garden.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium text-[#a7b1a3]">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="gardener@secret.com"
                className="mt-2 py-6 px-4 pr-12 bg-[#1B2E0F] border border-[#a7b1a3]/30 rounded-lg text-white placeholder:text-neutral-500"
              />
            </div>

            <div>
              <Label htmlFor="firstName" className="text-sm font-medium text-[#a7b1a3]">Password</Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Shhh... it's a secret"
                  className="py-6 px-4 pr-12 bg-[#1B2E0F] border border-[#a7b1a3]/30 rounded-lg text-white placeholder:text-neutral-500"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 text-neutral-400 hover:text-white hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="py-6 glass-button-enhanced cursor-pointer  w-full text-[#A7B1A3] hover:text-white/90 rounded-lg transition-all duration-300 group relative overflow-hidden"
            >
              {loading ? 'Unlocking...' : 'Unlock Your Garden'}
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-sm text-neutral-500 text-center">
              Don't have a garden yet?{' '}
              <Link to="/signup" className="font-medium text-[#6b9d47] hover:text-[#8dc96c] hover:underline transition-colors duration-300">
                Plant one now
              </Link>
            </p>
          </form>
        </div>
        {/* right side (image) */}
        <div className="rounded-2xl hidden lg:flex lg:w-full h-full relative shadow-xl p-2">
          <img
            src={LoginBackground}
            alt="Login background"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}