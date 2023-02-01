import './cardModule.css'
import { MdKeyboardArrowUp } from 'react-icons/md'

export function CardModule ({ nombreModulo }) {
  return (
    <div className='__CardModulo-Container'>
      <div className='__CardModulo-Content'>
        <div className='__CardModulo-Icon'>
          <MdKeyboardArrowUp className='iconCard' />
        </div>
        <div className='__CardModulo-Info'>
          <p className='titleModule'>{nombreModulo} <span className='subtitleInfo'>Categoria</span></p>
        </div>
      </div>
    </div>
  )
}
