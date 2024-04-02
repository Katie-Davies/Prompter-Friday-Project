import { useAuth0 } from '@auth0/auth0-react'
import { Link, Outlet } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import addUser from '../hooks/addUser'
import { User } from '../../models/prompt'

function App() {
  const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0()

  const handleSignOut = async () => {
    await logout()
  }

  const handleSignIn = async () => {
    await loginWithRedirect()
  }

  if (isAuthenticated) {
    const data: User = {
      id: user?.sub,
      nickname: user?.nickname,
    }
    addUser(data)
  }

  return (
    <>
      <div className="main">
        <header>
          <div className="heading-main">
            <Link to="/">
              <img
                src="client/Public/images/Prompter (1) (1).png"
                alt="button to home"
              />
            </Link>
            <div>
              <IfAuthenticated>
                <button onClick={handleSignOut}>Sign out</button>
                {user && <p>Signed in as: {user?.nickname}</p>}
              </IfAuthenticated>
              <IfNotAuthenticated>
                <button onClick={handleSignIn}>Sign in</button>
              </IfNotAuthenticated>
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    </>
  )
}

export default App
