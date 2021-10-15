import React from 'react';

import Input from '../../../Shared/Components/FormElements/Input';
import Button from '../../../Shared/Components/FormElements/Button';

import classes from './EditPlanForm.module.css';

const EditPlanForm = (props) => {
  const submithandler = (e) => {
    e.preventDefault();
    props.onSubmit('Solicitud enviada');
  };
  return (
    <form onSubmit={submithandler}>
      <div className={classes.formContainer}>
        <Input
          label="Nombre: *"
          placeHolder="Diurno..."
          helperText="Nombre del programa al que se le asignarán las fases."
        />
        <Input
          label="Código del programa: *"
          helperText="Código que se le asignará a una memoria para determinar sus fase."
        />
      </div>
      <Button type="submit">{props.edit ? 'Confirmar cambio' : 'Agregar programa'}</Button>
    </form>
  );
};

export default EditPlanForm;
