/* eslint-disable import/no-import-module-exports */

import 'regenerator-runtime/runtime'
import OfflineRuntime from '@lcdp/offline-plugin/runtime'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

import App from './components/App'
import configureStore from './configureStore'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
})

OfflineRuntime.install({
  onUpdateReady: () => {
    OfflineRuntime.applyUpdate()
  },
  onUpdated: () => {
    window.location.reload()
  },
})

const { store, persistor } = configureStore()

let renderApp = (Component) =>
  render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <Component />
        </MuiThemeProvider>
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
  )

renderApp(App)

if (__DEV__ && module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp(App)
  })
}
