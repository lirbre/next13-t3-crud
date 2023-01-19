import { Head } from '../atoms/Head'
import { NavBar } from '../organisms/NavBar'

type LayoutProps = {
  children: React.ReactNode
  title: string
}

export const BaseSkeleton = ({ children, title }: LayoutProps) => (
  <>
    <Head title={title} />
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#8e5bd6] to-[#6065bd] dark:from-[#2e026d] dark:to-[#15162c]">
      <NavBar />
      {children}
    </main>
  </>
)
