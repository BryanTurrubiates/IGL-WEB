import { TabsContext } from './TabsContext'
import { useState } from 'react'

export function TabsContextProvider ({ children }) {
  const [tabs, setTabs] = useState([])
  return (
    <TabsContext.Provider value={[tabs, setTabs]}>
      {children}
    </TabsContext.Provider>
  )
}
