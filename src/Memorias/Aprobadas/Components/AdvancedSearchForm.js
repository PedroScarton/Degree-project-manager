import React from 'react';

import Input from '../../../Shared/Components/FormElements/Input';

import classes from './AdvancedSearchForm.module.css';

const AdvancedSearchForm = (props) => {
  const submithandler = (e) => {
    e.preventDefault();
    console.log('hola');
  };
  return (
    <form onSubmit={submithandler}>
      <Input label="Título de memoria:" />
      <Input label="Area de estudio:" />
      <Input label="Profesor guia:" />
      <div className={classes.dateContainer}>
        <div className={classes.inputContainer} style={{ paddingRight: '1rem' }}>
          <Input label="Desde:" />
        </div>
        <div className={classes.inputContainer} style={{ paddingLeft: '1rem' }}>
          <Input label="Hasta:" />
        </div>
      </div>
    </form>
  );
};

export default AdvancedSearchForm;
