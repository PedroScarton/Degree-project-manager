import React from 'react';

import Button from '../../../Shared/Components/FormElements/Button';

import { ReactComponent as SuccessIcon } from '../../../Assets/icons/exito.svg';
import { ReactComponent as ErrorIcon } from '../../../Assets/icons/error.svg';

import classes from './Resultado.module.css';

const Item = (props) => (
  <div className={classes.itemContainer}>
    <h4 className={classes.itemHeader}>{props.title}</h4>
    {props.success ? (
      <div className={classes.highLight}>
        <SuccessIcon fill="#00BC13" />
        <p style={{ color: '#00BC13' }}>Completada</p>
      </div>
    ) : (
      <div className={classes.highLight}>
        <ErrorIcon fill="#E70000" />
        <p style={{ color: '#E70000' }}>Sin completada</p>
      </div>
    )}
  </div>
);

const Resultado = (props) => {
  const goBackHandler = () => {
    props.onGoBack();
  };
  return (
    <React.Fragment>
      <div className={classes.header}>
        <p>
          <span>Rut: </span>
          {props.rut}
        </p>
        <p className={classes.headerItem}>
          <span>Nombre: </span>
          {props.name}
        </p>
        <p className={classes.headerItem}>
          <span>Correo institucional: </span>
          {props.email}
        </p>
      </div>
      <div className={classes.infoContainer}>
        <Item title="Practica operacional" success={props.operacional} />
        <Item title="Practica profesional" success={props.profesional} />
      </div>
      <div>
        <span style={{ color: props.operacional && props.profesional ? '#00BC13' : '#E70000' }}>
          Este estudiante {props.operacional && props.profesional ? '' : 'no'} está habilitado para
          iniciar una memoria
        </span>
      </div>
      <div className={classes.footer}>
        <Button onClick={goBackHandler}>Verificar otro alumno</Button>
      </div>
    </React.Fragment>
  );
};

export default Resultado;
