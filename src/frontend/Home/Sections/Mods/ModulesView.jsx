import { MdViewModule } from 'react-icons/md'
import { CardModule } from './singleModule/cardModule'
import { useContext, useEffect, useState } from 'react'
import { ModulesSystem } from '../../../Context/ModulesSystem/modulesContext'
import { AuthContext } from '../../../Context/User/UserContext'
import { GetFavorites } from '../../../Services/GetModules'
import './ModulesView.css'

export function ModulesView ({ topicToShow, objectFull }) {
  const [modulesIGL] = useContext(ModulesSystem)
  const [usuario] = useContext(AuthContext)
  const [modulesFavorites, setModulesFavorites] = useState([{ nombreV: 'Hola' }])
  const ModulesToShow = modulesIGL.filter(module => module.idPadreI === topicToShow && module.idPadreI !== module.idModuloI)
  const { idUsuarioR } = usuario

  useEffect(() => {
    GetFavorites(idUsuarioR)
      .then(response => setModulesFavorites(response))
  }, [])
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
              ModulesToShow.map(module => <CardModule key={module.idModuloI} nombreModulo={module.nombreV} pathModulo={module.urlV} moduleID={module.idModuloI} favorite={modulesFavorites.some(moduleSearching => moduleSearching.nombreV === module.nombreV)} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
