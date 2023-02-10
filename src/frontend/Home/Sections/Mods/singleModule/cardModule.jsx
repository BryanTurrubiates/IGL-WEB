import './cardModule.css'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import { TabsContext } from '../../../../Context/TabsContext/TabsContext'
import { useContext } from 'react'

export function CardModule ({ nombreModulo, pathModulo }) {
  const [tabs, setTabs] = useContext(TabsContext)
  const { topic } = useParams()
  const pathMODE = import.meta.env.VITE_URL

  const handleClickModule = (event) => {
    event.preventDefault()
    if (!tabs) { setTabs({ nombreTab: nombreModulo, path: `${pathMODE}/IGL-WEB/home/${topic}/${nombreModulo}`, urlModulo: pathModulo }) }
    const exists = tabs.find(element => element.nombreTab === nombreModulo)
    if (exists === undefined) {
      setTabs([...tabs, { nombreTab: nombreModulo, path: `${pathMODE}/IGL-WEB/home/${topic}/${nombreModulo}`, urlModulo: pathModulo }])
    }
  }
  return (
    <Link to={nombreModulo} className='__CardModulo-Container' onClick={handleClickModule}>
      <div className='__CardModulo-Content'>
        <div className='__CardModulo-Icon'>
          <MdKeyboardArrowUp className='iconCard' />
        </div>
        <div className='__CardModulo-Info'>
          <p className='titleModule'>{nombreModulo} <span className='subtitleInfo'>Categoria</span></p>
        </div>
      </div>
    </Link>
  )
}
