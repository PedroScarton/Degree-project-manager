import React from 'react';

import { useForm } from '../../../Shared/Hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../../Shared/Utils/validators';

import Input from '../../../Shared/Components/FormElements/Input';
import Button from '../../../Shared/Components/FormElements/Button';

import classes from './DateForm.module.css';

const TeacherForm = (props) => {
  const inputs = {
    fecha: { value: '', isValid: false },
  };
  const [formState, inputHandler] = useForm(inputs, false);

  const submithandler = (e) => {
    e.preventDefault();
    props.onSubmit(formState.inputs.fecha.value);
  };
  return (
    <form onSubmit={submithandler}>
      <Input
        id="fecha"
        type="date"
        label="Nueva fecha:"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
      />
      <div className={classes.btnContainer}>
        <Button type="submit" disabled={!formState.isValid}>
          Modificar
        </Button>
      </div>
    </form>
  );
};

export default TeacherForm;
