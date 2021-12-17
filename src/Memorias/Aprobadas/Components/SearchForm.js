import React, { useEffect, useState } from 'react';

import { useForm } from '../../../Shared/Hooks/form-hook';

// General Components
import Card from '../../../Shared/Components/UI/Card';
import Input from '../../../Shared/Components/FormElements/Input';
import Button from '../../../Shared/Components/FormElements/Button';
import FormModal from '../../../Shared/Components/Layout/FormModal';

// Styles
import classes from './SearchForm.module.css';

const SearchForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const inputs = {
    title: {
      value: '',
      isValid: true,
    },
  };

  const [formState, inputHandler, setFormData] = useForm(inputs, false);

  useEffect(() => {
    if (isOpen) {
      setFormData({ title: { value: '', isValid: true } }, true);
    } else {
      setFormData(
        {
          title: { value: '', isValid: true },
          area: { value: '', isValid: true },
          teacher: { value: '', isValid: true },
          since: { value: '', isValid: true },
          until: { value: '', isValid: true },
        },
        true
      );
    }
  }, [setFormData, isOpen]);

  const submitHandler = (event) => {
    event.preventDefault();
    const payload = {};
    if (formState.inputs.title.value !== '') {
      payload['titulo'] = formState.inputs.title.value;
    }
    if (isOpen) {
      // busqueda avanzada
      if (formState.inputs.area.value !== '') {
        payload['area'] = formState.inputs.area.value;
      }
      if (formState.inputs.teacher.value !== '') {
        payload['teacher'] = formState.inputs.teacher.value;
      }
      if (formState.inputs.since.value !== '') {
        payload['since'] = formState.inputs.since.value;
      }
      if (formState.inputs.until.value !== '') {
        payload['until'] = formState.inputs.until.value;
      }
    }
    // usar la funcion para cambiar las memorias
    props.onSubmit(payload);
  };
  const advanceSearch = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };
  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Card>
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes.container}>
            <div className={classes.column}>
              <Input
                id="title"
                type="text"
                label="Título de memoria:"
                helperText="Se buscará las memorias que coincidan con las palabras ingresadas"
                onInput={inputHandler}
                validators={[]}
              />
            </div>
            <div className={classes.buttonContainer}>
              <Button type="submit">Buscar</Button>
              <div className={classes.button}>
                <button onClick={advanceSearch} className={classes.hyperLink}>
                  Búsqueda avanzada
                </button>
              </div>
            </div>
          </div>
        </form>
      </Card>
      <FormModal title="Búsqueda avanzada" open={isOpen} onClose={closeHandler}>
        <form onSubmit={submitHandler}>
          <Input
            id="title"
            type="text"
            label="Título de memoria:"
            onInput={inputHandler}
            validators={[]}
          />
          <Input
            id="area"
            type="text"
            label="Area de estudio:"
            onInput={inputHandler}
            validators={[]}
          />
          <Input
            id="teacher"
            type="text"
            label="Profesor guia:"
            onInput={inputHandler}
            validators={[]}
          />
          <div className={classes.dateContainer}>
            <div className={classes.inputContainer} style={{ paddingRight: '1rem' }}>
              <Input id="since" type="date" label="Desde:" onInput={inputHandler} validators={[]} />
            </div>
            <div className={classes.inputContainer} style={{ paddingLeft: '1rem' }}>
              <Input id="until" type="date" label="Hasta:" onInput={inputHandler} validators={[]} />
            </div>
          </div>
          <Button type="submit">Buscar</Button>
        </form>
      </FormModal>
    </div>
  );
};

export default SearchForm;
