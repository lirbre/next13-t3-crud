import { useSession } from 'next-auth/react'

export const MOCK_USER = {
  user: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    image: 'https://example.com/image.jpg'
  }
}

export const useSessionMock = (data?: typeof MOCK_USER) =>
  (useSession as jest.Mock).mockImplementation(() => {
    return {
      data,
      isLoading: false
    }
  })
