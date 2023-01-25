import { RxExit } from 'react-icons/rx'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/User/UserContext'

export function ButtonExit () {
  const [usuario, setUsuario] = useContext(AuthContext)
  const logOut = () => {
    if (usuario) { setUsuario(false) }
  }
  return <button className='btnExitSession' onClick={logOut}><RxExit className='iconBtn' /></button>
}
