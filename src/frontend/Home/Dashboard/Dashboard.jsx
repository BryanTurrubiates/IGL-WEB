import './Dashboard.css'
import { AiOutlineStar } from 'react-icons/ai'
import { BsArrowRepeat } from 'react-icons/bs'
import { CardModule } from '../Sections/Mods/singleModule/cardModule'
import { RiCodeView } from 'react-icons/ri'
import { goTickets } from '../../Services/redirects'
import { Switch } from 'antd'
import { useState, useContext, useEffect } from 'react'
import { GetFavorites, GetRecent } from '../../Services/GetModules'
import { GetInfoUser } from '../../Services/AuthUser'
import { AuthContext } from '../../Context/User/UserContext'
import { ModulesSystem } from '../../Context/ModulesSystem/modulesContext'

export function Dashboard () {
  const [usuario] = useContext(AuthContext)
  const [IGLmodules,, modulesFavorites] = useContext(ModulesSystem)
  const [usuarioIGL, setUsuarioIGL] = useState([{ idUsuario: 1, NombreV: 'Sistemas', ApPatV: 'DEV', OficinaV: 'NLD', DescripV: 'SISTEMAS' }])
  const [modulesFav, setModulesFav] = useState(false)
  const [modulosRecientes, setModulosRecientes] = useState([])
  const [modulesToShowRecent, setModulesToShowRecent] = useState([])
  const { idUsuarioR } = usuario

  let modulesFavToShow = modulesFav
  let modulesRecentToShow = []
  if (!modulesFavToShow) {
    modulesFavToShow = [{ label: 'Hola' }]
  }

  useEffect(() => {
    console.log(modulesFavorites)
    GetFavorites(idUsuarioR)
      .then(module => setModulesFav(module))
    GetRecent(idUsuarioR)
      .then(module => setModulosRecientes(module))
    if (idUsuarioR !== 1) {
      GetInfoUser(idUsuarioR)
        .then(userData => setUsuarioIGL(userData))
    }
  }, [modulesFavorites])

  useEffect(() => {
    if (modulosRecientes.length !== 0) {
      const modulo1 = [IGLmodules.find(moduleSearch => moduleSearch.idModuloI === modulosRecientes[0].idModulo1)]
      const modulo2 = [IGLmodules.find(moduleSearch => moduleSearch.idModuloI === modulosRecientes[0].idModulo2)]
      const modulo3 = [IGLmodules.find(moduleSearch => moduleSearch.idModuloI === modulosRecientes[0].idModulo3)]
      const modulo4 = [IGLmodules.find(moduleSearch => moduleSearch.idModuloI === modulosRecientes[0].idModulo4)]
      modulesRecentToShow = [...modulo1, ...modulo2, ...modulo3, ...modulo4]
      setModulesToShowRecent(modulesRecentToShow)
    }
  }, [modulosRecientes])

  const onChange = (checked) => {
    console.log(`switch to ${checked}`)
  }
  return (
    <div className='dashboard-Container'>
      <div className='dashboard-Content'>
        <div className='user-Container'>
          <div className='user-Content'>
            <div className='topSection'>
              <div className='departamento-Container'>
                <p className='departamento-title'>{`${usuarioIGL[0].OficinaV}`}</p>
              </div>
              <div className='avatar-Container'>
                <div className='user-Circle' />
                <img src='https://miro.medium.com/fit/c/176/176/2*-cdwKPXyVI0ejgxpWkKBeA.jpeg' className='imgAvatar' />
              </div>
              <div className='infoUser-Container'>
                <p className='bienvenida-title'>Bienvenido,</p>
                <p className='nameUser-title'>{`${usuarioIGL[0].NombreV} ${usuarioIGL[0].ApPatV}`}</p>
              </div>
              <div className='departamento-Container'>
                <RiCodeView className='iconDepartamento' />
                <p className='departamento-title'>{usuarioIGL[0].DescripV}</p>
              </div>
            </div>
            <div className='bottomSection'>
              <Switch defaultChecked onChange={onChange} />
              <button className='btnTicket' onClick={goTickets}>Abrir un ticket</button>
            </div>
          </div>
        </div>
        <section className='dashboardModules-Container'>
          <div className='dashboardModules-Content'>
            <div className='favoritos-Container'>
              <div className='favoritos-Content'>
                <div className='favoritos-Fav section'>
                  <div className='favoritos-title title'>
                    <AiOutlineStar className='iconLeft' />
                    <h3 className='favoritos-title'>Favoritos</h3>
                  </div>
                </div>
                <div className='gridModules-fav'>
                  {
                    modulesFavToShow.map(module => <CardModule nombreModulo={module.nombreV} moduleID={module.idModulo} pathModulo={module.urlV} key={`moduleToShow${module.nombreV}`} favorite />)
                  }
                </div>
              </div>
            </div>
            <div className='recientes-Container'>
              <div className='recientes-Content'>
                <div className='recientes-Fav section'>
                  <div className='recientes-title title'>
                    <BsArrowRepeat className='iconLeft' />
                    <h3 className='recientes-title'>Recientes</h3>
                  </div>
                </div>
                <div className='gridModules-recent'>
                  {
                    modulesToShowRecent.map(module => <CardModule nombreModulo={module.nombreV} moduleID={module.idModuloI} pathModulo={module.urlV} key={`moduleRecent${module.nombreV}`} />)
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
