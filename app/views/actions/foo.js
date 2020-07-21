export function addFoo (addNum) {
  return {
    type: 'ADD_FOO',
    payload: addNum
  }
}

export function addFooAsyncWithThunk (addNum) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(addFoo(addNum))
    }, 2000)
  }
}
