import React from 'react';

import Card from '../../../Shared/Components/UI/Card';
import PlanEstudio from './PlanEstudio';
import classes from './PlanesEstudio.module.css';

const Programas = (props) => {
  return (
    <div className={classes.container}>
      {props.planes.map((plan, index) => (
        <Card key={index}>
          <PlanEstudio
            key={index}
            id={plan.id}
            onDelete={props.onDelete}
            name={plan.nombre}
            code={plan.codigo}
            fases={plan.fases.join(', ')}
          />
        </Card>
      ))}
    </div>
  );
};

export default Programas;
