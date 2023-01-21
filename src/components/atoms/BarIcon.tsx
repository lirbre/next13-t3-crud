import type { FC, ReactNode } from 'react'

interface IBarIcon {
  children: ReactNode
}

export const BarIcon: FC<IBarIcon> = ({ children }) => {
  return (
    <span className="mt-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-all hover:bg-white/10 hover:text-white">
      {children}
    </span>
  )
}
