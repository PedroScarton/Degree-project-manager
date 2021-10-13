import React from 'react';

import classes from './CardHeader.module.css';

const CardHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>{props.title}</h1>
      </div>
      {props.details && (
        <div className={classes.subTitle}>
          {props.details.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardHeader;
