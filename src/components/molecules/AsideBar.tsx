import type { FC, ReactNode } from 'react'

interface IAsideBar {
  children: ReactNode
}

export const AsideBar: FC<IAsideBar> = ({ children }) => {
  return (
    <aside className="flex w-20 flex-col items-center bg-[#1C1D22]">
      {children}
    </aside>
  )
}
