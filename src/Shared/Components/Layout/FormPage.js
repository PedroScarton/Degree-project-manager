import React from 'react';

// Formularios
import EvaluationForm from '../Forms/EvaluationForm';
import ObservationForm from '../Forms/ObservationForm';

// General components
import Card from '../UI/Card';

// Go back Icon
import { ReactComponent as BackIcon } from '../../../Assets/icons/arrow_back.svg';

// Styles
import classes from './FormPage.module.css';

const FormPage = (props) => {
  // esta pagina debe ser completamente dinamica en su contenido
  // deberan estar definidos tantos componentes como formularios existan dentro de la pagina
  // este componente se encargara de contener el formulario, echar para atras, y hacer el submit con la informacion al servidor
  let form;
  let header;
  switch (props.type) {
    case 'evaluación':
      form = <EvaluationForm />;
      header = 'Formulario de evaluación';
      break;
    case 'observación':
      form = <ObservationForm />;
      header = 'Formulario de observación';
      break;
    default:
      form = <EvaluationForm />;
      header = 'Formulario de evaluación';
      break;
  }
  return (
    <Card>
      <div className={classes.header}>
        <div className={classes.backButtonContainer}>
          <button onClick={props.goBack}>
            <BackIcon />
          </button>
        </div>
        <h2>{header}</h2>
      </div>
      {form}
    </Card>
  );
};

export default FormPage;
