import { TabsView } from './Tabs/Tabs'
import { ModulesView } from './Mods/Mods'
import { useParams } from 'react-router-dom'
import { ModulesSystem } from '../../Context/ModulesSystem/modulesContext'
import { useContext } from 'react'
import './Sections.css'

export function Modules () {
  const { topic } = useParams()
  const [modulesIGL] = useContext(ModulesSystem)
  const Section = modulesIGL.find(element => element.nombreV === topic)
  const { idModuloI } = Section
  return (
    <div className='__MainBody-Container'>
      <TabsView />
      <ModulesView topicToShow={idModuloI} />
    </div>
  )
}
