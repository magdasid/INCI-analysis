import React from 'react';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function() {
    return new Date();
  }),
});

export class Yup extends React.Component {
  checkSchema = () => {
    schema.isValid({
      name: 'jimmy',
      age: 24,
      email: 45
    }).then(function(valid) {
      console.log(valid);
    });
  }
  render() {
    return (
        <button onClick={this.checkSchema}>check schema</button>
    );
  }
}

export default Yup;
