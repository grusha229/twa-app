import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './store';
import '@telegram-apps/telegram-ui/dist/styles.css';
import Welcome from './views/Welcome/Welcome';

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://grusha229.github.io/favs-telegram/tonconnect-manifest.json';

const basePathname = import.meta.env.BASE_URL

const router = createBrowserRouter([
  {
    path: `${basePathname}`,
    element: <App/>,
    children: [
      {
        path: `${basePathname}`,
        element: <Welcome />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <TonConnectUIProvider manifestUrl={manifestUrl}>
        <Provider store={store}>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </Provider>
    </TonConnectUIProvider>,
)
