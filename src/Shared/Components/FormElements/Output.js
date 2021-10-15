import React from 'react';

import downloadFileIcon from '../../../Assets/icons/descargarArchivo.svg';
import Button from './Button';

import classes from './Output.module.css';

const Output = (props) => {
  const downLoadFileHandler = () => {
    console.log('downloaded');
  };
  if (props.file) {
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <p>{props.title}</p>
        </div>
        <div className={classes.detail}>
          {props.archive ? (
            <React.Fragment>
              <p>Descargar archivo</p>
              <button onClick={downLoadFileHandler}>
                <img src={downloadFileIcon} alt="" />
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p>Archivo no disponible</p>
            </React.Fragment>
          )}
        </div>
        {props.action && (
          <div className={classes.Button}>
            <Button secondary onClick={props.onCallAction}>
              {props.action}
            </Button>
          </div>
        )}
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
