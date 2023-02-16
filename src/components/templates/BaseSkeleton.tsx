import { Head } from '../atoms/Head'
import { AsideBar } from '../molecules/AsideBar'
import { AisdeBarIcons } from '../molecules/AsideBarIcons'
import { NavBar } from '../organisms/NavBar'

type LayoutProps = {
  children: React.ReactNode
  title: string
}

export const BaseSkeleton = ({ children, title }: LayoutProps) => (
  <>
    <Head title={title} />
    <main className="base-100 flex max-h-screen flex-1 flex-col bg-gradient-to-b">
      <div className="flex h-screen grow flex-row-reverse bg-base-300 shadow-lg">
        <div className="flex h-full w-full grow flex-col items-center">
          <NavBar />
          {children}
        </div>

        <AsideBar>
          <AisdeBarIcons />
        </AsideBar>
      </div>
    </main>
  </>
)
