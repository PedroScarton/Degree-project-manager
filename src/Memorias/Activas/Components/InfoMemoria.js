import React from 'react';

import Integrantes from '../../Shared/Components/Integrantes/Integrantes';
import Title from '../../Shared/Layout/Title';

import classes from './InfoMemoria.module.css';

const InfoMemoria = (props) => {
  return (
    <React.Fragment>
      <div className={classes.head}>
        <Title goBack={props.goBack}>
          <div className={classes.headTitle}>
            <h1>{props.title}</h1>
            <p>{new Date(props.date).toLocaleDateString('en-US')}</p>
          </div>
        </Title>
      </div>
      <div className={classes.body}>
        <div className={classes.description}>
          <p>{props.description}</p>
        </div>
        <div className={classes.members}>
          <h3>Información del grupo</h3>
          <Integrantes members={props.members} />
        </div>
        <div className={classes.teachers}>
          <h3>Información de los docentes</h3>
          <Integrantes members={props.teachers} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InfoMemoria;
