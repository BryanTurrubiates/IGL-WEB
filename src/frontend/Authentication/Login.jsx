import { FormLogin } from './Atoms/AuthSide'
import { LandingSide } from './Atoms/LandingSide'
import './CSS/login.css'

export function Login () {
  return (
    <div className='__MainContainer-Login'>
      <div className='__MainContainer-Login-LandingSide'>
        <LandingSide />
      </div>
      <div className='__MainContainer-Login-AuthSide'>
        <FormLogin />
      </div>
    </div>
  )
}
