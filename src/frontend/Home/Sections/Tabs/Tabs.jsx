import './Tabs.css'
import { useParams } from 'react-router-dom'

export function TabsView () {
  const { topic } = useParams()
  return (
    <div className='__MainTabs-Container'>
      <div className='__MainTabs-Content'>
        <p>{topic}</p>
      </div>
    </div>
  )
}
