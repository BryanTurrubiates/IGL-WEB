import { ModulesSystem } from './modulesContext'
import { useState } from 'react'

export function ModuleContext ({ children }) {
  const [modulesIGL, setModulesIGL] = useState()
  return (
    <ModulesSystem.Provider value={[modulesIGL, setModulesIGL]}>
      {children}
    </ModulesSystem.Provider>
  )
}
