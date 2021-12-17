import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../Shared/Context/auth-context';

import { useHttpClient } from '../../Shared/Hooks/http-hook';
import { useForm } from '../../Shared/Hooks/form-hook';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_NUMERIC,
} from '../../Shared/Utils/validators';

import FormContainer from '../Components/FormContainer';
import Button from '../../Shared/Components/FormElements/Button';
import Input from '../../Shared/Components/FormElements/Input';
import LoadingSpinner from '../../Shared/Components/UI/LoadingSpinner';
import ErrorChip from '../../Shared/Components/UI/ErrorChip';

import classes from './SharedClasses.module.css';

const Signup = () => {
  const auth = useContext(AuthContext);

  const history = useHistory();

  const inputs = {
    name: {
      value: '',
      isValid: false,
    },
    rut: {
      value: '',
      isValid: false,
    },
    email: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
  };
  const [formState, inputHandler] = useForm(inputs, false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (error) {
      clearError();
    }
    const payload = {
      nombre_completo: formState.inputs.name.value,
      rut: +formState.inputs.rut.value,
      correo_institucional: formState.inputs.email.value,
      contrasena: formState.inputs.password.value,
    };
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/usuarios`,
        'POST',
        payload,
        {
          'Content-type': 'application/json',
        }
      );
      auth.login(
        response.id,
        response.nombre_completo,
        response.correo_institucional,
        response.rut,
        response.tipo
      );
      history.push('/memorias');
    } catch (err) {}
  };
  return (
    <main className={classes.main}>
      {isLoading && <LoadingSpinner />}
      <FormContainer
        onSubmit={submitHandler}
        title="Autenticación"
        footer={
          <Button outlined to="/login">
            Iniciar sesión
          </Button>
        }
      >
        <Input
          white
          id="name"
          label="Nombre completo: *"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />
        <Input
          white
          id="rut"
          label="Rut: *"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_NUMERIC()]}
        />
        <Input
          white
          id="email"
          label="Correo institucional: *"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        />
        <Input
          white
          id="password"
          label="Contraseña: *"
          type="password"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(7)]}
        />
        {error && (
          <div className={classes.login__error}>
            <ErrorChip text={error} />
          </div>
        )}
        <div className={classes.buttonMargin}>
          <Button type="submit">Registrarme</Button>
        </div>
      </FormContainer>
    </main>
  );
};

export default Signup;
