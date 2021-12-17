import React from 'react';

import { ReactComponent as ErrorIcon } from '../../../Assets/icons/error.svg';

import classes from './ErrorChip.module.css';

const ErrorChip = (props) => {
  return (
    <div className={classes.ErrorChip}>
      <div className={classes.ErrorChip__textContainer}>
        <span className={classes.ErrorChip__header}>Error:</span>
        <p className={classes.ErrorChip__text}>{props.text}</p>
      </div>
      <div>
        <ErrorIcon fill="#D3131C" />
      </div>
    </div>
  );
};

export default ErrorChip;
