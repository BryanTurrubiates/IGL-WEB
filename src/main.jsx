import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserAuthContext } from './frontend/Context/User/UserState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserAuthContext>
    <App />
  </UserAuthContext>
)
