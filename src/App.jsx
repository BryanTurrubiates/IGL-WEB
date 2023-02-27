import './frontend/Home/CSS/stylesApp.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './frontend/Authentication/Login'
import { HomePage } from './frontend/Home/Home'
import { Modules } from './frontend/Home/Sections/Sections'
import { ModuleContext } from './frontend/Context/ModulesSystem/moduleState'
import { TabsContextProvider } from './frontend/Context/TabsContext/TabsState'
import { NotFund } from './frontend/404/notFound'

function App () {
  const pathMODE = import.meta.env.VITE_URL
  return (
    <ModuleContext>
      <TabsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={`${pathMODE}/IGL-WEB/`} element=<Navigate to={`${pathMODE}/IGL-WEB/login`} /> />
            <Route path={`${pathMODE}/IGL-WEB/login`} element=<Login /> />
            <Route path={`${pathMODE}/IGL-WEB/home`} element={<HomePage />} />
            <Route path={`${pathMODE}/IGL-WEB/home/:topic`} element={<Modules />} />
            <Route path={`${pathMODE}/IGL-WEB/404`} element={<NotFund />} />
            <Route path='*' element={<Navigate to={`${pathMODE}/IGL-WEB/404`} />} />
          </Routes>
        </BrowserRouter>
      </TabsContextProvider>
    </ModuleContext>
  )
}

export default App
