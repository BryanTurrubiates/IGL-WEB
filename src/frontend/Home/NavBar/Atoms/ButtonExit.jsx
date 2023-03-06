import { RxExit } from 'react-icons/rx'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/User/UserContext'
import { TabsContext } from '../../../Context/TabsContext/TabsContext'
import { logOutUser } from '../../../Services/AuthUser.js'

export function ButtonExit () {
  const [usuario, setUsuario] = useContext(AuthContext)
  const [, setTabs,, setActiveTab] = useContext(TabsContext)
  const logOut = () => {
    logOutUser()
    if (usuario) {
      setUsuario(false)
      setTabs([])
      setActiveTab({})
    }
  }
  return <button className='btnExitSession' onClick={logOut}><RxExit className='iconBtn' /></button>
}
