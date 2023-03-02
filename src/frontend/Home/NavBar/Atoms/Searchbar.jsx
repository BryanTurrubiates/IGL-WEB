import '../styles/searchbar.css'
import { AutoComplete } from 'antd'
import { useContext } from 'react'
import { ModulesSystem } from '../../../Context/ModulesSystem/modulesContext'
import { TabsContext } from '../../../Context/TabsContext/TabsContext'
import { ModulesView } from '../../Sections/Mods/ModulesView'
import { useNavigate } from 'react-router-dom'

export function SearchBar () {
  const [modulesIGL] = useContext(ModulesSystem)
  const [tabs, setTabs] = useContext(TabsContext)
  const [, setActiveTab] = useContext(TabsContext)
  const pathMODE = import.meta.env.VITE_URL
  const navigate = useNavigate()
  let newTab
  const modulesToShow = []
  if (modulesIGL !== undefined) {
    const modulesContext = modulesIGL
    modulesContext.forEach(module => {
      if (module.idPadreI !== module.idModuloI) {
        modulesToShow.push({ value: module.nombreV })
      }
    })
  }
  const onSelect = (value) => {
    const moduleToAdd = modulesIGL.find(module => module.nombreV === value)
    const topicToAdd = modulesIGL.find(topic => topic.idModuloI === moduleToAdd.idPadreI)
    console.log(topicToAdd.nombreV)
    if (tabs.length === 0) {
      const topicToAddData = [{ label: topicToAdd.nombreV, children: <ModulesView topicToShow={topicToAdd.idModuloI} objectFull={topicToAdd} />, key: topicToAdd.idModuloI }]
      newTab = [{ label: moduleToAdd.nombreV, children: <ModulesView topicToShow={moduleToAdd.idModuloI} objectFull={moduleToAdd} />, key: moduleToAdd.idModuloI }]
      const newTabsToShow = [...topicToAddData, ...newTab]
      console.log(newTabsToShow)
      setTabs(newTabsToShow)
      setActiveTab(moduleToAdd.idModuloI)
      navigate(`${pathMODE}/IGL-WEB/home/${topicToAdd.nombreV}`)
    } else {
      newTab = [{ label: moduleToAdd.nombreV, children: <ModulesView topicToShow={moduleToAdd.idModuloI} objectFull={moduleToAdd} />, key: moduleToAdd.idModuloI }]
      console.log(tabs)
    }
  }
  return (
    <AutoComplete className='searchBar' options={modulesToShow} onSelect={onSelect} placeholder='Buscar un modulo' filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1} />
  )
}
