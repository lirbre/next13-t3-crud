import { TbLayoutKanban } from 'react-icons/tb'
import { BiUser } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { BsCalendar3Event, BsMap } from 'react-icons/bs'
import { VscGraphLine } from 'react-icons/vsc'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { BarIcon } from '../atoms/BarIcon'
import { useRouter } from 'next/router'

export const AisdeBarIcons = () => {
  const router = useRouter()
  return (
    <>
      <BarIcon
        onClick={() => {
          void router.push('/logged')
        }}
        title="Dashboard"
      >
        <TbLayoutKanban />
      </BarIcon>
      <BarIcon title="My Tasks">
        <BiUser />
      </BarIcon>
      <BarIcon title="Calendar">
        <BsCalendar3Event />
      </BarIcon>
      <BarIcon title="Burndown">
        <VscGraphLine />
      </BarIcon>
      <BarIcon title="Cloud tasks">
        <AiOutlineCloudUpload />
      </BarIcon>
      <BarIcon title="Roadmap">
        <BsMap />
      </BarIcon>
      <BarIcon title="Settings" onClick={() => void router.push('/settings')}>
        <FiSettings />
      </BarIcon>
    </>
  )
}
