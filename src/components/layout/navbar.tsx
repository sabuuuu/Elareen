import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { cn } from "../../lib/utils"
import {
  motion,
  AnimatePresence,
} from "motion/react"
import React from "react"
import Logo from "../../assets/images/logo.png"

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <div className={cn("fixed inset-x-0 top-5 z-40 w-full", className)}>
      {children}
    </div>
  );
};

export const NavBody = ({ children, className }: NavBodyProps) => {
  return (
    <div

      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full  px-4 py-2 lg:flex",
        "backdrop-blur-md border border-[#235421]/50 shadow-[0_0_24px_rgba(9,22,5,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(9,22,5,0.04),0_0_4px_rgba(9,22,5,0.08),0_16px_68px_rgba(17,33,10,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]",
        "w-[75%] translate-y-5",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium font-inter transition duration-200 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item.link}
          key={`link-${idx}`}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-[#a7b1a3] hover:text-[#3fffa1] transition-all hover:drop-shadow-[0_0_6px_rgba(62,255,161,0.3)]"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-[#11210a]"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-lg px-3 py-2 lg:hidden",
        "backdrop-blur-md bg-[#091605] border border-[#235421]/50 shadow-[0_0_24px_rgba(9,22,5,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(9,22,5,0.04),0_0_4px_rgba(9,22,5,0.08),0_16px_68px_rgba(17,33,10,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]",
        "w-[90%] translate-y-5",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            backdropFilter: "blur(10px)",
          }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-[#091605] backdrop-blur-md border border-[#235421]/50 px-4 py-8",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={onClick}
      className="text-[#a7b1a3] hover:text-[#A7B1A3] hover:bg-[#11210A]"
    >
      {isOpen ? (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 180 }}
          transition={{ duration: 0.2 }}
        >
          ✕
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          ☰
        </motion.div>
      )}
    </Button>
  );
};

export const NavbarLogo = () => {
  return (
    <Link 
      to="/" 
      className="relative z-20 flex items-center space-x-2 px-2 py-1 hover:scale-101 transition-all duration-300 group"
    >
      <img src={Logo} alt="Elareen" className="h-8 w-8" />
      <span className="text-xl font-semibold text-[#a7b1a3] tracking-wider">
        Elareen
      </span>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "button",
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  onClick?: () => void;
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "glass-button-enhanced px-5 py-2.5 rounded-full text-sm font-medium relative cursor-pointer   transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-[#4C7934] hover:bg-[#235421]/90 text-[#091605] ",
    secondary: "bg-transparent shadow-none text-[#a7b1a3] hover:text-[#235421] hover:bg-[#11210a]   ",
    dark: "bg-[#11210a] border border-[235421] text-[#a7b1a3] hover:bg-[#11210a]/80 hover:text-[#235421]  ",
    gradient:
      "bg-gradient-to-b from-[#4c7934] to-[#235421] text-[#a7b1a3] ",
  };

  const Component = href ? Link : Tag;
  const componentProps = href ? { to: href, ...props } : { onClick, ...props };

  return (
    <Component
      className={cn(baseStyles, variantStyles[variant], className)}
      {...componentProps}
    >
      {children}
    </Component>
  );
};

export function MoodHubNavbar() {
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

  const navigationItems = user ? [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Letters', link: '/letters' },
    { name: 'Complaints', link: '/complaints' },
    { name: 'Memories', link: '/memories' },
    { name: 'Date Ideas', link: '/date-ideas' },
    { name: 'Timers', link: '/timers' },
  ] : []

  return (
    <Navbar className=" fixed inset-x-0 top-0 z-40 w-full ">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        
        {user && (
          <NavItems
            items={navigationItems}
            onItemClick={() => setIsMenuOpen(false)}
          />
        )}

        <div className="relative z-20 flex items-center space-x-2 ">
          {user ? (
            <NavbarButton
              variant="dark"
              onClick={handleSignOut}
              className="flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </NavbarButton>
          ) : (
            <>
              <NavbarButton variant="primary" href="/login">
                Get Started
              </NavbarButton>
            </>
          )}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMenuOpen}
            onClick={toggleMenu}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMenuOpen}>
          {user ? (
            <>
              {navigationItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className="text-[#a7b1a3] hover:text-[#3fffa1] transition-all px-4 py-2 font-inter hover:bg-[#11210a] rounded-lg hover:shadow-[0_0_6px_rgba(62,255,161,0.2)] w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2 border-t border-[#11210a] w-full">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    handleSignOut()
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-[#11210a] border-[#3fffa1] text-[#a7b1a3] hover:bg-[#11210a]/80 hover:text-[#3fffa1] hover:shadow-[0_0_10px_rgba(62,255,161,0.4)]"
                >
                  Sign Out
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col space-y-4 px-4 w-full">
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full">
                <Button 
                  className="glass-button-enhanced w-full rounded-sm bg-[#4C7934] hover:bg-[#235421]/90 text-[#091605]"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}