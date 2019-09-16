import React from 'react'
import classes from './BuildControls.module.css'

const controls = [
  { label: 'Lettuce', type: 'lettuce'},
  { label: 'Tomato', type: 'tomato'},
  { label: 'Meat', type: 'meat'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Bacon', type: 'bacon'},
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>

  </div>
)

export default buildControls