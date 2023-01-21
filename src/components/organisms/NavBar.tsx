import { ThemeToggle } from '@/components/atoms/ThemeToggle'
import AuthShowcase from '@/components/molecules/AuthShowcase'

export const NavBar = () => (
  <div className="navbar justify-between bg-base-300 shadow-md">
    <ThemeToggle />
    <AuthShowcase />
  </div>
)
