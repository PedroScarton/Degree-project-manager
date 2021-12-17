import React, { useEffect, useState } from 'react';

import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import { useForm } from '../../../Shared/Hooks/form-hook';
import { useTeachers } from '../../../Shared/Hooks/teacher-hook';

import { VALIDATOR_REQUIRE } from '../../../Shared/Utils/validators';

import Card from '../../../Shared/Components/UI/Card';
import Button from '../../../Shared/Components/FormElements/Button';
import Input from '../../../Shared/Components/FormElements/Input';
import InputSelect from '../../../Shared/Components/FormElements/InputSelect';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

import classes from './IniciarSolicitud.module.css';

const IniciarSolicitud = () => {
  const { teacher } = useTeachers();
  const [numIntegrantes, setnumIntegrantes] = useState(1);

  const inputs = {
    title: { value: '', isValid: false },
    description: { value: '', isValid: false },
    teacher: { value: '', isValid: false },
    area: { value: '', isValid: false },
    number: { value: '1', isValid: true },
    primero: { value: '', isValid: false },
  };
  const [formState, inputHandler, setFormData] = useForm(inputs, false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const template = {
      title: { value: formState.inputs.title.value, isValid: false },
      description: { value: formState.inputs.description.value, isValid: false },
      teacher: { value: formState.inputs.teacher.value, isValid: false },
      area: { value: formState.inputs.area.value, isValid: false },
      primero: { value: formState.inputs.primero.value, isValid: false },
    };
    switch (numIntegrantes) {
      case 1:
        setFormData({ ...template, number: { value: '1', isValid: true } }, false);
        break;
      case 2:
        setFormData(
          {
            ...template,
            number: { value: '2', isValid: true },
            segundo: { value: '', isValid: false },
          },
          false
        );
        break;
      case 3:
        setFormData(
          {
            ...template,
            number: { value: '3', isValid: true },
            segundo: {
              value: formState.inputs.segundo ? formState.inputs.segundo.value : '',
              isValid: false,
            },
            tercero: { value: '', isValid: false },
          },
          false
        );
        break;
      default:
        break;
    }
  }, [setFormData, numIntegrantes]);

  useEffect(() => {
    switch (formState.inputs.number.value) {
      case '1':
        setnumIntegrantes(1);
        break;
      case '2':
        setnumIntegrantes(2);
        break;
      case '3':
        setnumIntegrantes(3);
        break;
      default:
        break;
    }
  }, [formState.inputs.number.value]);

  const submitForm = async (event) => {
    event.preventDefault();
    let payload = {
      titulo: formState.inputs.title.value,
      descripcion: formState.inputs.description.value,
      area_de_estudio: formState.inputs.area.value,
    };
    console.log(payload);
    try {
      let response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/memorias`,
        'POST',
        payload,
        {
          'Content-type': 'application/json',
        }
      );
      const memoryId = response.memoria.id;
      if (memoryId) {
        const usuarios = [];
        // hacer post de usuarios
        if (formState.inputs.teacher.value !== '') {
          const profesor = teacher.filter(
            (teacher) => teacher.nombre_completo === formState.inputs.teacher.value
          );
          console.log(profesor);
          if (profesor.length > 0) {
            usuarios.push({
              rol: 'GUIA',
              correo_institucional: profesor[0].correo_institucional,
            });
          }
        }
        switch (numIntegrantes) {
          case 1:
            console.log('entra');
            usuarios.push(
              ...[{ rol: 'MEMORISTA', correo_institucional: formState.inputs.primero.value }]
            );
            break;
          case 2:
            console.log('entra');
            usuarios.push(
              ...[
                { rol: 'MEMORISTA', correo_institucional: formState.inputs.primero.value },
                { rol: 'MEMORISTA', correo_institucional: formState.inputs.segundo.value },
              ]
            );
            break;
          case 3:
            console.log('entra');
            usuarios.push(
              ...[
                { rol: 'MEMORISTA', correo_institucional: formState.inputs.primero.value },
                { rol: 'MEMORISTA', correo_institucional: formState.inputs.segundo.value },
                { rol: 'MEMORISTA', correo_institucional: formState.inputs.tercero.value },
              ]
            );
            break;
          default:
            break;
        }
        payload = { relacion: { id_memoria: memoryId, usuarios: usuarios } };
        // // aqui hago la relacion con los usuarios a la memoria
        await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/usuario-x-memoria`,
          'POST',
          payload,
          {
            'Content-type': 'application/json',
          }
        );
      }
    } catch (err) {}
  };

  return (
    <div className={classes.container}>
      {isLoading && <LoadingSpinner />}
      <div className={classes.head}>
        <h1>Solicitud de memoria</h1>
        <p>(*) indica que los campos obligatorios</p>
      </div>
      <Card>
        <form className={classes.memory} onSubmit={submitForm}>
          <div className={classes.memoryInfo}>
            <h2>Información sobre la memoria</h2>
            <Input
              id="title"
              label="Titulo: *"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              type="text"
            />
            <Input
              id="description"
              label="Descripción: *"
              helperText="Breve resumen sobre los temas a tratar."
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              type="text"
            />
            <div className={classes.formSelects}>
              <InputSelect
                id="teacher"
                label="Profesor guía:"
                helperText="La selección de profesor guía es opcional"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                type="text"
                options={
                  teacher &&
                  teacher.map((teacher) => {
                    return { name: teacher.nombre_completo };
                  })
                }
              />
              <Input
                id="area"
                label="Área de estudio: *"
                helperText="Especifique el campo de estudio que abarca su memoria"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                type="text"
              />
            </div>
          </div>
          <div className={classes.memoryBody}>
            <div className={classes.memoryGroup}>
              <h2>Información sobre el grupo</h2>
              <InputSelect
                id="number"
                label="Número de estudiantes: *"
                helperText="Cantidad de integrantes del grupo"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                options={[{ name: '1' }, { name: '2' }, { name: '3' }]}
                initialValue="1"
                initialValidity={true}
              />
              <Input
                id="primero"
                label="Correo institucional: *"
                helperText="El correo debe pertener a la red de la universidad"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                type="text"
              />
              {numIntegrantes >= 2 && (
                <Input
                  id="segundo"
                  label="Correo institucional: *"
                  helperText="El correo debe pertener a la red de la universidad"
                  onInput={inputHandler}
                  validators={[VALIDATOR_REQUIRE()]}
                  type="text"
                />
              )}
              {numIntegrantes >= 3 && (
                <Input
                  id="tercero"
                  label="Correo institucional: *"
                  helperText="El correo debe pertener a la red de la universidad"
                  onInput={inputHandler}
                  validators={[VALIDATOR_REQUIRE()]}
                  type="text"
                />
              )}
            </div>
          </div>
          <div className={classes.Button}>
            <Button type="submit">Enviar Solicitud</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default IniciarSolicitud;
