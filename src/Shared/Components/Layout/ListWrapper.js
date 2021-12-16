import React from 'react';

import classes from './ListWrapper.module.css';

const ListWrapper = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>{props.title}</div>
      <div className={classes.list}>{/* AQUI VA LA LISTA DE CARTAS */}</div>
    </div>
  );
};

export default ListWrapper;
