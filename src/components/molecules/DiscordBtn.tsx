import { SiDiscord } from 'react-icons/si'

import { signIn } from 'next-auth/react'

export const DiscordBtn = ({ type }: { type: 'Sign in' | 'Sign up' }) => {
  return (
    <button
      onClick={() => void signIn('discord', { callbackUrl: '/logged' })}
      className="btn-outline btn-ghost btn rounded-md"
    >
      <span className="flex gap-4">
        <SiDiscord />
        <p className="text-md">{type} with Discord</p>
      </span>
    </button>
  )
}
