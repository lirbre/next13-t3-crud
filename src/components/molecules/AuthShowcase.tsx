import { signIn, signOut, useSession } from 'next-auth/react'

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession()

  return (
    <aside
      data-testid="authshowcase"
      className="flex items-center justify-center gap-4"
    >
      <button
        className="btn-primary btn rounded-2xl"
        onClick={
          sessionData
            ? () =>
                void signOut({
                  callbackUrl: `${window.location.origin}/auth/signin`
                })
            : () =>
                void signIn('', {
                  callbackUrl: `${window.location.origin}/logged`
                })
        }
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </aside>
  )
}

export default AuthShowcase
