import { MdKeyboardArrowUp } from 'react-icons/md'
import { TabsContext } from '../../../../Context/TabsContext/TabsContext'
import { useContext } from 'react'
import { ModulePreview } from '../../Views/ModulePreview'
import './cardModule.css'

export function CardModule ({ nombreModulo, pathModulo, moduleID }) {
  const [tabs, setTabs, activeTab, setActiveTab] = useContext(TabsContext)
  const pathModule = `http://192.168.80.220:8080${pathModulo}`
  const handleClickModule = () => {
    if (!tabs) {
      setTabs({ label: nombreModulo, children: <ModulePreview URLModule={pathModule} />, key: moduleID })
      setActiveTab(moduleID)
    }
    const exists = tabs.find(element => element.label === nombreModulo)
    if (exists === undefined) {
      setTabs([...tabs, { label: nombreModulo, children: <ModulePreview URLModule={pathModule} />, key: moduleID }])
      setActiveTab(moduleID)
    } else {
      setActiveTab(moduleID)
    }
  }
  return (
    <div className='__CardModulo-Container' onClick={handleClickModule}>
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
