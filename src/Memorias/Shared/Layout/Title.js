import React from 'react';

import { ReactComponent as BackIcon } from '../../../Assets/icons/arrow_back.svg';

import classes from './Title.module.css';

const InfoMemoria = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.headButton}>
        <button onClick={props.goBack}>
          <BackIcon />
        </button>
      </div>
      <div className={classes.headTitle}>{props.children}</div>
    </div>
  );
};

export default InfoMemoria;
