import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default function configureStore() {
  const middleware = [thunk]

  let enhancer

  if (__DEV__) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

    enhancer = composeEnhancers(
      autoRehydrate(),
      applyMiddleware(...middleware),
    )
  } else {
    enhancer = compose(autoRehydrate(), applyMiddleware(...middleware))
  }

  const store = createStore(reducers, enhancer)
  persistStore(store, { keyPrefix: 'todo-react:' })

  if (__DEV__ && module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default), // eslint-disable-line global-require
    )
  }

  return store
}
