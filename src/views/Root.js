import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from '../Components/Form/Form.js';
import List from '../Components/List/List.js';
import Navigation from '../Components/Navigation/Navigation.js';
import CheckProductView from './CheckProductView/CheckProductView.js';
import Yup from './Yup/Yup.js';
import FormView from './FormView/FormView.js';

const initialBadIngredients = ["DMDM", "DMDM Hydrantoin", "MDM Hydantoin", "Formaldehyde", "BHA", "BHT"];

export class Root extends React.Component {
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
      <BrowserRouter>
        <>
          <Navigation />
          <Switch>
            <Route exact path="/" component={CheckProductView}/>
            <Route path="/ingredients" component={Yup}/>
            <Route path="/form" component={FormView}/>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
