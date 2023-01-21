import { SigninForm } from '../organisms/SigninForm'
import { Illustration } from '../organisms/Illustration'

export const SigninPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <SigninForm />
      <Illustration />
    </div>
  )
}
