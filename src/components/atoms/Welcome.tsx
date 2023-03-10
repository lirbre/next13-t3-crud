import { useSession } from 'next-auth/react'

export const Welcome = () => {
  const { data: sessionData } = useSession()

  return (
    <span className="text-md text-center text-white">
      {sessionData && <p>Welcome, {sessionData.user?.name}</p>}
    </span>
  )
}
