import React, { useContext, useEffect } from 'react'
import { Tabs } from 'antd'
import { ModulesSystem } from '../../../Context/ModulesSystem/modulesContext'
import { TabsContext } from '../../../Context/TabsContext/TabsContext'
import { useParams } from 'react-router-dom'
import { ModulesView } from '../Mods/ModulesView'
import '../Sections.css'
import '../Mods/singleModule/cardModule.css'

export function TabsModules () {
  const { topic } = useParams()
  const [modulesIGL] = useContext(ModulesSystem)
  const [tabs, setTabs, activeTab, setActiveTab] = useContext(TabsContext)
  const currentTopic = modulesIGL.find(topicSearch => topicSearch.nombreV === topic)
  const initialValues = [{ label: topic, children: <ModulesView topicToShow={currentTopic.idModuloI} objectFull={currentTopic} />, key: currentTopic.idModuloI, closable: false }]

  useEffect(() => {
    if (tabs.length === 0) {
      setTabs(initialValues)
      setActiveTab(currentTopic.idModuloI)
    } else {
      const tabsToUpdate = tabs
      tabsToUpdate[0].label = topic
      tabsToUpdate[0].children = <ModulesView topicToShow={currentTopic.idModuloI} objectFull={currentTopic} />
      tabsToUpdate[0].key = currentTopic.idModuloI
      setTabs(tabsToUpdate)
      setActiveTab(tabsToUpdate[0].key)
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

  return (
    <Tabs type='editable-card' onEdit={onEdit} onChange={onChange} activeKey={activeTab} items={tabs} />
  )
}
