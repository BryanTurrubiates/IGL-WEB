import LogoIGL from '../../../assets/IGL_Logo1.svg'
import './CSS/AuthSide.css'
import { TfiLock } from 'react-icons/tfi'
import { BiUser } from 'react-icons/bi'
import { MdArrowForwardIos } from 'react-icons/md'
import { AuthUser } from '../../Services/AuthUser.js'
import { AuthContext } from '../../Context/User/UserContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { goTickets, goOldIGL } from '../../Services/redirects.js'

export function FormLogin () {
  const [usuario, setUsuario] = useContext(AuthContext)

  const handleClickLogin = (event) => {
    event.preventDefault()
    const DataInput = event.target
    const passwordV = DataInput.inputPasswordAuth.value
    const UserNameV = DataInput.inputUsuarioAuth.value
    const Auth = AuthUser(UserNameV, passwordV)
    Auth.then(response => {
      if (response === 'Sesion Iniciada') { setUsuario(true) } else {
        setUsuario(false)
        toast('Error de Autenticacion', { duration: 2000, icon: '❌' })
        DataInput.inputPasswordAuth.value = ''
        DataInput.inputUsuarioAuth.value = ''
      }
    })
  }
  if (usuario) { return <Navigate to='/home' /> } else {
    return (
      <div className='__Container-AuthSide'>
        <div className='__Content-AuthSide'>
          <div className='__Content-AuthSide-Logo'>
            <img src={LogoIGL} className='__Content-AuthSide-Logo-img' />
          </div>
          <form className='__Content-AuthSide-Form' onSubmit={handleClickLogin}>
            <section className='__Content-AuthSide-Form-Content'>
              <label className='__Content-AuthSide-Form-Label' name='inputUsuarioAuth'>Usuario</label>
              <div className='__Content-AuthSide-Form-ContainerInput'>
                <BiUser className='icon-Form' />
                <input className='__Content-AuthSide-Form-Input' type='text' id='inputUsuarioAuth' />
              </div>
            </section>
            <section className='__Content-AuthSide-Form-Content'>
              <label className='__Content-AuthSide-Form-Label' name='btnPasswordAuth'>Contraseña</label>
              <div className='__Content-AuthSide-Form-ContainerInput'>
                <TfiLock className='icon-Form' />
                <input className='__Content-AuthSide-Form-Input' type='password' id='inputPasswordAuth' />
              </div>
            </section>
            <button className='__Content-AuthSide-Form-Button'>Iniciar Sesion<MdArrowForwardIos className='arrowIcons' /></button>
            <Toaster />
            <section className='__Content-AuthSIde-Form-Separation'>
              <p className='sectionText'>Tambien puedes ir a</p>
            </section>
            <section className='__Content-AuthSide-Form-Buttons'>
              <button className='__Content-AuthSide-Form-Button-redirect' onClick={goTickets}>Abrir un Ticket<MdArrowForwardIos className='arrowIcons' /></button>
              <button className='__Content-AuthSide-Form-Button-redirect' onClick={goOldIGL}>Version Anterior del Sistema Web<MdArrowForwardIos className='arrowIcons' /></button>
            </section>
          </form>
        </div>
      </div>
    )
  }
}
