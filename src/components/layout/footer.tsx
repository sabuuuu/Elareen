import { Heart } from 'lucide-react'
import { cn } from "@/lib/utils"
import Logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#040D01] border border-b-[transparent] border-l-[transparent] border-r-transparent border-t-[#235421]/50 mt-auto">

      <div className="absolute top-0 left-1/4 w-20 h-full bg-gradient-to-b from-[#4c7934]/40 via-[#4c7934]/15 to-transparent transform rotate-12 blur-3xl opacity-80"></div>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link 
            to="/" 
            className="relative z-20 flex items-center space-x-2 px-2 py-1 hover:scale-101 transition-all duration-300 group"
          >
            <img src={Logo} alt="Elareen" className="h-8 w-8" />
            <span className="text-xl font-semibold text-[#a7b1a3] tracking-wider">
              Elareen
            </span>
          </Link>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-[#A7B1A3] ">
              Made with{''}
              <Heart className={cn(
                "inline h-4 w-4 text-[#4c7934]/50 fill-current mx-1",
                "transition-all duration-300 hover:scale-105",
                "hover:drop-shadow-[0_0_10px_rgba(62,255,161,0.4)]"
              )} />
              for couples everywhere
            </p>
            <p className="text-xs text-[#A7B1A3] mt-1">
              © 2025 MoodHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}