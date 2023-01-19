import { useState } from 'react'
import logoIGL from '../../../assets/IGL_Logo.png'
import './styles/navbar.css'
import { SearchBar } from './Atoms/Searchbar'
import { ButtonExit } from './Atoms/ButtonExit'
import { FiMenu } from 'react-icons/fi'
import { TfiClose } from 'react-icons/tfi'
import { sideBarData } from '../../Services/Modules.js'

export function Navbar () {
  const [SideBar, setSideBar] = useState(false)

  const showSidebar = () => setSideBar(!SideBar)

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
          {sideBarData.map((item, index) => {
            return (
              <li key={index} className={item.className} onClick={showSidebar}>
                <a>{item.icon}</a>
                <span>{item.nombre}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
