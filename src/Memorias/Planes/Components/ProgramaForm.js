import React, { useEffect, useState } from 'react';

import { useForm } from '../../../Shared/Hooks/form-hook';

import { VALIDATOR_REQUIRE } from '../../../Shared/Utils/validators';

import Input from '../../../Shared/Components/FormElements/Input';
import Button from '../../../Shared/Components/FormElements/Button';

import classes from './ProgramaForm.module.css';

const ProgramaForm = (props) => {
  const [PT1, setPT1] = useState(false);
  const [PT2, setPT2] = useState(false);
  const [defensa, setDefensa] = useState(false);

  const inputs = {
    codigo: { value: '', isValid: false },
  };
  const [formState, inputHandler, setFormData] = useForm(inputs, false);

  useEffect(() => {
    // recorrer el arreglo de fases
    const inputs = {};
    for (const fase of props.fases) {
      if (fase === 'PT1') {
        inputs['pt1'] = { value: '', isValid: false };
        setPT1(true);
      } else if (fase === 'PT2') {
        inputs['pt2'] = { value: '', isValid: false };
        setPT2(true);
      } else if (fase === 'DEFENSA') {
        inputs['defensa'] = { value: '', isValid: false };
        setDefensa(true);
      }
    }
    setFormData({
      codigo: { value: '', isValid: false },
      ...inputs,
    });
  }, [props.fases, setFormData]);

  const submithandler = (e) => {
    e.preventDefault();
    const fechas = [];
    PT1 && fechas.push({ tipo: 'PT1', fecha: formState.inputs.pt1.value });
    PT2 && fechas.push({ tipo: 'PT2', fecha: formState.inputs.pt2.value });
    defensa && fechas.push({ tipo: 'DEFENSA', fecha: formState.inputs.defensa.value });
    props.onSubmit({
      codigo: formState.inputs.codigo.value,
      fechas: fechas,
    });
  };
  return (
    <form onSubmit={submithandler}>
      <div className={classes.formContainer}>
        <Input
          id="codigo"
          type="text"
          label="Código de programa: *"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />
        {PT1 && (
          <Input
            id="pt1"
            type="date"
            label="PT1: *"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
        )}
        {PT2 && (
          <Input
            id="pt2"
            type="date"
            label="PT2: *"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
        )}
        {defensa && (
          <Input
            id="defensa"
            type="date"
            label="Defensa: *"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
        )}
      </div>
      <Button type="submit" disabled={!formState.isValid}>
        Agregar programa
      </Button>
    </form>
  );
};

export default ProgramaForm;
