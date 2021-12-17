import React, { useState } from 'react';

import { useHttpClient } from '../../../Shared/Hooks/http-hook';

import Formulario from '../Components/Formulario';
import Resultado from '../Components/Resultado';

import Card from '../../../Shared/Components/UI/Card';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

import classes from './VerificarPractica.module.css';

const VerificarPractica = (props) => {
  const [userData, setUserData] = useState(undefined);
  const [result, setResult] = useState(false);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const submitHandler = async (rut) => {
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/usuarios/verificar-requisitos?rut=${rut}`
      );
      if (response.verificacion) {
        setUserData(response.verificacion);
        setResult(true);
      } else {
        setResult(false);
      }
    } catch (err) {}
  };
  const goBackHandler = () => {
    setResult(false);
  };
  return (
    <div className={classes.container}>
      {isLoading && <LoadingSpinner />}
      <div className={classes.cardContainer}>
        <Card>
          {!result ? (
            <Formulario onSubmit={submitHandler} />
          ) : (
            <Resultado
              rut={userData.rut}
              name={userData.nombre_completo}
              email={userData.correo_institucional}
              operacional={userData.operacional}
              profesional={userData.profesional}
              onGoBack={goBackHandler}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default VerificarPractica;
