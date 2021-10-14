import React from 'react';

import Integrante from './Integrante';
import classes from './Integrantes.module.css';

const Integrantes = (props) => {
  return (
    <div className={classes.container}>
      {props.members &&
        props.members.map((member, index) => (
          <Integrante
            teacher={member.teacher}
            guia={member.guia}
            key={index}
            index={member.index}
            rut={member.rut}
            nombre={member.nombre}
            correo={member.correo}
          />
        ))}
    </div>
  );
};

export default Integrantes;
