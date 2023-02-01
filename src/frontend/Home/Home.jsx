import { useContext } from 'react'
import { AuthContext } from '../Context/User/UserContext'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './NavBar/Nav'
import { Modules } from './Sections/Sections'
import { ModuleContext } from '../Context/ModulesSystem/moduleState'

export function HomePage () {
  const [usuario] = useContext(AuthContext)
  if (!usuario) {
    return <Navigate to='/login' />
  } else {
    return (
      <div className='__HomePage-Container'>
        <ModuleContext>
          <Navbar />
          <Routes>
            <Route path='/:topic' element=<Modules /> />
          </Routes>
        </ModuleContext>
      </div>
    )
  }
}
