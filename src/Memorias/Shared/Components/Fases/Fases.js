import React from 'react';

import classes from './Fases.module.css';
import Fase from './Fase';
import FaseActual from './FaseActual';

const Fases = (props) => {
  const filterFases = () => {
    const order = ['PT1', 'PT2', 'DEFENSA'];
    const filtered = [];
    for (const type of order) {
      for (const fase of props.fases) {
        if (type === fase.tipo) {
          filtered.push(fase);
        }
      }
    }
    return filtered;
  };
  const filtered = filterFases();
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
        {filtered &&
          filtered.map((fase, index) => (
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
