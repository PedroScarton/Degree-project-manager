import React from 'react';

import { ReactComponent as TouchIcon } from '../../../Assets/icons/touch.svg';

import classes from './Fallback.module.css';

const Fallback = () => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.svgContainer}>
        <TouchIcon />
      </div>
      <p className={classes.p}>Seleccione una memoria.</p>
    </div>
  </div>
);

export default Fallback;
