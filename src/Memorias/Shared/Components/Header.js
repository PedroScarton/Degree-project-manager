import React from 'react';

import classes from './Header.module.css';

const SectionHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>{props.title}</h4>
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default SectionHeader;
