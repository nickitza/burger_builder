import React from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends React.Component{
  state = {
    ingredients: {
      lettuce: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }
  render(){
    return(
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder