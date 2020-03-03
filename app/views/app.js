import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

function user (props) {
  const { userInfo, color } = props
  return <div>
    <div style={{ color: color }}>
      name: {userInfo.name}
    </div>
    <div>
      age: {userInfo.age}
    </div>
    <Button type='primary' onClick={() => props.dispatch({
      type: 'FETCH_USER_INFO',
      payload: '0'
    })}>
      有请第一位用户
    </Button>
    <Button
      style={{ marginLeft: 20 }}
      type='primary'
      onClick={() => props.dispatch({
        type: 'FETCH_USER_INFO',
        payload: '1'
      })}>
      有请第二位用户
    </Button>
    <Button
      style={{ marginLeft: 20 }}
      type='primary'
      onClick={() => props.dispatch({
        type: 'CHANGE_YOU_COLOR',
        payload: color === 'red' ? 'green' : 'red'
      })}>
      给你点颜色看看
    </Button>
  </div>
}

const User = connect((state) => state)(user)

export default function App () {
  return <div>
    <User />
  </div>
}
