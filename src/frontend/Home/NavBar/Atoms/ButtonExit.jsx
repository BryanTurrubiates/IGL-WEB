import { RxExit } from 'react-icons/rx'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/User/UserContext'
import { logOutUser } from '../../../Services/AuthUser.js'

export function ButtonExit () {
  const [usuario, setUsuario] = useContext(AuthContext)
  const logOut = () => {
    logOutUser()
    if (usuario) { setUsuario(false) }
  }
  return <button className='btnExitSession' onClick={logOut}><RxExit className='iconBtn' /></button>
}
