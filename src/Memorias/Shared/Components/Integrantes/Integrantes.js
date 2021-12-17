import React from 'react';

import Integrante from './Integrante';
import classes from './Integrantes.module.css';

const Integrantes = (props) => (
  <div className={classes.container}>
    {props.members &&
      props.members.map((member, index) => (
        <Integrante
          teacher={member.rol !== 'MEMORISTA'}
          guia={member.rol === 'GUIA'}
          key={index}
          index={member.index}
          rut={member.usuario.rut}
          nombre={member.usuario.nombre_completo}
          correo={member.usuario.correo_institucional}
        />
      ))}
  </div>
);

export default Integrantes;
