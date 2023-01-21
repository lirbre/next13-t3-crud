import { TextInput } from '../atoms/TextInput'
import Link from 'next/link'
import { DiscordBtn } from '../molecules/DiscordBtn'

export const SigninForm = () => {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-6 lg:w-1/2">
      <div className="mx-auto flex h-full w-full flex-col justify-center gap-6 p-4 lg:w-3/4">
        <div>
          <p className="text-4xl font-black">Signin on your account</p>
        </div>
        <form className="flex h-full w-full flex-col gap-3">
          <TextInput
            type="text"
            className="input-accent"
            placeholder="Enter your email"
          />
          <TextInput
            type="password"
            className="input-accent"
            placeholder="Enter your password"
          />
        </form>
        <div className="flex flex-col gap-3">
          <button className="btn-accent btn rounded-md">
            <p>Sign in</p>
          </button>
          <DiscordBtn type="Sign in" />
        </div>
      </div>
      <p className="mx-auto mt-2 lg:mt-6">
        Don&apos;t have an account?{' '}
        <Link className="link-accent link" href={'/auth/signup'}>
          Sign up
        </Link>
      </p>
    </div>
  )
}
