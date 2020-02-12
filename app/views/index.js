import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import App from './app'
const logger = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(logger)
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
