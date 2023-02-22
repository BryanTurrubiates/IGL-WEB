import { useContext } from 'react'
import { AuthContext } from '../Context/User/UserContext'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './NavBar/Nav'
import { Modules } from './Sections/Sections'
import { ModulePreview } from '../Home/Sections/Views/ModulePreview'
import { ModuleContext } from '../Context/ModulesSystem/moduleState'
import { TabsContextProvider } from '../Context/TabsContext/TabsState'

export function HomePage () {
  const [usuario] = useContext(AuthContext)
  const pathMODE = import.meta.env.VITE_URL
  if (!usuario) {
    return <Navigate to={`${pathMODE}/IGL-WEB/login`} />
  } else {
    return (
      <div className='__HomePage-Container'>
        <ModuleContext>
          <TabsContextProvider>
            <Navbar />
            <Routes>
              <Route path='/:topic' element=<Modules /> />
              <Route path='/:topic/:module' element=<ModulePreview /> />
            </Routes>
          </TabsContextProvider>
        </ModuleContext>
      </div>
    )
  }
}
