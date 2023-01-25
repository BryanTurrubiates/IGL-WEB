import './CSS/LandingSide.css'
import Illustration from '../../../assets/IllustrationLogin.svg'

export function LandingSide () {
  const Hora = new Date()
  const Time = Hora.getHours()
  let Saludo = ''
  Time >= 19 ? Saludo = 'Buenas Noches!' : Time >= 12 ? Saludo = 'Buenas Tardes!' : Saludo = 'Buenos Dias!'

  return (
    <div className='__Container-LandingSide'>
      <div className='__Content-LandingSide'>
        <div className='__Content-LandingSide-Header'>
          <h1 className='__titleHola'>
            Hola!
            <span className='__titleSaludo'>{Saludo}</span>
          </h1>
        </div>
        <div className='__Content-LandingSide-Illustration'>
          <img src={Illustration} />
        </div>
      </div>
    </div>
  )
}
