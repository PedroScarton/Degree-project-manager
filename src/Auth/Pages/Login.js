import React, { useContext } from 'react';

import { AuthContext } from '../../Shared/Context/auth-context';

import { useHttpClient } from '../../Shared/Hooks/http-hook';
import { useForm } from '../../Shared/Hooks/form-hook';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from '../../Shared/Utils/validators';

import FormContainer from '../Components/FormContainer';
import Button from '../../Shared/Components/FormElements/Button';
import Input from '../../Shared/Components/FormElements/Input';
import LoadingSpinner from '../../Shared/Components/UI/LoadingSpinner';
import ErrorChip from '../../Shared/Components/UI/ErrorChip';

import classes from './SharedClasses.module.css';

const Login = () => {
  const auth = useContext(AuthContext);

  const inputs = {
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
      correo_institucional: formState.inputs.email.value,
      contrasena: formState.inputs.password.value,
    };
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/usuarios/sign-in`,
        'POST',
        payload,
        {
          'Content-type': 'application/json',
        }
      );
      const userInfo = response.success;

      auth.login(
        userInfo.id,
        userInfo.nombre_completo,
        userInfo.correo_institucional,
        userInfo.rut,
        userInfo.tipo
      );
    } catch (err) {}
  };

  return (
    <main className={classes.main}>
      {isLoading && <LoadingSpinner />}
      <FormContainer
        onSubmit={submitHandler}
        title="Autenticación"
        footer={
          <Button outlined to="/signup">
            Registrarme
          </Button>
        }
      >
        <Input
          white
          id="email"
          label="Correo electrónico: *"
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
          <Button type="submit">Iniciar sesión</Button>
        </div>
      </FormContainer>
    </main>
  );
};

export default Login;
