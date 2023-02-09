import { LoggedScreen } from '@/components/pages/LoggedScreen'
import { getServerAuthSession } from '@/server/auth'
import type { GetServerSideProps } from 'next'
import { type NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx)

  return {
    props: { session }
  }
}

const Home: NextPage = () => {
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session) return

    void router.push('/auth/signIn')
  }, [session, router])

  return <LoggedScreen />
}

export default Home
