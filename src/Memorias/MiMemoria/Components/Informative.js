import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../Shared/Components/FormElements/Button';
import Card from '../../../Shared/Components/UI/Card';
import classes from './Informative.module.css';

const Informative = () => {
  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.body}>
          <h1>(o^^)o</h1>
          <p>
            Aún no se ha registrado el inicio o la aprobación de tu memoria. Por favor, completa el{' '}
            <Link className={classes.link} to="/memorias/solicitud">
              formulario de solicitud
            </Link>
            , si ya lo completaste y enviaste exitosamente, espera a que un coordinador gestione tu
            solicitud.
          </p>
          <div className={classes.Button}>
            <Button to="/memorias/solicitud">Ir a inicio de solicitud</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Informative;
