import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import type { User } from '@supabase/supabase-js';
import { AuthWrapper } from './components/layout/auth-wrapper';
import { AppLayout } from './components/layout/app-layout';
import { ComplaintsPage } from './pages/complaints-page';
import { DashboardPage } from './pages/dashboard-page';
import { DateIdeasPage } from './pages/date-ideas-page';
import { LettersPage } from './pages/letters-page';
import { LoginPage } from './pages/login-page';
import { MemoriesPage } from './pages/memories-page';
import { SetupPage } from './pages/setup-page';
import { SignupPage } from './pages/signup-page';
import { TimersPage } from './pages/timers-page';
import LandingPage from './pages/landing-page';
import { MoodHubNavbar } from './components/layout/navbar';
import { Toaster } from 'react-hot-toast';

function PublicRoute({ children, isAuthenticated, isLoading }: { children: React.ReactNode, isAuthenticated: boolean, isLoading: boolean }) {
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }
  
  return children
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setIsLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null)
        setIsLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const location = useLocation()
  const isAuthenticated = !!user
  const isLandingPage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Toaster position="bottom-left" />
      {isLandingPage && <MoodHubNavbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
              <LandingPage />
            </PublicRoute>
          } />
          <Route path="/login" element={
            <PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
              <LoginPage />
            </PublicRoute>
          } />
          <Route path="/signup" element={
            <PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
              <SignupPage />
            </PublicRoute>
          } />
         
          <Route path="/setup" element={
            <AuthWrapper>
              <AppLayout>
                <SetupPage />
              </AppLayout>
            </AuthWrapper>
          } />
          <Route path="/dashboard" element={
            <AuthWrapper>
              <AppLayout>
                <DashboardPage />
              </AppLayout>
            </AuthWrapper>
          } />
          <Route path="/letters" element={
            <AuthWrapper>
              <AppLayout>
                <LettersPage />
              </AppLayout>
            </AuthWrapper>
          } />
          <Route path="/complaints" element={
            <AuthWrapper>
              <AppLayout>
                <ComplaintsPage />
              </AppLayout>
            </AuthWrapper>
          } />
          <Route path="/memories" element={
            <AuthWrapper>
              <AppLayout>
                <MemoriesPage />
              </AppLayout>
            </AuthWrapper>
          } />
          <Route path="/date-ideas" element={
            <AuthWrapper>
              <AppLayout>
                <DateIdeasPage />
              </AppLayout>
            </AuthWrapper>
          } />
          <Route path="/timers" element={
            <AuthWrapper>
              <AppLayout>
                <TimersPage />
              </AppLayout>
            </AuthWrapper>
          } />
        </Routes>
      </main>
      {isLandingPage && <MoodHubNavbar />}
    </div>
  )
}

export default App