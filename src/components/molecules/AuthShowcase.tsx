import { signIn, signOut, useSession } from 'next-auth/react'

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession()

  return (
    <aside
      data-testid="authshowcase"
      className="flex items-center justify-center gap-4"
    >
      <p className="text-md text-center text-white">
        {sessionData && (
          <span data-testid="authshowcase-user">
            Welcome, {sessionData.user?.name}
          </span>
        )}
      </p>
      <button
        className="btn-primary btn rounded-2xl"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </aside>
  )
}

export default AuthShowcase
