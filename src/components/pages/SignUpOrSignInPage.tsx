import { SignupForm } from '../organisms/SignupForm'
import { Illustration } from '../organisms/Illustration'
import { SigninForm } from '../organisms/SigninForm'
import type { ReactElement } from 'react'

export const SignMehtods = ['signup', 'signin'] as const

export type SignMethodType = (typeof SignMehtods)[number]

type SignUpOrSignInPageProps = {
  signMethod: SignMethodType
}

export type KeyMapperToElement<TProperties extends string> = {
  [key in TProperties as `${key}`]: ReactElement // key remapping
}

export const SignUpOrSignInPage = ({ signMethod }: SignUpOrSignInPageProps) => {
  const signInOrSignUp: KeyMapperToElement<SignMethodType> = {
    signup: <SignupForm />,
    signin: <SigninForm />
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {signInOrSignUp[signMethod]}
      <Illustration />
    </div>
  )
}
