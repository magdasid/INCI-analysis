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
  state = {
    validForm: ''
  }
  checkSchema = (e) => {
    e.preventDefault();

    schema.isValid({
      name: e.target[0].value,
      age: e.target[1].value,
      email: e.target[2].value
    }).then((valid) => {
      if (valid) {
        this.setState({
          validForm: 'ok'
        });
      } else {
        this.setState({
          validForm: 'zle'
        });
      }
    });
  }
  render() {
    return (
      <>
        <form onSubmit={this.checkSchema}>
          <input placeholder="name" type="text" name="name" />
          <input placeholder="age" type="text" name="age" />
          <input placeholder="email" type="text" name="email" />
          <button type="submit">
            Submit
          </button>
        </form>
        <p>{this.state.validForm}</p>
      </>
    );
  }
}

export default Yup;
