import { useContext } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { TabsContext } from '../../../../Context/TabsContext/TabsContext'
import { ModulesSystem } from '../../../../Context/ModulesSystem/modulesContext'
import { ModulePreview } from '../../Views/ModulePreview'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { GetFavorites } from '../../../../Services/GetModules'
import { AuthContext } from '../../../../Context/User/UserContext'
import { addFavoriteModule, addRecentModule } from '../../../../Services/addModule'
import './cardModule.css'

export function CardModule ({ nombreModulo, pathModulo, moduleID, favorite }) {
  const [usuario] = useContext(AuthContext)
  const [,, modulesFavorite, setModulesFavorites] = useContext(ModulesSystem)
  const [tabs, setTabs,, setActiveTab] = useContext(TabsContext)
  const { idUsuarioR } = usuario
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
      GetFavorites(idUsuarioR)
        .then(favoritesModulesIGL => {
          const existInFavorites = favoritesModulesIGL.some(favoritesModulesIGL => favoritesModulesIGL.idModulo === moduleID)
          if (existInFavorites === false) {
            addRecentModule(idUsuarioR, moduleID)
            setModulesFavorites(!modulesFavorite)
          }
        })
    } else {
      setActiveTab(moduleID)
    }
  }

  const handleClickFavorite = () => {
    GetFavorites(idUsuarioR)
      .then(response => {
        const favorite = response.find(moduleToSearch => moduleToSearch.nombreV === nombreModulo)
        if (favorite !== undefined) {
          setModulesFavorites(!modulesFavorite)
          addFavoriteModule(idUsuarioR, moduleID, nombreModulo, pathModule, 'DELETE')
        } else {
          setModulesFavorites(!modulesFavorite)
          addFavoriteModule(idUsuarioR, moduleID, nombreModulo, pathModule, 'ADD')
        }
      })
  }

  if (favorite) {
    return (
      <div className='__CardModulo-Container'>
        <div className='__CardModulo-Content'>
          <div className='__CardModulo-LeftSide' onClick={handleClickModule}>
            <div className='__CardModulo-Icon'>
              <MdKeyboardArrowUp className='iconCard' />
            </div>
            <div className='__CardModulo-Info'>
              <p className='titleModule'>{nombreModulo} <span className='subtitleInfo'>Categoria</span></p>
            </div>
          </div>
        </div>
        <div className='__CardModuleFavorite'>
          <AiFillStar className='icon-toAddFav selected-icon' onClick={handleClickFavorite} key={nombreModulo} />
        </div>
      </div>
    )
  } else {
    return (
      <div className='__CardModulo-Container'>
        <div className='__CardModulo-Content'>
          <div className='__CardModulo-LeftSide' onClick={handleClickModule}>
            <div className='__CardModulo-Icon'>
              <MdKeyboardArrowUp className='iconCard' />
            </div>
            <div className='__CardModulo-Info'>
              <p className='titleModule'>{nombreModulo} <span className='subtitleInfo'>Categoria</span></p>
            </div>
          </div>
        </div>
        <div className='__CardModuleFavorite'>
          <AiOutlineStar className='icon-toAddFav' onClick={handleClickFavorite} key={nombreModulo} />
        </div>
      </div>
    )
  }
}
