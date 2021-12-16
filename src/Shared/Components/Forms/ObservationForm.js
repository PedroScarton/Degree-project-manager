import React from 'react';

import Button from '../FormElements/Button';

import classes from './ObservationForm.module.css';

const ObservationForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.obSubmit({});
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div></div>
        <div className={classes.buttonMargin}>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ObservationForm;
