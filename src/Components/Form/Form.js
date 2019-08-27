import React from 'react';

const Form = ({submitForm}) => (
  <form onSubmit={submitForm}>
    <textarea></textarea>
    <button>Check</button>
  </form>
);

export default Form;
