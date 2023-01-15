import { api } from '@/utils/api'

export const apiMock = () =>
  (api.example.getSecretMessage.useQuery as jest.Mock).mockImplementation(
    () => {
      return 'testing'
    }
  )
