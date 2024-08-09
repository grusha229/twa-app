import './App.css'
import { Outlet } from 'react-router-dom';
import '@telegram-apps/telegram-ui/dist/styles.css';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { retrieveLaunchParams, SDKProvider } from '@tma.js/sdk-react';

import WebApp from '@twa-dev/sdk'
import { useDispatch, useSelector } from 'react-redux';
import { setInitDataRaw } from './store/features/authSlice';
import { useEffect } from 'react';
import { RootState } from './store';

function App() {

  const dispatch = useDispatch();
  const storedInitDataRaw = useSelector((state: RootState) => state.authentication.initDataRaw)

  useEffect(() => {
    const { initDataRaw } = retrieveLaunchParams();
    dispatch(setInitDataRaw(initDataRaw));
  }, [dispatch]);

  if (storedInitDataRaw) {
    WebApp.showPopup({
      title: 'Оп',
      message: storedInitDataRaw,
    })
  }

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
