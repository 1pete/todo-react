import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import { writeStore } from './utils';

export default function configureStore() {
  const storeSave = store => next => (action) => {
    const result = next(action);
    if (action.type !== 'STORE_LOADED') {
      writeStore(store.getState().items);
    }
    return result;
  };

  const middleware = [thunk, storeSave];

  let enhancer;

  if (__DEV__) {
    let devToolsExtension = f => f;
     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

    enhancer = composeEnhancers(
      applyMiddleware(...middleware),
      devToolsExtension,
    );
  } else {
    enhancer = applyMiddleware(...middleware);
  }

  const store = createStore(reducers, enhancer);

  if (__DEV__ && module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default), // eslint-disable-line global-require
    );
  }

  return store;
}
