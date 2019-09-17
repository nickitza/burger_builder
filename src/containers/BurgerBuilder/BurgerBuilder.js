import React from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  cheese: 0.5,
  meat: 2.0,
  bacon: 1.0,
  tomato: .2,
  lettuce: .2
}

class BurgerBuilder extends React.Component{
  state = {
    ingredients: {
      tomato: 0,
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false
  }
  updatePurchaseState (ingredients) {
    let ingredientsArray = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((ingredientsArray, el) => {
        return ingredientsArray + el
      }, 0)
      this.setState({purchaseable: ingredientsArray > 0})
  }

  addIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type]
    if (oldCount <= 0){
      return
    }
    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  }

  render(){
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return(
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled = {disabledInfo}
          price = {this.state.totalPrice}
          purchaseable = {this.state.purchaseable}
          /> 
      </Aux>
    )
  }
}

export default BurgerBuilder