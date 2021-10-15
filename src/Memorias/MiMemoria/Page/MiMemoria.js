import React from 'react';

import InProcess from '../Components/InProcess';
import Informative from '../Components/Informative';
import classes from './MiMemoria.module.css';

const MiMemoria = () => {
  const requestState = true;

  let element;
  if (requestState) {
    element = <InProcess />;
  } else {
    element = <Informative />;
  }

  return <div className={classes.container}>{element}</div>;
};

export default MiMemoria;
