import React, { useContext, useEffect } from 'react'
import { Tabs } from 'antd'
import { ModulesSystem } from '../../../Context/ModulesSystem/modulesContext'
import { TabsContext } from '../../../Context/TabsContext/TabsContext'
import { AuthContext } from '../../../Context/User/UserContext'
import { Navigate, useParams } from 'react-router-dom'
import { ModulesView } from '../Mods/ModulesView'
import { Dashboard } from '../../Dashboard/Dashboard'
import '../Sections.css'
import '../Mods/singleModule/cardModule.css'

export function TabsModules () {
  const initialValues = [{ label: 'Inicio', children: <Dashboard />, key: 'InicioUser', closable: false }]
  const { topic } = useParams()
  const pathMODE = import.meta.env.VITE_URL
  const [usuario] = useContext(AuthContext)
  const [tabs, setTabs, activeTab, setActiveTab] = useContext(TabsContext)
  const [modulesIGL] = useContext(ModulesSystem)

  useEffect(() => {
    if (tabs.length === 0) {
      setTabs(initialValues)
      setActiveTab('InicioUser')
    } else {
      const currentTopic = modulesIGL.find(topicToSearch => topicToSearch.nombreV === topic)
      const existInTabs = tabs.find(tabToSearch => tabToSearch.key === currentTopic.idModuloI)
      if (existInTabs === undefined) {
        const topicToAdd = [{ label: currentTopic.nombreV, children: <ModulesView topicToShow={currentTopic.idModuloI} objectFull={currentTopic} />, key: currentTopic.idModuloI }]
        setTabs([...tabs, ...topicToAdd])
        setActiveTab(currentTopic.idModuloI)
      } else {
        setActiveTab(currentTopic.idModuloI)
      }
    }
  }, [topic])

  const onChange = (newActiveKey) => {
    setActiveTab(newActiveKey)
  }

  const remove = (targetKey) => {
    const currentItem = tabs.findIndex(itemTab => itemTab.key === targetKey)
    const lastModule = tabs[currentItem - 1]
    const newtabsUpdated = tabs.filter((item) => item.key !== targetKey)
    setTabs(newtabsUpdated)
    setActiveTab(lastModule.key)
  }

  const onEdit = (targetKey, action) => {
    if (action === 'remove') {
      remove(targetKey)
    }
  }

  if (!usuario) { return <Navigate to={`${pathMODE}/IGL-WEB/login`} /> } else {
    return <Tabs type='editable-card' onEdit={onEdit} onChange={onChange} activeKey={activeTab} items={tabs} />
  }
}
