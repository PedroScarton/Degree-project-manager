import React from 'react';

import Input from '../../../Shared/Components/FormElements/Input';
import Button from '../../../Shared/Components/FormElements/Button';

import classes from './TeacherForm.module.css';

const TeacherForm = (props) => {
  const submithandler = (e) => {
    e.preventDefault();
    props.onSubmit('value');
  };
  return (
    <form onSubmit={submithandler}>
      <Input label="Profesor:" />
      <div className={classes.btnContainer}>
        <Button type="submit">Asignar</Button>
      </div>
    </form>
  );
};

export default TeacherForm;
