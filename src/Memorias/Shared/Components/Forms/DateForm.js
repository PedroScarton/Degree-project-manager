import React from 'react';

import Input from '../../../../Shared/Components/FormElements/Input';
import Button from '../../../../Shared/Components/FormElements/Button';

import classes from './DateForm.module.css';

const DateForm = (props) => {
  const submithandler = (e) => {
    e.preventDefault();
    props.onSubmit('Solicitud enviada');
  };
  return (
    <form onSubmit={submithandler}>
      <div className={classes.formContainer}>
        <Input
          label="Fecha propuesta: *"
          type="date"
          helperText="La fecha propuesta debe ser posterior a la fecha agendada."
        />
      </div>
      <Button type="submit">Confirmar fecha</Button>
    </form>
  );
};

export default DateForm;
