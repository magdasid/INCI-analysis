import React from 'react';
import ListItem from './ListItem/ListItem.js';

const Wrapper = ({ingredients}) => (
  ingredients.length === 0 ? (
    <h1>Brak złych składników</h1>
  ) : (
    <>
      <h1>Lista złych składników w produkcie</h1>
      <ul>
        {ingredients.map(item => (
          <ListItem key={item} name={item}/>
        ))}
      </ul>
    </>
  )
);

export default Wrapper;
