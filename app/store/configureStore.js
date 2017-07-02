import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


export default function configureStore(initialState) {
  const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk),
    );
  window.store = store;
  return store;
}

// Later to configure for prod too.
// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./configureStore.prod');
// } else {
//   module.exports = require('./configureStore.dev');
// }
