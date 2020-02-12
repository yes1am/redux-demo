const foo = (state = { count: 0 }, action = {}) => {
  switch (action.type) {
    case 'ADD_FOO':
      return Object.assign({}, state, {
        count: state.count + action.payload
      })
    default:
      return state
  }
}

export default foo
