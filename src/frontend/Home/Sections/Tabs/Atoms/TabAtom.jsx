import './TabAtom.css'
import { RxCross2 } from 'react-icons/rx'
import { MdViewModule } from 'react-icons/md'
import { useContext } from 'react'
import { TabsContext } from '../../../../Context/TabsContext/TabsContext'
import { Link } from 'react-router-dom'

export function TabTopic ({ TabName }) {
  return (
    <Link to={`/home/${TabName}`} className='__Tab-NameActive'><span className='IconTab'><MdViewModule /></span> {TabName}</Link>
  )
}

export function TabModule ({ TabName }) {
  const [tabs, setTabs] = useContext(TabsContext)
  const TabToGo = tabs.find(tab => tab.nombreTab === TabName)
  const handleClickClose = (event) => {
    const tabToClose = event.target.id
    const tabsUpdated = tabs.filter(moduleTab => moduleTab.nombreTab !== tabToClose)
    setTabs(tabsUpdated)
  }
  return (
    <Link to={TabToGo.path} className='__Tab-NameModule'>{TabName}<span><RxCross2 className='iconClose' onClick={handleClickClose} key={TabName} id={TabName} /> </span></Link>
  )
}
