import './cardModule.css'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import { TabsContext } from '../../../../Context/TabsContext/TabsContext'
import { useContext } from 'react'

export function CardModule ({ nombreModulo }) {
  const [tabs, setTabs] = useContext(TabsContext)
  const { topic } = useParams()

  const handleClickModulue = (event) => {
    event.preventDefault()
    if (!tabs) { setTabs({ nombreTab: nombreModulo, path: `/home/${topic}/${nombreModulo}` }) }
    const exists = tabs.find(element => element.nombreTab === nombreModulo)
    if (exists === undefined) {
      setTabs([...tabs, { nombreTab: nombreModulo, path: `/home/${topic}/${nombreModulo}` }])
    }
  }
  return (
    <Link to={nombreModulo} className='__CardModulo-Container' onClick={handleClickModulue}>
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
