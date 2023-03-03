import '../styles/searchbar.css'
import { AutoComplete } from 'antd'
import { useContext } from 'react'
import { ModulesSystem } from '../../../Context/ModulesSystem/modulesContext'
import { TabsContext } from '../../../Context/TabsContext/TabsContext'
import { ModulePreview } from '../../Sections/Views/ModulePreview'

export function SearchBar () {
  const [modulesIGL] = useContext(ModulesSystem)
  const [tabs, setTabs,, setActiveTab] = useContext(TabsContext)

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
    const existInTab = tabs.find(tabToSearch => tabToSearch.key === moduleToAdd.idModuloI)
    if (existInTab === undefined) {
      newTab = [{ label: moduleToAdd.nombreV, children: <ModulePreview URLModule={moduleToAdd.urlV} />, key: moduleToAdd.idModuloI }]
      const prevTabs = tabs
      const newTabsToShow = [...prevTabs, ...newTab]
      setTabs(newTabsToShow)
      setActiveTab(moduleToAdd.idModuloI)
    } else {
      setActiveTab(moduleToAdd.idModuloI)
    }
  }
  return (
    <AutoComplete className='searchBar' options={modulesToShow} onSelect={onSelect} placeholder='Buscar un modulo' filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1} />
  )
}
