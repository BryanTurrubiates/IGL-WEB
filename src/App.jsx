import './frontend/Home/CSS/stylesApp.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './frontend/Authentication/Login'
import { HomePage } from './frontend/Home/Home'

function App () {
  const pathMODE = import.meta.env.VITE_URL
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${pathMODE}/IGL-WEB/`} element=<Navigate to={`${pathMODE}/IGL-WEB/login`} /> />
        <Route path={`${pathMODE}/IGL-WEB/login`} element=<Login /> />
        <Route path={`${pathMODE}/IGL-WEB/home/*`} element=<HomePage /> />
      </Routes>
    </BrowserRouter>
  )
}

export default App
