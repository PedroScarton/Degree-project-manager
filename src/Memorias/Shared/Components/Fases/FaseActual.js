import React, { useContext, useState } from 'react';

import Card from '../../../../Shared/Components/UI/Card';
import Button from '../../../../Shared/Components/FormElements/Button';
import FormModal from '../../../../Shared/Components/Layout/FormModal';

import classes from './FaseActual.module.css';
import DateForm from '../Forms/DateForm';

import { roles, actual as RoleActual } from '../../../../Shared/Constants/roles';

const FaseActual = (props) => {
  // Se obtiene el contexto para ver el rol
  // const auth = useContext()
  const actual = props.fases.filter((fase) => fase.state === 'en curso');

  // debo saber si la persona que esta viendo ya envio una evaluacion
  // 

  return (
    <React.Fragment>
      <div className={classes.container}>
        {actual.length === 1 && (
          <Card color="#EA4700">
            <div className={classes.cardHead}>
              <h3>Fase actual</h3>
              <h3>{actual[0].name}</h3>
            </div>
            <div className={classes.cardFoot}>
              <div className={classes.footInfo}>
                <div className={classes.infoDetail}>
                  <span>Fecha de inicio :</span>
                  <p>{new Date(actual[0].initDate).toLocaleDateString('en-US')}</p>
                </div>
                <div className={classes.infoDetail}>
                  <span>Fecha de evaluación :</span>
                  <p>{new Date(actual[0].testDate).toLocaleDateString('en-US')}</p>
                </div>
              </div>
              <div className={classes.footButton}>
                <div className={classes.btnContainer}>
                  <Button onClick={props.openForm} secondary>
                    Enviar evaluación
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </React.Fragment>
  );
};

export default FaseActual;
