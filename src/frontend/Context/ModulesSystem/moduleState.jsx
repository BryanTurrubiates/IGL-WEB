import { ModulesSystem } from './modulesContext'
import { useState } from 'react'

export function ModuleContext ({ children }) {
  const [modulesIGL, setModulesIGL] = useState()
  const [modulesFavorites, setModulesFavorites] = useState(false)
  return (
    <ModulesSystem.Provider value={[modulesIGL, setModulesIGL, modulesFavorites, setModulesFavorites]}>
      {children}
    </ModulesSystem.Provider>
  )
}
