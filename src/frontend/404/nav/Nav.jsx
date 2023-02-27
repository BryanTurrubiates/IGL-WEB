import IGL from '../../../assets/IGL_Logo1.svg'
import './Nav.css'

export function Nav () {
  return (
    <div className='Nav_Container'>
      <div className='Nav_Content'>
        <img src={IGL} className='IGL_Logo' />
      </div>
    </div>
  )
}
