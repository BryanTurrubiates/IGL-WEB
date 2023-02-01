import { useParams } from 'react-router-dom'
import { MdViewModule } from 'react-icons/md'
import { CardModule } from './singleModule/cardModule'
import { useContext } from 'react'
import { ModulesSystem } from '../../../Context/ModulesSystem/modulesContext'
import './Modules.css'

export function ModulesView ({ topicToShow }) {
  const { topic } = useParams()
  const [modulesIGL] = useContext(ModulesSystem)
  const ModulesToShow = modulesIGL.filter(module => module.idPadreI === topicToShow)
  return (
    <div className='__MainModulesView-Container'>
      <div className='__MainModulesView-Content'>
        <div className='__MainModulesView-Title'>
          <MdViewModule className='iconTitle' />
          <h3>{topic.toUpperCase()}</h3>
        </div>
        <div className='__MainModulesView-ContainerModules'>
          {
            ModulesToShow.map(module => <CardModule key={module.idModuloI} nombreModulo={module.nombreV} />)
          }
        </div>
      </div>
    </div>
  )
}
