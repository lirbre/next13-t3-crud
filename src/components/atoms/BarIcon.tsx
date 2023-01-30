import type { FC, ReactNode } from 'react'

interface IBarIcon {
  children: ReactNode
  onClick?(): void
  title: string
}

export const BarIcon: FC<IBarIcon> = ({ children, onClick, title }) => {
  return (
    <span
      onClick={onClick}
      className="mt-10 flex h-10 w-32 cursor-pointer flex-row items-center justify-evenly rounded-full text-slate-400 transition-all hover:bg-white/10 hover:text-white"
    >
      {children}
      <p>{title}</p>
    </span>
  )
}
