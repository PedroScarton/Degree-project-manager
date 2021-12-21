import React from 'react';

import Card from '../../../Shared/Components/UI/Card';
import Programa from './Programa';
import classes from './Programas.module.css';

const Programas = (props) => (
  <div className={classes.container}>
    {props.programas &&
      props.programas.map((programa) => (
        <Card key={programa.id}>
          <Programa
            onDelete={() => props.deleteProgram(programa.id)}
            code={programa.codigo}
            fases={programa.fechasLimites}
          />
        </Card>
      ))}
  </div>
);

export default Programas;
