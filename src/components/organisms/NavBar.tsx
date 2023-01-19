import { ThemeToggle } from '@/components/atoms/ThemeToggle'
import AuthShowcase from '@/components/molecules/AuthShowcase'

export const NavBar = () => (
  <div className="navbar flex justify-between bg-base-100">
    <ThemeToggle />
    <AuthShowcase />
  </div>
)
