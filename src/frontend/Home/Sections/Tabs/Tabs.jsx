import './Tabs.css'
import { useParams } from 'react-router-dom'
import { TabTopic, TabModule } from './Atoms/TabAtom'
import { TabsContext } from '../../../Context/TabsContext/TabsContext'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../../Context/User/UserContext'

export function TabsView () {
  const { topic, module } = useParams()
  const [tabs] = useContext(TabsContext)
  const [usuario, setUsuario] = useContext(AuthContext)

  useEffect(() => {
    if (module === undefined && topic !== usuario.lastTopic) {
      const usuarioData = { ...usuario, lastTopic: topic }
      setUsuario(usuarioData)
    }
  }, [topic])

  if (tabs != null) {
    return (
      <div className='__MainTabs-Container'>
        <div className='__MainTabs-Content'>
          <TabTopic TabName={!usuario.lastTopic ? 'Inicio' : usuario.lastTopic} />
          {
            tabs.map((tabModulo) => <TabModule key={tabModulo.nombreTab} TabName={tabModulo.nombreTab} />)
          }
        </div>
      </div>
    )
  }
}
