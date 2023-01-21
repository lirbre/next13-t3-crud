import { SignUpOrSignInPage } from '@/components/pages/SignUpOrSignInPage'
import useLocalTheme from '@/hooks/useLocalTheme'
import type { Provider } from 'next-auth/providers'
import { getProviders } from 'next-auth/react'

export default function SignIn({ providers }: { providers: Provider[] }) {
  useLocalTheme()

  console.log(providers)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SignUpOrSignInPage signMethod="signIn" />
    </main>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: { providers }
  }
}
