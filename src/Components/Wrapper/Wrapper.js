import React from 'react';
import ListItem from './ListItem/ListItem.js';

const Wrapper = ({ingredients}) => (
  <>
    <h1>Lista złych składników w produkcie</h1>
    <ul>
      {ingredients.map(item => (
        <ListItem key={item} name={item}/>
      ))}
    </ul>
  </>

);

export default Wrapper;
