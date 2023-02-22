import { TabsContext } from './TabsContext'
import { useState } from 'react'

export function TabsContextProvider ({ children }) {
  const [tabs, setTabs] = useState([])
  const [activeTab, setActiveTab] = useState([])
  return (
    <TabsContext.Provider value={[tabs, setTabs, activeTab, setActiveTab]}>
      {children}
    </TabsContext.Provider>
  )
}
