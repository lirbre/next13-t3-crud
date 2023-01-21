import { FcGoogle } from 'react-icons/fc'
import { Button } from '../atoms/Button'

export const GoogleBtn = ({ type }: { type: 'Sign in' | 'Sign up' }) => {
  return (
    <button className="btn-outline btn-ghost btn rounded-md">
      <span className="flex gap-4">
        <FcGoogle />
        <p className="text-md">{type} with Google</p>
      </span>
    </button>
  )
}
