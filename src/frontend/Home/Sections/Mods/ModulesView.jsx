import { MdViewModule } from 'react-icons/md'
import { CardModule } from './singleModule/cardModule'
import { useContext } from 'react'
import { ModulesSystem } from '../../../Context/ModulesSystem/modulesContext'
import './ModulesView.css'

export function ModulesView ({ topicToShow, objectFull }) {
  const [modulesIGL] = useContext(ModulesSystem)
  const ModulesToShow = modulesIGL.filter(module => module.idPadreI === topicToShow && module.idPadreI !== module.idModuloI)
  return (
    <div className='__MainModulesView-Container'>
      <div className='__MainModulesView-Title'>
        <MdViewModule className='iconTitle' />
        <h3>{objectFull.nombreV.toUpperCase()}</h3>
      </div>
      <div className='__MainModulesView-Content'>
        <div className='__MainModulesView-ContainerModules'>
          <div className='__MainModulesView-Content'>
            {
              ModulesToShow.map(module => <CardModule key={module.idModuloI} nombreModulo={module.nombreV} pathModulo={module.urlV} moduleID={module.idModuloI} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
