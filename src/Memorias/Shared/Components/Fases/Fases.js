import React from 'react';

import classes from './Fases.module.css';
import Fase from './Fase';
import FaseActual from './FaseActual';

const Fases = (props) => {
  return (
    <React.Fragment>
      {!props.approved && <FaseActual openForm={props.openForm} fases={props.fases} />}
      <div className={classes.container}>
        {props.fases &&
          props.fases.map((fase, index) => (
            <Fase
              key={index}
              id={fase.id}
              approved={props.approved}
              name={fase.name}
              state={fase.state}
              initDate={fase.initDate}
              testDate={fase.testDate}
              calification={fase.calification}
              action={() => props.goTo(fase.id)}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default Fases;
