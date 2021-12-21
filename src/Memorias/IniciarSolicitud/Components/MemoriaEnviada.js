import React from 'react';

import Card from '../../../Shared/Components/UI/Card';

import classes from './MemoriaEnviada.module.css';

const MemoriaEnviada = (props) => {
  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.body}>
          {props.status === 'PRE_INSCRIPCION' ? (
            <p>Su solicitud ha sido recibida exitosamente, esperando por revisión y aprobación.</p>
          ) : (
            <p>Usted se encuentra realizando una memoria.</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default MemoriaEnviada;
