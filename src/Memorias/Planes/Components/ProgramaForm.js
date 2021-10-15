import React from 'react';

import Input from '../../../Shared/Components/FormElements/Input';
import Button from '../../../Shared/Components/FormElements/Button';

import classes from './ProgramaForm.module.css';

const ProgramaForm = (props) => {
  const submithandler = (e) => {
    e.preventDefault();
    props.onSubmit('Programa agregado');
  };
  return (
    <form onSubmit={submithandler}>
      <div className={classes.formContainer}>
        <Input label="Código programa semestral: *" />
        <Input label="PT1: *" type="date" />
        <Input label="PT2: *" type="date" />
        <Input label="Defensa: *" type="date" />
      </div>
      <Button type="submit">{props.edit ? 'Confirmar cambio' : 'Agregar programa'}</Button>
    </form>
  );
};

export default ProgramaForm;
