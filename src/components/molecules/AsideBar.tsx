import type { FC, ReactNode } from 'react'

interface IAsideBar {
  children: ReactNode
}

export const AsideBar: FC<IAsideBar> = ({ children }) => {
  return (
    <aside className="flex w-52 flex-col items-center bg-aside_black">
      {children}
    </aside>
  )
}
