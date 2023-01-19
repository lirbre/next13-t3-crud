import { Head } from '../atoms/Head'
import { NavBar } from '../organisms/NavBar'

type LayoutProps = {
  children: React.ReactNode
  title: string
}

export const BaseSkeleton = ({ children, title }: LayoutProps) => (
  <>
    <Head title={title} />
    <main className="base-100 flex min-h-screen flex-col bg-gradient-to-b">
      <NavBar />
      {children}
    </main>
  </>
)
