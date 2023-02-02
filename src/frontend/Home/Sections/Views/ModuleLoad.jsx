import { useParams } from 'react-router-dom'
import { TabsView } from '../Tabs/Tabs'

export function ModuleLoad () {
  const { module } = useParams()
  return (
    <>
      <TabsView />
      <p>Cargar modulo {module}</p>
    </>
  )
}
