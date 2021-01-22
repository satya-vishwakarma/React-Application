import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const exampleInitialState = {
  success: false,
  error: null
};

const customMiddleWare = (store) => (next) => async (action) => {
  console.log('customMiddleWare');
  return next(action);
};

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(customMiddleWare, thunkMiddleware))
  );
}
