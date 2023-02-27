import { TabsModules } from './Tabs/Tabs'
import { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../../Context/User/UserContext'
import { Navbar } from '../NavBar/Nav'
import './Sections.css'

export function Modules () {
  const [usuario] = useContext(AuthContext)
  const pathMODE = import.meta.env.VITE_URL
  if (!usuario) { return <Navigate to={`${pathMODE}/IGL-WEB/login`} /> } else {
    return (
      <div className='__MainBody-Container'>
        <Navbar />
        <TabsModules />
      </div>
    )
  }
}
