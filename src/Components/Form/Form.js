import React from 'react';
import Button from '../Button/Button.js';
import styles from './Form.module.scss';

const Form = ({submitForm}) => (
  <form
    className={styles.form}
    onSubmit={submitForm}
  >
    <textarea cols="50" rows="10"></textarea>
    <div className={styles.buttonWrapper}>
      <Button>Check</Button>
    </div>
  </form>
);

export default Form;
