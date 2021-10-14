import React from 'react';

import Output from '../../../../Shared/Components/FormElements/Output';

import classes from './Integrante.module.css';

const Integrante = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>
          {props.teacher ? (props.guia ? 'Guía' : 'Informante') : 'Integrante'}{' '}
          {props.index && `°${props.index}`}
        </h3>
      </div>
      <div className={classes.info}>
        {props.rut && <Output title="Rut" detail={props.rut} />}
        {props.nombre && <Output title="Nombre" detail={props.nombre} />}
        {props.correo && <Output title="Correo" detail={props.correo} />}
      </div>
    </div>
  );
};

export default Integrante;
