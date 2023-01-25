import { AuthContext } from './UserContext'
import { useState } from 'react'

export function UserAuthContext ({ children }) {
  const [usuario, setUsuario] = useState(null)
  return (
    <AuthContext.Provider value={[usuario, setUsuario]}>
      {children}
    </AuthContext.Provider>
  )
}
