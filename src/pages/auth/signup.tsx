import { SignupPage } from '@/components/pages/SignupPage'
import useLocalTheme from '@/hooks/useLocalTheme'
import type { Provider } from 'next-auth/providers'
import { getProviders, signIn } from 'next-auth/react'

export default function SignIn({ providers }: { providers: Provider[] }) {
  useLocalTheme()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SignupPage />
    </main>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: { providers }
  }
}
