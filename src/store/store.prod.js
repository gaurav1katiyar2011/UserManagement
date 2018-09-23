import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from '../reducers/'
const store = preloadedState => {
  const configStore = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
  return configStore
}
export default store;
