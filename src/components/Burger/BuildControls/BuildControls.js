import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Lettuce', type: 'lettuce'},
  { label: 'Tomato', type: 'tomato'},
  { label: 'Meat', type: 'meat'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Bacon', type: 'bacon'},
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Prices: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map((control) => {
      return <BuildControl 
              key={control.label} 
              label={control.label}
              add={() => props.addIngredient(control.type)}
              remove={() => props.removeIngredient(control.type)}
              disabled={props.disabled[control.type]}
              />
    })}
  </div>
)

export default buildControls