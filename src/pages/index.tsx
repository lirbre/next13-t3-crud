import { LoggedScreen } from '@/components/pages/LoggedScreen'
import { getServerAuthSession } from '@/server/auth'
import type { GetServerSideProps } from 'next'
import { type NextPage } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signIn',
        permanent: false
      },
      props: {}
    }
  }

  return {
    props: { session }
  }
}

const Home: NextPage = () => {
  return <LoggedScreen />
}

export default Home
