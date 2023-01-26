import { useContext } from 'react'
import { AuthContext } from '../../../Context/User/UserContext'

export const AuthUser = () => {
  const [usuario] = useContext(AuthContext)
  console.log(usuario)
}
