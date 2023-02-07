import { TabsView } from '../Tabs/Tabs'
import { PagePreview } from './ModuleToLoad'
import './ModulesLoaded.css'

export function ModuleLoad () {
  return (
    <>
      <TabsView />
      <div className='__MainModuleLoad' id='__ModuleToLoad'>
        <PagePreview />
      </div>
    </>
  )
}
