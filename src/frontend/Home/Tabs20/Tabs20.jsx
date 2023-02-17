import React, { useRef, useState, useContext, useEffect } from 'react'
import { Tabs } from 'antd'
import { ModulesSystem } from '../../Context/ModulesSystem/modulesContext'
import { useParams } from 'react-router-dom'
import { MdViewModule, MdKeyboardArrowUp } from 'react-icons/md'
import '../Sections/Mods/Modules.css'
import '../Sections/Mods/singleModule/cardModule.css'

export function TabsModules () {
  const [modulesIGL] = useContext(ModulesSystem)
  const { topic } = useParams()
  const currentTopic = modulesIGL.find(topicSearch => topicSearch.nombreV === topic)
  const initialValues = [{ label: topic, children: <ModulesView topicToShow={currentTopic.idModuloI} />, key: currentTopic.idModuloI, closable: false }]
  const [items, setItems] = useState(initialValues)
  const [modules, setModules] = useState(null)
  const [activeKey, setActiveKey] = useState(items[0].key)
  const newTabIndex = useRef(0)

  function CardModule ({ moduloID, nombreModulo, pathModulo }) {
    const handleClickModule = () => {
      console.log(items)
      const newTabs = items
      newTabs.push({ label: nombreModulo, children: 'Hola', key: moduloID })
      setItems(newTabs)
      if (!modules) {
        setModules([{ label: nombreModulo, children: 'Hola', key: moduloID }])
      } else {
        const newModule = [{ label: nombreModulo, children: 'Hola', key: moduloID }]
        const prevModules = [...modules]
        setModules([...newModule, ...prevModules])
        console.log(items)
      }
      const newActiveTab = moduloID
      setActiveKey(newActiveTab)
    }
    return (
      <div className='__CardModulo-Container' onClick={handleClickModule}>
        <div className='__CardModulo-Content'>
          <div className='__CardModulo-Icon'>
            <MdKeyboardArrowUp className='iconCard' />
          </div>
          <div className='__CardModulo-Info'>
            <p className='titleModule'>{nombreModulo} <span className='subtitleInfo'>Categoria</span></p>
          </div>
        </div>
      </div>
    )
  }

  function ModulesView ({ topicToShow }) {
    const { topic } = useParams()
    const [modulesIGL] = useContext(ModulesSystem)
    const ModulesToShow = modulesIGL.filter(module => module.idPadreI === topicToShow && module.idPadreI !== module.idModuloI)
    return (
      <div className='__MainModulesView-Container'>
        <div className='__MainModulesView-Content'>
          <div className='__MainModulesView-Title'>
            <MdViewModule className='iconTitle' />
            <h3>{topic.toUpperCase()}</h3>
          </div>
          <div className='__MainModulesView-ContainerModules'>
            {
              ModulesToShow.map(module => <CardModule key={module.idModuloI} moduloID={module.idModuloI} nombreModulo={module.nombreV} pathModulo={module.urlV} />)
            }
          </div>
        </div>
      </div>
    )
  }

  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey)
  }

  function add () {
    const newActiveKey = `newTab${newTabIndex.current++}`
    const newPanes = [...items]
    newPanes.push({
      label: 'New Tab',
      children: 'Content of new Tab',
      key: newActiveKey
    })
    setItems(newPanes)
    setActiveKey(newActiveKey)
  }

  const remove = (targetKey) => {
    const currentItem = items.findIndex(itemTab => itemTab.key === targetKey)
    const lastModule = items[currentItem - 1]
    const newItems = items.filter((item) => item.key !== targetKey)
    setItems(newItems)
    setActiveKey(lastModule.key)
  }

  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add()
    } else {
      remove(targetKey)
    }
  }

  useEffect(() => {
    let lastTopic = [...items]
    const newTopic = modulesIGL.find(topicSearch => topicSearch.nombreV === topic)
    const itemsContent = items.length
    if (itemsContent === 1) {
      setItems([{ label: topic, children: <ModulesView topicToShow={newTopic.idModuloI} />, key: newTopic.idModuloI, closable: false }])
      setActiveKey(newTopic.idModuloI)
    } else {
      lastTopic = lastTopic.filter(tabCurrent => tabCurrent.key !== items[0].key)
      const newTopicTab = [{ label: topic, children: <ModulesView topicToShow={newTopic.idModuloI} />, key: newTopic.idModuloI, closable: false }]
      setItems([...newTopicTab, ...lastTopic])
      setActiveKey(newTopicTab[0].key)
    }
  }, [topic])

  return (
    <Tabs type='editable-card' onEdit={onEdit} onChange={onChange} activeKey={activeKey} items={items} />
  )
}
