import { SignupForm } from '../organisms/SignupForm'
import { Illustration } from '../organisms/Illustration'

export const SignupPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <SignupForm />
      <Illustration />
    </div>
  )
}
