import React from 'react';
import ListItem from './ListItem/ListItem.js';
import Title from '../Title/Title.js';

const List = ({ingredients}) => (
  <>
  { ingredients.length === 0 ? (
    <Title>Brak złych składników</Title>
  ) : (
    <>
      <Title>Lista złych składników w produkcie</Title>
      <ul>
        {ingredients.map(item => (
          <ListItem key={item} name={item}/>
        ))}
      </ul>
    </>
    )
  }
  </>
);

export default List;
