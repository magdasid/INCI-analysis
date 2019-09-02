import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.menu}>
    <ul className={styles.menu__items}>
      <li className={styles.menu__items}><Link to="/">Check Product</Link></li>
      <li className={styles.menu__items}><Link to="/ingredients">Yup</Link></li>
      <li className={styles.menu__items}><Link to="/form">Formik</Link></li>
    </ul>
  </nav>
);

export default Navigation;
