import { Head } from '@/components/atoms/Head'
import { SignUpOrSignInPage } from '@/components/pages/SignUpOrSignInPage'
import useLocalTheme from '@/hooks/useLocalTheme'
import type { GetServerSideProps } from 'next'
import type { Provider } from 'next-auth/providers'
import { getProviders } from 'next-auth/react'

export default function SignUp({
  providers,
  signMethod
}: {
  providers: Provider[]
  signMethod: 'signUp' | 'signIn'
}) {
  const handleTitle =
    signMethod === 'signIn' ? 'Login - Open Kanban' : 'Register - Open Kanban'
  useLocalTheme()
  console.log(providers)
  return (
    <>
      <Head title={handleTitle} />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <SignUpOrSignInPage signMethod={signMethod} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { signMethod } = context.query
  const providers = await getProviders()
  console.log(signMethod)
  return {
    props: { providers, signMethod }
  }
}
