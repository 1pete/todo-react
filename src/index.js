import OfflineRuntime from 'offline-plugin/runtime'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import App from './components/App'
import configureStore from './configureStore'
import { readStore } from './utils'

OfflineRuntime.install({
  onUpdateReady: () => {
    OfflineRuntime.applyUpdate()
  },
})

let store = configureStore()

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
)

store.dispatch({ type: 'STORE_LOADED', items: readStore() })

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const UpdatedApp = require('./components/App').default // eslint-disable-line
    render(
      <AppContainer>
        <Provider store={store}>
          <UpdatedApp />
        </Provider>
      </AppContainer>,
      document.getElementById('root'),
    )
  })
}
