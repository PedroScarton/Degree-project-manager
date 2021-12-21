import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={classes.container} style={{ border: `2px solid ${props.color}` }}>
      {props.children}
    </div>
  );
};

export default Card;
