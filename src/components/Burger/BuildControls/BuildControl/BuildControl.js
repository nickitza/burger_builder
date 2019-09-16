import React from 'react'
import './BuildControl.module.css'
import classes from './BuildControl.module.css'

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.More}>More</button>
    <button className={classes.Less}>Less</button>
  </div>
)

export default buildControl