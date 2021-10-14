import React from 'react';

import Input from '../../../Shared/Components/FormElements/Input';
import Button from '../../../Shared/Components/FormElements/Button';

import classes from './DateForm.module.css';

const TeacherForm = (props) => {
  const submithandler = (e) => {
    e.preventDefault();
    props.onSubmit('value');
  };
  return (
    <form onSubmit={submithandler}>
      <Input label="Nueva fecha:" />
      <div className={classes.btnContainer}>
        <Button type="submit">Modificar</Button>
      </div>
    </form>
  );
};

export default TeacherForm;
