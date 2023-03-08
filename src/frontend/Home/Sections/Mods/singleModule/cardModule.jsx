import { MdKeyboardArrowUp } from 'react-icons/md'
import { TabsContext } from '../../../../Context/TabsContext/TabsContext'
import { useContext } from 'react'
import { ModulePreview } from '../../Views/ModulePreview'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { GetFavorites } from '../../../../Services/GetModules'
import { AuthContext } from '../../../../Context/User/UserContext'
import './cardModule.css'

export function CardModule ({ nombreModulo, pathModulo, moduleID, favorite }) {
  const [usuario] = useContext(AuthContext)
  const [tabs, setTabs,, setActiveTab] = useContext(TabsContext)
  const { idUsuarioR } = usuario
  const pathModule = `http://192.168.80.220:8080${pathModulo}`
  let moduleFavorite = false

  const handleClickModule = () => {
    if (!tabs) {
      setTabs({ label: nombreModulo, children: <ModulePreview URLModule={pathModule} />, key: moduleID })
      setActiveTab(moduleID)
    }
    const exists = tabs.find(element => element.label === nombreModulo)
    if (exists === undefined) {
      setTabs([...tabs, { label: nombreModulo, children: <ModulePreview URLModule={pathModule} />, key: moduleID }])
      setActiveTab(moduleID)
    } else {
      setActiveTab(moduleID)
    }
  }

  const handleClickFavorite = () => {
    GetFavorites(idUsuarioR)
      .then(response => {
        const favorite = response.find(moduleToSearch => moduleToSearch.nombreV === nombreModulo)
        if (favorite !== undefined) {
          moduleFavorite = true
          console.log(moduleFavorite)
        } else {
          moduleFavorite = false
          console.log(moduleFavorite)
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
