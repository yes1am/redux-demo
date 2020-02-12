const bar = (state = { count: 0 }, action = {}) => {
  switch (action.type) {
    case 'ADD_BAR':
      return Object.assign({}, state, {
        count: state.count + action.payload
      })
    default:
      return state
  }
}

export default bar
