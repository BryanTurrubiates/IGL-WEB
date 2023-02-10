import { useContext, useEffect, useState } from 'react'
import logoIGL from '../../../assets/IGL_Logo1.svg'
import './styles/navbar.css'
import { SearchBar } from './Atoms/Searchbar'
import { ButtonExit } from './Atoms/ButtonExit'
import { FiMenu } from 'react-icons/fi'
import { TfiClose } from 'react-icons/tfi'
import { GetTopicsModules } from '../../Services/GetModules.js'
import { MdViewModule } from 'react-icons/md'
import { AuthContext } from '../../Context/User/UserContext'
import { ModulesSystem } from '../../Context/ModulesSystem/modulesContext'
import { Link } from 'react-router-dom'

export function Navbar () {
  const [usuario] = useContext(AuthContext)
  const [, setModulesIGL] = useContext(ModulesSystem)
  const [SideBar, setSideBar] = useState(false)
  const [modules, setModules] = useState([{ idModuloI: 0, nombreV: 'Inicial' }])

  useEffect(() => {
    const modulesFetching = GetTopicsModules(usuario.idUsuarioR)
    modulesFetching.then(response => {
      setModules(response)
      setModulesIGL(response)
    })
  }, [])

  const showSidebar = () => {
    setSideBar(!SideBar)
  }

  const TopicsSidebar = modules.filter(module => module.idPadreI === module.idModuloI)

  return (
    <>
      <nav className='__Navbar-Container'>
        <div className='__Navbar-Content'>
          <FiMenu id='__MenuHamburguesa-Icon' onClick={showSidebar} />
          <img src={logoIGL} alt='Logo' className='logoIGL' />
          <div className='__Navbar-Content-Controls'>
            <SearchBar />
            <ButtonExit />
          </div>
        </div>
      </nav>
      <div className={SideBar ? 'sidebar-active' : 'sidebar-menu'}>
        <ul className='__sideBar-items'>
          <li className='__sidebar-toggle'>
            <TfiClose onClick={showSidebar} className='__sidebar-toggle-icon' />
          </li>
          {
            TopicsSidebar.map(module => {
              return (
                <li key={module.idModuloI} className={module.idPadreSubCarpetaI === null ? '__Module-text' : '__Module-textSubFolder'} onClick={showSidebar}>
                  <div className='__module-Content'>
                    <MdViewModule className='__icon-sidebar' />
                    <Link to={module.nombreV} className={module.idPadreSubCarpetaI === null ? 'linksRouters' : 'linksRoutersSubFolder'}>{module.nombreV.toUpperCase()}</Link>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}
