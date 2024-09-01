import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import '@telegram-apps/telegram-ui/dist/styles.css'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { SDKProvider } from '@telegram-apps/sdk-react'

const App: React.FC = (): JSX.Element => {
  return (
    <AppRoot>
    <SDKProvider acceptCustomStyles debug>
      <div className='App'>
        <Outlet />
      </div>
    </SDKProvider>
  </AppRoot>
  )
}

export default App
