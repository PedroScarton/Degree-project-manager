import React from 'react';

// Hooks
import { useHttpClient } from '../../Hooks/http-hook';

// Formularios
import EvaluationForm from '../Forms/EvaluationForm';
import FinalEvaluationForm from '../Forms/FinalEvaluationForm';
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

  // hooks
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const submitDocument = (values) => {
    console.log(values);
  };

  let form;
  let header;
  switch (props.type) {
    case 'evaluación':
      form = <EvaluationForm submitHandler={submitDocument} />;
      header = 'Formulario de evaluación';
      break;
    case 'observación':
      form = <ObservationForm submitHandler={submitDocument} />;
      header = 'Formulario de observación';
      break;
    case 'evaluación-final':
      form = <FinalEvaluationForm submitHandler={submitDocument} />;
      header = 'Formulario de evaluación';
      break;
    default:
      form = <EvaluationForm submitHandler={submitDocument} />;
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
