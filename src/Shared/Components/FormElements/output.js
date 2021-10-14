import React from 'react';

import downloadFileIcon from '../../../Assets/icons/descargarArchivo.svg';
import Button from './Button';

import classes from './Output.module.css';

const Output = (props) => {
  if (props.file) {
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <p>{props.title}</p>
        </div>
        <div className={classes.detail}>
          <p>Descargar Archivo</p>
          <button>
            <img src={downloadFileIcon} alt="" />
          </button>
        </div>
      </div>
    );
  } else if (props.action) {
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <p>{props.title}</p>
        </div>
        <div className={classes.detail}>
          <p>{props.detail}</p>
        </div>
        <div className={classes.Button}>
          <Button onClick={props.onCallAction}>{props.action}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p>{props.title}</p>
      </div>
      <div className={classes.detail}>
        <p>{props.detail}</p>
      </div>
    </div>
  );
};

export default Output;
