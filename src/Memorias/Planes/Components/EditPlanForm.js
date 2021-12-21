import React, { useState } from 'react';

import { useForm } from '../../../Shared/Hooks/form-hook';
import { VALIDATOR_MAXLENGTH, VALIDATOR_REQUIRE } from '../../../Shared/Utils/validators';

// General Components
import Input from '../../../Shared/Components/FormElements/Input';
import Button from '../../../Shared/Components/FormElements/Button';
import CheckboxInput from '../../../Shared/Components/FormElements/checkBox';

import classes from './EditPlanForm.module.css';

const EditPlanForm = (props) => {
  // Fases states
  const [PT1, setPT1] = useState(false);
  const [PT2, setPT2] = useState(false);
  const [examen, setExamen] = useState(false);

  // Form States
  const inputs = {
    name: {
      value: '',
      isValid: false,
    },
    code: {
      value: '',
      isValid: false,
    },
  };
  // Hooks
  const [formState, inputHandler] = useForm(inputs, false);

  const submithandler = (e) => {
    e.preventDefault();
    const fases = [];
    PT1 && fases.push('PT1');
    PT2 && fases.push('PT2');
    examen && fases.push('DEFENSA');
    props.onSubmit({
      nombre: formState.inputs.name.value,
      codigo: formState.inputs.code.value,
      fases: fases,
    });
  };

  const onFaseSelect = (type) => {
    switch (type) {
      case 'PT1':
        setPT1((prev) => !prev);
        break;
      case 'PT2':
        setPT2((prev) => !prev);
        break;
      case 'defensa':
        setExamen((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={submithandler}>
      <div className={classes.formContainer}>
        <Input
          id="name"
          type="text"
          label="Nombre: *"
          placeHolder="Diurno..."
          helperText="Nombre del plan al que se le asignarán las fases."
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />
        <Input
          id="code"
          type="text"
          label="Código de plan: *"
          helperText="Código que se le asignará a una memoria para determinar sus fase."
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(10)]}
        />
        <div>
          <p className={classes.header}>Selección de etapas:</p>
          <div>
            <CheckboxInput
              id="PT1"
              checked={PT1}
              onChange={() => onFaseSelect('PT1')}
              label="PT1"
            />
            <CheckboxInput
              id="PT2"
              checked={PT2}
              onChange={() => onFaseSelect('PT2')}
              label="PT2"
            />
            <CheckboxInput
              id="defensa"
              checked={examen}
              onChange={() => onFaseSelect('defensa')}
              label="Defensa"
            />
          </div>
        </div>
      </div>
      <Button type="submit" disabled={!formState.isValid}>
        {props.edit ? 'Confirmar cambio' : 'Agregar programa'}
      </Button>
    </form>
  );
};

export default EditPlanForm;
