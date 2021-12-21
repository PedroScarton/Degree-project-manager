import React from 'react';

import EliminarIcon from '../../../Assets/icons/eliminar.svg';
import classes from './Programa.module.css';

const Programa = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h3>{props.code}</h3>
        <div className={classes.buttons}>
          <button onClick={props.onDelete}>
            <img src={EliminarIcon} alt="" />
          </button>
        </div>
      </div>
      {props.fases &&
        props.fases.map((fase) => (
          <div className={classes.bodyDetail} key={fase.id}>
            <span>{fase.tipo}:</span>
            <p>{new Date(fase.fecha).toLocaleDateString('en-US')}</p>
          </div>
        ))}
    </div>
  );
};

export default Programa;
