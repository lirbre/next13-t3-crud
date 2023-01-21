import type { FC, ReactNode } from 'react'

interface IWhiteFrame {
  children: ReactNode
}

export const WhiteFrame: FC<IWhiteFrame> = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center rounded-xl bg-slate-200 shadow-lg">
      {children}
    </div>
  )
}
