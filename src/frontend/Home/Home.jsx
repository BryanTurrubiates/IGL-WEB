import { useContext } from 'react'
import { AuthContext } from '../Context/User/UserContext'
import { Navigate } from 'react-router-dom'
import { Navbar } from './NavBar/Nav'
import { TabsModules } from './Sections/Tabs/Tabs'

export function HomePage () {
  const [usuario] = useContext(AuthContext)
  const pathMODE = import.meta.env.VITE_URL
  if (!usuario) {
    return <Navigate to={`${pathMODE}/IGL-WEB/login`} />
  } else {
    return (
      <div className='__HomePage-Container'>
        <Navbar />
        <TabsModules />
      </div>
    )
  }
}
