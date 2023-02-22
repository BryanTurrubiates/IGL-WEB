import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/:topicModule',
    element: <p>Hola es parte del Topico</p>
  }
])
