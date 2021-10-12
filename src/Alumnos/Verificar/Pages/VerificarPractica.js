import React, { useState } from 'react';

import Card from '../../../Shared/Components/UI/Card';
import Formulario from '../Components/Formulario';
import Resultado from '../Components/Resultado';

import classes from './VerificarPractica.module.css';

const VerificarPractica = (props) => {
  const [result, setResult] = useState(false);
  const submitHandler = (rut) => {
    console.log(rut);
    setResult(true);
  };
  const goBackHandler = () => {
    setResult(false);
  };
  return (
    <div className={classes.container}>
      <div className={classes.cardContainer}>
        <Card>
          {!result ? (
            <Formulario onSubmit={submitHandler} />
          ) : (
            <Resultado onGoBack={goBackHandler} />
          )}
        </Card>
      </div>
    </div>
  );
};

export default VerificarPractica;
