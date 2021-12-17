import React from 'react';

import {
  VALIDATOR_REQUIRE
} from '../../Utils/validators';
import { useForm } from '../../Hooks/form-hook';

import Input from '../FormElements/Input';
import Button from '../FormElements/Button';
import InputSelect from '../FormElements/InputSelect';

import classes from './Forms.module.css';

const ObservationForm = (props) => {

  const inputs = {
    fecha: {
      value: '',
      isValid: false,
    },
    justificacionTema: {
      value: '',
      isValid: false,
    },
    objetivos: {
      value: '',
      isValid: false,
    },
    metodologia: {
      value: '',
      isValid: false,
    },
    bibliografia: {
      value: '',
      isValid: false,
    },
    apreciacionTema: {
      value: '',
      isValid: false,
    },
    aprobacionTema: {
      value: '',
      isValid: false,
    },
    observaciones: {
      value: '',
      isValid: false,
    },
  };

  const [formState, inputHandler] = useForm(inputs, false);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };



  const options = [{ name: 'Si' }, { name: 'Con observación' }, { name: 'No' }]
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div className={classes.container}>
          <Input
            id="fecha"
            type="date"
            label="Fecha *"
            placeholder=""
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <div className={classes.detail}>
            <InputSelect
              id="justificacionTema"
              label="Justificación del tema: *"
              options={options}
              onInput={inputHandler}
              validators={[]}
              placeholder="Selecciona una opción..."
            />
            <InputSelect
              id="objetivos"
              label="Objetivos: *"
              options={options}
              onInput={inputHandler}
              validators={[]}
              placeholder="Selecciona una opción..."
            />
          </div>
          <div className={classes.detail}>
            <InputSelect
              id="metodologia"
              label="Metodología: *"
              options={options}
              onInput={inputHandler}
              validators={[]}
              placeholder="Selecciona una opción..."
            />
            <InputSelect
              id="bibliografia"
              label="Bibliografía: *"
              options={options}
              onInput={inputHandler}
              validators={[]}
              placeholder="Selecciona una opción..."
            />
          </div>
          <Input
            id="apreciacionTema"
            label="Apreciación desarrollo del tema: *"
            type="textarea"
            placeholder=""
            onInput={inputHandler}
            initialValidity={true}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <InputSelect
            id="aprobacionTema"
            label="Aprobación del tema: *"
            options={[{ name: 'Aprueba el tema' }, { name: 'Aprueba el tema con observación' }, { name: 'Rechaza el tema' }]}
            onInput={inputHandler}
            validators={[]}
            placeholder="Selecciona una opción..."
          />
          <Input
            id="observaciones"
            label="Observaciones: *"
            type="textarea"
            placeholder=""
            onInput={inputHandler}
            initialValidity={true}
            validators={[]}
          />
        </div>
        <div className={classes.buttonMargin}>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ObservationForm;
