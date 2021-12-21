import React from 'react';

import { useForm } from '../../../Shared/Hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../../Shared/Utils/validators';

import InputSelect from '../../../Shared/Components/FormElements/InputSelect';
import Button from '../../../Shared/Components/FormElements/Button';

import classes from './TeacherForm.module.css';

const TeacherForm = (props) => {
  const inputs = {
    teacher: { value: '', isValid: false },
  };
  const [formState, inputHandler] = useForm(inputs, false);
  const submit = (event) => {
    event.preventDefault();
    props.onSelect(props.teacherType, formState.inputs.teacher.value);
  };
  return (
    <form onSubmit={submit}>
      <InputSelect
        id="teacher"
        label="Profesor guía:"
        helperText="La selección de profesor guía es opcional"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        type="text"
        options={
          props.teacher &&
          props.teacher.map((teacher) => {
            return { name: teacher.nombre_completo };
          })
        }
      />
      <div className={classes.btnContainer2}>
        <Button type="submit">Asignar</Button>
      </div>
    </form>
  );
};

export default TeacherForm;
