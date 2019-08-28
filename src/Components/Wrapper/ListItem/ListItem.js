import React from 'react';
import styles from './ListItem.module.scss';

const ListItem = ({name}) => (
  <li className={styles.listItem}>{name}</li>
);

export default ListItem;
