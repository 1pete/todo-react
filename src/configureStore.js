import { createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from './reducers'

export default function configureStore() {
  let enhancer

  if (__DEV__) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

    enhancer = composeEnhancers(autoRehydrate())
  } else {
    enhancer = compose(autoRehydrate())
  }

  const store = createStore(reducers, enhancer)
  persistStore(store, { keyPrefix: 'todo-react:' })

  if (__DEV__ && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducers))
  }

  return store
}
