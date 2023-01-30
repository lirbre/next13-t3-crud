import type { FC, ReactNode } from 'react'
import { AsideBar } from '../molecules/AsideBar'
import { AisdeBarIcons } from '../molecules/AsideBarIcons'
import { NavBar } from '../organisms/NavBar'

interface IWhiteFrame {
  children: ReactNode
}

export const WhiteFrame: FC<IWhiteFrame> = ({ children }) => {
  return (
    <div className="bg-base flex min-h-screen grow flex-row-reverse shadow-lg">
      <div className="flex h-full w-full grow flex-col items-center">
        <NavBar />
        {children}
      </div>

      <AsideBar>
        <AisdeBarIcons />
      </AsideBar>
    </div>
  )
}
