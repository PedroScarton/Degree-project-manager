import React from 'react';

import { useHistory } from 'react-router-dom';

import FormContainer from '../Components/FormContainer';
import Button from '../../Shared/Components/FormElements/Button';
import Input from '../../Shared/Components/FormElements/Input';

import classes from './SharedClasses.module.css';

const Login = () => {
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('sesión iniciada');
    history.push('/memorias');
  };

  return (
    <main className={classes.main}>
      <FormContainer
        onSubmit={submitHandler}
        title="Autenticación"
        footer={
          <Button outlined to="/signup">
            Registrarme
          </Button>
        }
      >
        <Input white label="Correo institucional: *" placeholder="aa.bb@alumnos.ucentral.cl" />
        <Input white label="Contraseña: *" type="password" />
        <div className={classes.buttonMargin}>
          <Button >Iniciar sesión</Button>
        </div>
      </FormContainer>
    </main>
  );
};

export default Login;
