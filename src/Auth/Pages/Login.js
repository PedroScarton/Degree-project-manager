import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../Shared/Context/auth-context';

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
          <Button outlined to="/signup">
            Registrarme
          </Button>
        }
      >
        <Input white label="Correo institucional: *" placeholder="aa.bb@alumnos.ucentral.cl" />
        <Input white label="Contraseña: *" type="password" />
        <div className={classes.buttonMargin}>
          <Button type="submit">Iniciar sesión</Button>
        </div>
      </FormContainer>
    </main>
  );
};

export default Login;
