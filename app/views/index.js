import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
// import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
// import App from './app'
const logger = createLogger()

// reducer
function rootReducer (state = { count: 0 }, action = {}) {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, {
        count: state.count + action.payload
      })
    default:
      return state
  }
}

// action creator
function add (addNum) {
  return {
    type: 'ADD',
    payload: addNum
  }
}

function addAsyncWithThunk (addNum) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(add(addNum))
    }, 2000)
  }
}

const App = (props) => {
  return <div>
    <div>
    foo count:  {props.count}
    </div>
    <div style={{ cursor: 'pointer' }} onClick={props.onClick}>
    点击 + 1
    </div>
    <div style={{ cursor: 'pointer' }} onClick={() => {
      setTimeout(() => {
        props.onClick()
      }, 2000)
    }}>
    不使用 thunk, 点击异步 + 1
    </div>
    <div style={{ cursor: 'pointer' }} onClick={props.onClickThunk}>
    使用 thunk, 点击异步 + 1
    </div>
  </div>
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(add(1)),
  onClickThunk: () => dispatch(addAsyncWithThunk(1))
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk, logger)
))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)
