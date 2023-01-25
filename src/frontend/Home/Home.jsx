import { useContext } from 'react'
import { AuthContext } from '../Context/User/UserContext'
import { Navigate } from 'react-router-dom'
import { Navbar } from './NavBar/Nav'

export function HomePage () {
  const [usuario] = useContext(AuthContext)
  if (!usuario) {
    return <Navigate to='/login' />
  } else {
    return (
      <div className='__HomePage-Container'>
        <Navbar />
      </div>
    )
  }
}
