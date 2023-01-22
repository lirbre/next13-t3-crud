import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { ThemeToggle } from '../atoms/ThemeToggle'

export const UserImage = () => {
  const { data: sessionData } = useSession()
  return (
    <div className="dropdown-left dropdown ml-4 hover:cursor-pointer">
      <figure tabIndex={0} className="rounded-full">
        <Image
          src={sessionData?.user?.image || ''}
          width={35}
          height={35}
          className="rounded-full"
          alt="user image"
        />
      </figure>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box mt-4 w-52 bg-aside_black p-2 shadow"
      >
        <li>
          <span
            onClick={() =>
              void signOut({
                callbackUrl: `${window.location.origin}/auth/signIn`
              })
            }
          >
            Logout
          </span>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  )
}
