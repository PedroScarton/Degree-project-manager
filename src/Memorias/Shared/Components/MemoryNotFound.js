import React from 'react';

import classes from './MemoryNotFound.module.css';

const MemoryNotFound = () => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <p className={classes.p}>No se ha encontrado la memoria seleccionada.</p>
    </div>
  </div>
);

export default MemoryNotFound;
