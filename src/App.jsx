import './frontend/Home/CSS/stylesApp.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './frontend/Authentication/Login'
import { HomePage } from './frontend/Home/Home'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<Navigate to='/login' /> />
        <Route path='/login' element=<Login /> />
        <Route path='/home' element=<HomePage /> />
      </Routes>
    </BrowserRouter>
  )
}

export default App
