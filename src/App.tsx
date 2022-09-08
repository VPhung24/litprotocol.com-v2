import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { renderPublicRoutes } from 'src/routing'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return renderPublicRoutes()
}

export default App
