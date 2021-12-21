import React from 'react';

import classes from './Fases.module.css';
import Fase from './Fase';
import FaseActual from './FaseActual';

const Fases = (props) => {
  return (
    <React.Fragment>
      {!props.approved && (
        <FaseActual
          student={props.student}
          nextFase={props.skipFase}
          goTo={props.openForm}
          actual={props.actual}
          fases={props.fases}
          users={props.users}
        />
      )}
      <div className={classes.container}>
        {props.fases &&
          props.fases.map((fase, index) => (
            <Fase
              key={index}
              id={fase.id}
              name={fase.tipo}
              fecha_de_creacion={fase.fecha_de_creacion}
              fecha_de_evaluacion={fase.fecha_de_evaluacion}
              calification={fase.calificacion}
              isActive={fase.tipo === props.actual}
              action={() => props.goTo(fase.tipo)}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default Fases;
