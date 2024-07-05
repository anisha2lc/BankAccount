import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './container/App.jsx'
import './assets/scss/index.scss'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import ThemeProvider from './components/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider>
          <App />
          </ThemeProvider>
      </PersistGate>
 </Provider>
  </React.StrictMode>,
)
