import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form.js';
import Wrapper from './Components/Wrapper/Wrapper.js'

const initialBadIngredients = ["DMDM", "DMDM Hydrantoin", "MDM Hydantoin", "Formaldehyde", "BHA", "BHT"];

export class App extends React.Component {
  state = {
    badIngredients: [...initialBadIngredients],
    badIngredientsInProduct: null
  }
  checkIngredients = (list) => {
    let detectedBadIngredients = [];
    for (var i = 0; i < this.state.badIngredients.length; i++) {
      if (list.includes(this.state.badIngredients[i].toUpperCase())) {
        detectedBadIngredients.push(this.state.badIngredients[i]);
      }
    }
    console.log(detectedBadIngredients);
    this.setState(prevState => ({
      badIngredientsInProduct: [...detectedBadIngredients]
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
        <h1>halo halo</h1>
        <Form
          submitForm={this.submitForm}
        />
        { this.state.badIngredientsInProduct ?
          <Wrapper
            ingredients={this.state.badIngredientsInProduct}
          />
          : null
        }
      </div>
    );
  }
}

export default App;
