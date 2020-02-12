import React from 'react'

export default function Bar (props) {
  return <div>
    <div>
      bar count:  {props.count}
    </div>
    <div style={{ cursor: 'pointer' }} onClick={props.onClick}>
      click + 2
    </div>
  </div>
}
