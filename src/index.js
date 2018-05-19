import '@babel/polyfill'
import OfflineRuntime from 'offline-plugin/runtime'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './components/App'
import configureStore from './configureStore'

OfflineRuntime.install({
  onUpdateReady: () => {
    OfflineRuntime.applyUpdate()
  },
  onUpdated: () => {
    window.location.reload()
  },
})

const { store, persistor } = configureStore()

let renderApp = Component => render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Component />
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
