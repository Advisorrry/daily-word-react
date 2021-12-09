import React from 'react'
import { AppRouter } from './components/AppRouter'
import { useMobileAlert } from './hooks/useMobileAlert'

import './styles/index.scss'

const App: React.FC<{}> = () => {
  const mobileAlert = useMobileAlert()
  return (
    <>
      <AppRouter />
      {mobileAlert}
    </>
  )
}

export default App
