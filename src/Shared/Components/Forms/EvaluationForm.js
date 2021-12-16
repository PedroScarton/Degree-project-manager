import React from 'react';

import Button from '../FormElements/Button';

import classes from './EvaluationForm.module.css';

const EvaluationForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.obSubmit({});
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div>
          
        </div>
        <div className={classes.buttonMargin}>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default EvaluationForm;
