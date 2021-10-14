import React, { useContext } from 'react';

import { AuthContext } from '../../Shared/Context/auth-context';

import { useHistory } from 'react-router-dom';

import FormContainer from '../Components/FormContainer';
import Button from '../../Shared/Components/FormElements/Button';
import Input from '../../Shared/Components/FormElements/Input';

import classes from './SharedClasses.module.css';

const Login = () => {
  const auth = useContext(AuthContext);

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    auth.login();
    history.push('/memorias');
  };
  return (
    <main className={classes.main}>
      <FormContainer
        onSubmit={submitHandler}
        title="Autenticación"
        footer={
          <Button outlined to="/login">
            Iniciar sesión
          </Button>
        }
      >
        <Input white label="Nombre completo: *" placeholder="Joaquin Carlos Hernandez Gomez" />
        <Input white label="Rut: *" placeholder="11.222.333-4" />
        <Input white label="Correo institucional: *" placeholder="aa.bb@alumnos.ucentral.cl" />
        <Input white label="Contraseña: *" type="password" />
        <Input white label="Confirmar contraseña: *" type="password" />
        <div className={classes.buttonMargin}>
          <Button>Registrarme</Button>
        </div>
      </FormContainer>
    </main>
  );
};

export default Login;
