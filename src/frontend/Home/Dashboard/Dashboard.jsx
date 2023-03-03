import './Dashboard.css'
import { AiOutlineStar } from 'react-icons/ai'
import { BsArrowRepeat } from 'react-icons/bs'
import { CardModule } from '../Sections/Mods/singleModule/cardModule'
import { RiCodeView } from 'react-icons/ri'
import { goTickets } from '../../Services/redirects'
import { Switch } from 'antd'

export function Dashboard () {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`)
  }
  return (
    <div className='dashboard-Container'>
      <div className='dashboard-Content'>
        <div className='user-Container'>
          <div className='user-Content'>
            <div className='topSection'>
              <div className='avatar-Container'>
                <div className='user-Circle' />
                <img src='https://miro.medium.com/fit/c/176/176/2*-cdwKPXyVI0ejgxpWkKBeA.jpeg' className='imgAvatar' />
              </div>
              <div className='infoUser-Container'>
                <p className='bienvenida-title'>Bienvenido,</p>
                <p className='nameUser-title'>Bryan Turrubiates</p>
              </div>
              <div className='departamento-Container'>
                <RiCodeView className='iconDepartamento' />
                <p className='departamento-title'>SISTEMAS</p>
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
                  <CardModule />
                  <CardModule />
                  <CardModule />
                  <CardModule />
                  <CardModule />
                  <CardModule />
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
                  <CardModule />
                  <CardModule />
                  <CardModule />
                  <CardModule />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
