import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import AuthShowcase from '@/components/AuthShowcase'
import { MOCK_USER, useSessionMock } from '__mocks__/useSession.mock'
import { signIn, signOut } from 'next-auth/react'

jest.mock('next-auth/react')
jest.mock('@/utils/api', () => {
  return {
    api: {
      example: {
        getSecretMessage: {
          useQuery: jest.fn(() => {
            return { data: 'secret testing' }
          })
        }
      }
    }
  }
})

describe('MyComponent', () => {
  beforeEach(() => {
    useSessionMock(MOCK_USER)
  })

  afterEach(() => {
    jest.clearAllMocks()
    cleanup()
  })

  test('renders the component', () => {
    const { getByTestId } = render(<AuthShowcase />)

    expect(getByTestId('authshowcase')).toBeInTheDocument()
  })

  test('login will render secret message and username', () => {
    const { getByText } = render(<AuthShowcase />)

    expect(getByText('Logged in as John Doe')).toBeInTheDocument()
    expect(getByText('- secret testing')).toBeInTheDocument()
  })

  test('when has an user it will render a clickable sign out button', () => {
    const { getByText } = render(<AuthShowcase />)

    fireEvent.click(getByText('Sign out'))

    expect(signIn).not.toBeCalled()
    expect(signOut).toBeCalled()
  })

  test('without user it will render a clickable sign in button', () => {
    useSessionMock(undefined)

    const { getByText } = render(<AuthShowcase />)

    fireEvent.click(getByText('Sign in'))

    expect(signOut).not.toBeCalled()
    expect(signIn).toBeCalled()
  })
})
