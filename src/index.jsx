import '@babel/polyfill'
import OfflineRuntime from 'offline-plugin/runtime'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

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

let store = configureStore()

let renderApp = Component =>
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  )

if (__DEV__) {
  const { AppContainer } = require('react-hot-loader') // eslint-disable-line global-require

  renderApp = Component =>
    render(
      <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>,
      document.getElementById('root'),
    )
}

renderApp(App)

if (__DEV__ && module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp(App)
  })
}
