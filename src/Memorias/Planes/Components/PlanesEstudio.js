import React from 'react';

import Card from '../../../Shared/Components/UI/Card';
import PlanEstudio from './PlanEstudio';
import classes from './PlanesEstudio.module.css';

const dummy_planes = [1, 2, 3, 4, 5];

const Programas = (props) => {
  return (
    <div className={classes.container}>
      {dummy_planes &&
        dummy_planes.map((plan, index) => (
          <Card key={index}>
            <PlanEstudio
              key={index}
              id={plan}
              onDelete={props.onDelete}
              name="Diurno"
              code="D-021"
              fases="PT1, PT2, Defensa"
            />
          </Card>
        ))}
    </div>
  );
};

export default Programas;
