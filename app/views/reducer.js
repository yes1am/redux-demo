const initialState = {
  userInfo: {
    name: 'default',
    age: 'default'
  },
  color: 'green'
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      console.log(action)
      return {
        ...state,
        userInfo: { ...action.payload }
      }
    case 'CHANGE_YOU_COLOR':
      return {
        ...state,
        color: action.payload
      }
    case 'FETCH_USER_INFO':
      console.log('reducer')
      return state
    default:
      return state
  }
}

export default reducer
