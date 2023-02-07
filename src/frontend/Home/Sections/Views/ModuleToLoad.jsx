import { useContext } from 'react'
import { TabsContext } from '../../../Context/TabsContext/TabsContext'
import { AuthContext } from '../../../Context/User/UserContext'
import { Navigate, useParams } from 'react-router-dom'

export function PagePreview () {
  const { module } = useParams()
  const [Tabs] = useContext(TabsContext)
  const [usuario] = useContext(AuthContext)
  let pathModule
  const pathToShow = Tabs.find(nameTab => nameTab.nombreTab === module)
  if (pathToShow !== undefined && pathModule === undefined) {
    const { urlModulo } = pathToShow
    pathModule = `http://192.168.80.220:8080/${urlModulo}`
  } else {
    return (
      <Navigate to={`/home/${usuario.lastTopic}`} />
    )
  }
  return (
    <object type='text/html' data={pathModule} className='divLoader' />
  )
}
