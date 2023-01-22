import { SignupForm } from '../organisms/SignupForm'
import { Illustration } from '../organisms/Illustration'
import { SigninForm } from '../organisms/SigninForm'

type SignUpOrSignInPageProps = {
  signMethod: 'signUp' | 'signIn'
}

export const SignUpOrSignInPage = ({ signMethod }: SignUpOrSignInPageProps) => {
  const signInOrSignUp = {
    signUp: <SignupForm />,
    signIn: <SigninForm />
  }
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {signInOrSignUp[signMethod]}
      <Illustration />
    </div>
  )
}
