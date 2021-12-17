import React from 'react';

import { useForm } from '../../../Shared/Hooks/form-hook';
import { VALIDATOR_NUMERIC, VALIDATOR_REQUIRE } from '../../../Shared/Utils/validators';

import Input from '../../../Shared/Components/FormElements/Input';
import Button from '../../../Shared/Components/FormElements/Button';

import classes from './Formulario.module.css';

const Formulario = (props) => {
  const inputs = {
    rut: {
      value: '',
      isValid: false,
    },
  };
  const [formState, inputHandler] = useForm(inputs, false);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(formState.inputs.rut.value);
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
          <Input
            id="rut"
            label="Rut: *"
            type="text"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_NUMERIC()]}
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button type="submit" disabled={!formState.isValid}>
            Verificar
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Formulario;
