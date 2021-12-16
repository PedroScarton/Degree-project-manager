import React from 'react';

import classes from './Grid.module.css';

const Grid = (props) => (
  <div className={[classes.gridContainer, ...(props.classes ? props.classes : '')]}>
    {props.children}
  </div>
);

export default Grid;
