import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Card from '../../../../Shared/Components/UI/Card';
import Button from '../../../../Shared/Components/FormElements/Button';
import classes from './Fase.module.css';

const Fase = (props) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className={classes.container}>
      <Card color={props.state === 'en curso' ? '#EA4700' : 'C0C0C0'}>
        <div className={classes.head}>
          <h3>{props.name}</h3>
          <p
            style={{
              color: props.state === 'en curso' ? '#EA4700' : 'black',
              fontWeight: props.state === 'en curso' ? 400 : 300,
            }}
          >
            {props.state}
          </p>
        </div>
        <div className={classes.body}>
          <div className={classes.detailBody}>
            <span>Inicio: </span>
            <p>{props.initDate ? new Date(props.initDate).toLocaleDateString('en-US') : '---'}</p>
          </div>
          <div className={classes.detailBody}>
            <span>Finalización: </span>
            <p>{props.testDate ? new Date(props.testDate).toLocaleDateString('en-US') : '---'}</p>
          </div>
          <div className={classes.detailBody}>
            <span>Calificación: </span>
            <p>{props.calification ? props.calification : '---'}</p>
          </div>
        </div>
        <div className={classes.footer}>
          <Button
            secondary={props.state === 'en curso'}
            disabled={!(props.state === 'en curso' || props.state === 'Finalizada')}
            component={Link}
            to={{
              pathname: `${pathname}/evaluaciones/${props.id}`,
              state: { isActive: props.state === 'en curso' },
            }}
          >
            Ver Detalles
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Fase;
