import { Heart } from 'lucide-react'
import { cn } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="bg-[#121c16] border-t border-[#0b0f0c]/50 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2 group">
            <Heart className={cn(
              "h-6 w-6 text-[#3fffa1] fill-current",
              "transition-all duration-300 group-hover:scale-110",
              "group-hover:drop-shadow-[0_0_10px_rgba(62,255,161,0.4)]"
            )} />
            <span className="text-lg font-cinzel text-[#3fffa1]">
              MoodHub
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-[#d3e6dc]/80 font-inter">
              Made with{' '}
              <Heart className={cn(
                "inline h-4 w-4 text-[#3fffa1] fill-current mx-1",
                "transition-all duration-300 hover:scale-125",
                "hover:drop-shadow-[0_0_10px_rgba(62,255,161,0.4)]"
              )} />
              for couples everywhere
            </p>
            <p className="text-xs text-[#d3e6dc]/60 mt-1 font-inter">
              © 2025 MoodHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}