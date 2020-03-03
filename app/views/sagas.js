import { put, takeEvery, all, delay, select } from 'redux-saga/effects'

// Worker Saga: 工作 Saga 用于执行异步任务
export function * fetchUserInfo (action) {
  const data = yield select()
  console.log('data', data)

  const { type, payload } = action
  yield delay(1000) // 模拟异步请求
  const userInfoArr = [
    {
      name: 'user1',
      age: 'age1'
    },
    {
      name: 'user2',
      age: 'age2'
    }
  ]
  // 在这里调用 reducer
  yield put({ type: 'SET_USER_INFO', payload: userInfoArr[payload] })
}

// Watcher Saga: 监听器 saga，用于监听 action
export function * userInfo () {
  // 监听 type 为 INCREMENT_ASYNC 的 action
  yield takeEvery('FETCH_USER_INFO', fetchUserInfo)
  // 可以监听多个 saga
}

export default function * rootSaga () {
  yield all([
    userInfo()
  ])
}
