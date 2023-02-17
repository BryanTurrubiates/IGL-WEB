import { useContext, useEffect, useRef } from 'react'
import { TabsContext } from '../../../Context/TabsContext/TabsContext'
import { AuthContext } from '../../../Context/User/UserContext'
import { Navigate, useParams } from 'react-router-dom'

export function PagePreview () {
  const divToLoadModule = useRef(null)
  const pathMODE = import.meta.env.VITE_URL
  const { module } = useParams()
  const [Tabs, setTabs] = useContext(TabsContext)
  const [usuario] = useContext(AuthContext)
  console.log(Tabs)
  let pathModule
  const pathToShow = Tabs.find(nameTab => nameTab.nombreTab === module)
  const currentTab = Tabs.find(nameTab => nameTab.nombreTab === module)
  if (pathToShow !== undefined && pathModule === undefined) {
    const { urlModulo } = pathToShow
    pathModule = `http://192.168.80.220:8080${urlModulo}`
  } else {
    return (
      <Navigate to={`${pathMODE}/IGL-WEB/home/${usuario.lastTopic}`} />
    )
  }

  useEffect(() => {
    module === currentTab.nombreTab ? currentTab.active = true : currentTab.active = false
    const changeActive = Tabs.filter(tabNow => tabNow.nombreTab !== currentTab.nombreTab)
    changeActive.forEach(tab => {
      tab.active = false
    })
    changeActive.push(currentTab)
    setTabs(changeActive)
  }, [module])

  return (
    <div className='divLoader' id='moduleLoaded' ref={divToLoadModule} />
  )
}
