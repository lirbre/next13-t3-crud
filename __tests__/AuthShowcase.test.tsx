import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AuthShowcase from '@/components/AuthShowcase'
import { MOCK_USER, useSessionMock } from '__mocks__/useSession.mock'
import { apiMock } from '__mocks__/api.mock'

jest.mock('next-auth/react')

describe('MyComponent', () => {
  beforeEach(() => {
    useSessionMock(MOCK_USER)
    apiMock()
  })

  test('renders the component', () => {
    const { getByTestId } = render(<AuthShowcase />)

    expect(getByTestId('my-component')).toBeInTheDocument()
  })

  test('handles button click', () => {
    const { getByTestId } = render(<AuthShowcase />)
    const button = getByTestId('my-button')
    fireEvent.click(button)
    expect(getByTestId('my-component')).toHaveTextContent('Button clicked')
  })
})
