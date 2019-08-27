import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form.js';
import Wrapper from './Components/Wrapper/Wrapper.js'

const initialBadIngredients = ["DMDM", "DMDM Hydrantoin", "MDM Hydantoin", "Formaldehyde", "BHA", "BHT"];

export class App extends React.Component {
  state = {
    badIngredients: [...initialBadIngredients],
    badIngredientsInProduct: []
  }
  checkIngredients = (list) => {
    let array = [];
    for (var i = 0; i < this.state.badIngredients.length; i++) {
      if (list.includes(this.state.badIngredients[i])) {
        array.push(this.state.badIngredients[i]);
      }
    }
    for (var j = 0; j < array.length; j++) {
      console.log(array[j]);
    }
    this.setState(prevState => ({
      badIngredientsInProduct: [...array]
    }));
  }
  submitForm = (e) => {
    e.preventDefault();
    let input = e.target[0].value;
    let ingredients = input.toUpperCase().split(',').map(item => item.trim());
    this.checkIngredients(ingredients);
  }
  render() {
    return (
      <div>
        <Form
          submitForm={this.submitForm}
        />
        <Wrapper
          ingredients={this.state.badIngredientsInProduct}
        />
      </div>
    );
  }
}

export default App;
