import React from 'react';

import Card from '../../../../Shared/Components/UI/Card';
import Button from '../../../../Shared/Components/FormElements/Button';
import classes from './Fase.module.css';

const Fase = (props) => {
  let state;
  if (props.calificacion) {
    state = 'Finalizada';
  } else if (props.isActive) {
    state = 'En curso';
  } else {
    state = 'Por comenzar';
  }
  return (
    <div className={classes.container}>
      <Card color={state === 'En curso' ? '#EA4700' : '#C0C0C0'}>
        <div className={classes.head}>
          <h3>{props.name}</h3>
          <p
            style={{
              color: state === 'En curso' ? '#EA4700' : 'black',
              fontWeight: state === 'En curso' ? 400 : 300,
            }}
          >
            {state}
          </p>
        </div>
        <div className={classes.body}>
          <div className={classes.detailBody}>
            <span>Inicio: </span>
            <p>
              {props.fecha_de_creacion
                ? new Date(props.fecha_de_creacion).toLocaleDateString('es-CL')
                : '---'}
            </p>
          </div>
          <div className={classes.detailBody}>
            <span>Finalización: </span>
            <p>
              {props.fecha_de_creacion
                ? new Date(
                    props.fecha_de_evaluacion ??
                      +new Date(props.fecha_de_creacion) + 30 * 24 * 60 * 60 * 1000
                  ).toLocaleDateString('es-CL')
                : '---'}
            </p>
          </div>
          <div className={classes.detailBody}>
            <span>Calificación: </span>
            <p>{props.calification ? props.calification : '---'}</p>
          </div>
        </div>
        <div className={classes.footer}>
          <Button
            secondary={state === 'En curso'}
            disabled={!(state === 'En curso' || state === 'Finalizada')}
            onClick={props.action}
          >
            Ver Detalles
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Fase;
