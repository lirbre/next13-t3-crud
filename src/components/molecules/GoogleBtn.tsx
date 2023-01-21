import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

export const GoogleBtn = ({ type }: { type: 'Sign in' | 'Sign up' }) => {
  return (
    <button
      onClick={() => void signIn('google', { callbackUrl: '/' })}
      className="btn-outline btn-ghost btn rounded-md"
    >
      <span className="flex gap-4">
        <FcGoogle />
        <p className="text-md">{type} with Google</p>
      </span>
    </button>
  )
}
