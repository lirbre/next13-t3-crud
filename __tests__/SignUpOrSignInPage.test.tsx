import { SignUpOrSignInPage } from '@/components/pages/SignUpOrSignInPage'
import { render, screen } from '@testing-library/react'

describe('<SignUpOrSignInPage />', () => {
  it('should be render the login page', () => {
    render(<SignUpOrSignInPage signMethod="signIn" />)

    expect(screen.getByText('Sign in')).toBeInTheDocument()
    expect(screen.queryByText('Create an account')).not.toBeInTheDocument()
  })

  it('should be render the signUp page', () => {
    render(<SignUpOrSignInPage signMethod="signUp" />)

    expect(screen.getByText('Sign up')).toBeInTheDocument()
    expect(screen.queryByText('Signin on your account')).not.toBeInTheDocument()
  })
})
