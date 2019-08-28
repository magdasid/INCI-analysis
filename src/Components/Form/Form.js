import React from 'react';
import Button from '../Button/Button.js';

const Form = ({submitForm}) => (
  <form onSubmit={submitForm}>
    <textarea></textarea>
    <Button>Check</Button>
  </form>
);

export default Form;
