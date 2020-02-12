import React from 'react'

export default function Foo (props) {
  return <div>
    <div>
      foo count:  {props.count}
    </div>
    <div style={{ cursor: 'pointer' }} onClick={props.onClick}>
      click + 1
    </div>
  </div>
}
