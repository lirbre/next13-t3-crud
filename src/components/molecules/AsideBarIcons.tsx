import { TbLayoutKanban } from 'react-icons/tb'
import { BiUser } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { BsCalendar3Event, BsMap } from 'react-icons/bs'
import { VscGraphLine } from 'react-icons/vsc'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import type { ReactNode } from 'react'
import { BarIcon } from '../atoms/BarIcon'
import type { IconType } from 'react-icons'

export const AisdeBarIcons = () => {
  const iconsToRender: IconType[] = [
    TbLayoutKanban,
    BiUser,
    BsCalendar3Event,
    VscGraphLine,
    AiOutlineCloudUpload,
    BsMap,
    FiSettings
  ]
  return (
    <>
      {iconsToRender.map((Icon, i) => (
        <BarIcon key={i}>
          <Icon size={18} />
        </BarIcon>
      ))}
    </>
  )
}
