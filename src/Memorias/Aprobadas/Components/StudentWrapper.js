import React from 'react';

import classes from './StudentWrapper.module.css';

const StudentWrapper = (props) => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <h1>{props.title}</h1>
      </div>
      <div className={[classes.gridContainer, ...(props.classes ? props.classes : '')]}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default StudentWrapper;
