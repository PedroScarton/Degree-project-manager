import React from 'react';

import Input from '../../../Shared/Components/FormElements/Input';
import Button from '../../../Shared/Components/FormElements/Button';

import classes from './Formulario.module.css';

const Formulario = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit('rut');
  };
  return (
    <React.Fragment>
      <div>
        <h1 className={classes.title}>Verificación de practica</h1>
        <p className={classes.description}>
          Este formulario permite verificar el estado de las practicas operacional y profesional de
          un estudiante por medio de rut.
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.inputContainer}>
          <Input label="Rut: *" placeholder="11.222.333-4" />
        </div>
        <div className={classes.buttonContainer}>
          <Button>Verificar</Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Formulario;
