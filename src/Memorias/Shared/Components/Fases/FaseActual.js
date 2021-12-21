import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../../Shared/Context/auth-context';

import Card from '../../../../Shared/Components/UI/Card';
import Button from '../../../../Shared/Components/FormElements/Button';

import classes from './FaseActual.module.css';

const FaseActual = (props) => {
  const [hasSent, setHasSent] = useState(false);
  // Se obtiene el contexto para ver el rol
  const auth = useContext(AuthContext);
  const actual = props.fases.find((fase) => fase.tipo === props.actual);

  const { users } = props;

  // debo saber si la persona que esta viendo ya envio una evaluacion
  useEffect(() => {
    const actualUser = users.find((user) => user.usuario.id === auth.id);
  });

  return (
    <React.Fragment>
      <div className={classes.container}>
        {actual && (
          <Card color="#EA4700">
            <div className={classes.cardHead}>
              <h3>Fase actual</h3>
              <h3>{actual.tipo}</h3>
            </div>
            <div className={classes.cardFoot}>
              <div className={classes.footInfo}>
                <div className={classes.infoDetail}>
                  <span>Fecha de inicio :</span>
                  <p>{new Date(actual.fecha_de_creacion).toLocaleDateString('es-CL')}</p>
                </div>
                <div className={classes.infoDetail}>
                  <span>Fecha de evaluación :</span>
                  <p>
                    {new Date(
                      actual.fecha_de_evaluacion ??
                        +new Date(actual.fecha_de_creacion) + 30 * 24 * 60 * 60 * 1000
                    ).toLocaleDateString('es-CL')}
                  </p>
                </div>
              </div>
              <div className={classes.footButton}>
                <div className={classes.btnContainer}>
                  {props.student &&
                    (auth.role === 'COORDINADOR' ? (
                      <Button
                        onClick={props.nextFase}
                        secondary
                        disabled={
                          +new Date(actual.fecha_de_creacion) + 30 * 24 * 60 * 60 * 1000 >
                          +new Date()
                        }
                      >
                        Cambiar fase
                      </Button>
                    ) : (
                      <Button
                        onClick={props.goTo}
                        secondary
                        disabled={
                          +new Date(actual.fecha_de_creacion) + 30 * 24 * 60 * 60 * 1000 <
                          +new Date()
                        }
                      >
                        Enviar evaluación
                      </Button>
                    ))}
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
