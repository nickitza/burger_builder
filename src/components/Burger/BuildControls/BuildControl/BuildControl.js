import React from 'react'
import './BuildControl.module.css'

const buildControl = (props) => (
  <div>
    <div>{props.label}</div>
    <button>More</button>
    <button>Less</button>
  </div>
)

export default buildControl