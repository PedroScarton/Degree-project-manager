import React from 'react';

import Output from '../../../Shared/Components/FormElements/Output';
import FileList from './FileList/FileList';

import classes from './ArchivosFase.module.css';

const ArchivosFase = (props) => {
  return props.active ? (
    <React.Fragment>
      {props.isCoordinador && (
        <div className={classes.detail}>
          <div className={classes.detailTitle}>
            <h3>Fecha de entrega</h3>
          </div>
          <div className={classes.detailBody}>
            <Output
              onCallAction={props.onDateChange}
              action="Modificar"
              title="Fecha Agendada"
              detail="20/05/2021"
            />
          </div>
        </div>
      )}
      <div className={classes.detail}>
        <div className={classes.detailTitle}>
          <h3>Evaluaciones</h3>
        </div>
        <div className={classes.detailBody}>
          <FileList type="evaluación" onOpen={props.onOpenFile} members={props.teachers} isActive />
        </div>
      </div>
      <div className={classes.detail}>
        <div className={classes.detailTitle}>
          <h3>Observaciones</h3>
        </div>
        <div className={classes.detailBody}>
          <FileList
            type="observación"
            onOpen={props.onOpenFile}
            members={[...props.teachers, ...props.students]}
            isActive
          />
        </div>
      </div>
    </React.Fragment>
  ) : (
    <div className={classes.completeContainer}>
      <div className={classes.detailComplete}>
        <div className={classes.detailTitle}>
          <h3>Observaciones</h3>
        </div>
        <div className={classes.detailBody}>
          <FileList
            type="observación"
            onOpen={props.onOpenFile}
            members={[...props.teachers, ...props.students]}
          />
        </div>
      </div>
      <div className={classes.detailComplete}>
        <div className={classes.detailTitle}>
          <h3>Evaluaciones</h3>
        </div>
        <div className={classes.detailBody}>
          <FileList type="evaluación" onOpen={props.onOpenFile} members={props.teachers} />
        </div>
      </div>
    </div>
  );
};

export default ArchivosFase;
