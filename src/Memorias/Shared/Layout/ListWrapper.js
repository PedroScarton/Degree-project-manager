import React from 'react';

import classes from './ListWrapper.module.css';

const ListWrapper = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>{props.title}</h1>
      </div>
      <div className={classes.list}>{props.children}</div>
    </div>
  );
};

export default ListWrapper;
