/* eslint-disable import/no-import-module-exports */

import { createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import reducers from './reducers'

export default function configureStore() {
  let enhancer

  if (__DEV__) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

    enhancer = composeEnhancers()
  } else {
    enhancer = compose()
  }

  const persistConfig = {
    key: 'todo-react',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducers)

  const store = createStore(persistedReducer, enhancer)
  const persistor = persistStore(store)

  if (__DEV__ && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducers))
  }

  return { store, persistor }
}
