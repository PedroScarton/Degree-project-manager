import React, { useEffect, useState, useContext } from 'react';

import { AuthContext } from '../../../Shared/Context/auth-context';
import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import { useForm } from '../../../Shared/Hooks/form-hook';
import { useTeachers } from '../../../Shared/Hooks/teacher-hook';

import { VALIDATOR_REQUIRE } from '../../../Shared/Utils/validators';

// Memory components
import MemoriaEnviada from '../Components/MemoriaEnviada';
// General Components
import Card from '../../../Shared/Components/UI/Card';
import Button from '../../../Shared/Components/FormElements/Button';
import Input from '../../../Shared/Components/FormElements/Input';
import InputSelect from '../../../Shared/Components/FormElements/InputSelect';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

import classes from './IniciarSolicitud.module.css';

const IniciarSolicitud = () => {
  const auth = useContext(AuthContext);
  const { teacher } = useTeachers();
  const [numIntegrantes, setnumIntegrantes] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [memoryStatus, setMemoryStatus] = useState(false);

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

  // Verificar estado de memoria del usuario
  useEffect(() => {
    const fetchMemoryData = async () => {
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/usuario-x-memoria/por-usuario?id_usuario=${auth.id}`
        );
        console.log(response);
        if (!!!response.memoria) {
          setMemoryStatus(false);
        } else {
          setMemoryStatus(response.memoria.memoria.estado);
        }
        setIsLoaded(true);
      } catch (err) {}
    };
    return fetchMemoryData();
  }, [sendRequest, auth.id]);

  // Handler del numero de integrantes a mostrar
  useEffect(() => {
    switch (formState.inputs.number.value) {
      case '1':
        setnumIntegrantes(1);
        showedInputHandler(1);
        break;
      case '2':
        setnumIntegrantes(2);
        showedInputHandler(2);
        break;
      case '3':
        setnumIntegrantes(3);
        showedInputHandler(3);
        break;
      default:
        break;
    }
  }, [formState.inputs.number.value]);

  const showedInputHandler = (num) => {
    const template = {
      title: { value: formState.inputs.title.value, isValid: false },
      description: { value: formState.inputs.description.value, isValid: false },
      teacher: { value: formState.inputs.teacher.value, isValid: false },
      area: { value: formState.inputs.area.value, isValid: false },
      primero: { value: formState.inputs.primero.value, isValid: false },
    };
    switch (num) {
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
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const usuarios = [];
    switch (numIntegrantes) {
      case 1:
        usuarios.push(...[formState.inputs.primero.value]);
        break;
      case 2:
        usuarios.push(...[formState.inputs.primero.value, formState.inputs.segundo.value]);
        break;
      case 3:
        usuarios.push(
          ...[
            formState.inputs.primero.value,
            formState.inputs.segundo.value,
            formState.inputs.tercero.value,
          ]
        );
        break;
      default:
        break;
    }
    let selectedTeacher;
    if (formState.inputs.teacher.value !== '') {
      const profesor = teacher.filter(
        (teacher) => teacher.nombre_completo === formState.inputs.teacher.value
      );
      if (profesor.length > 0) {
        selectedTeacher = profesor[0].id;
      }
    }
    let payload = {
      titulo: formState.inputs.title.value,
      descripcion: formState.inputs.description.value,
      area_de_estudio: formState.inputs.area.value,
      correo_estudiantes: usuarios,
      id_profesor_guia: selectedTeacher,
    };
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/usuario-x-memoria/with-users`,
        'POST',
        payload,
        {
          'Content-type': 'application/json',
        }
      );
      setMemoryStatus('PRE_INSCRIPCION');
    } catch (err) {}
  };

  return !isLoaded ? (
    <LoadingSpinner contained />
  ) : memoryStatus ? (
    <MemoriaEnviada status={memoryStatus} />
  ) : (
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
