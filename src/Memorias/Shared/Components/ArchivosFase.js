import React from 'react';

import Output from '../../../Shared/Components/FormElements/Output';
import FileList from './FileList/FileList';

import classes from './ArchivosFase.module.css';

const ArchivosFase = (props) => {
  let element;
  if (props.active) {
    element = (
      <React.Fragment>
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
        <div className={classes.detail}>
          <div className={classes.detailTitle}>
            <h3>Evaluaciones</h3>
          </div>
          <div className={classes.detailBody}>
            <FileList
              members={props.observations}
              sendNotification={props.sendNotification}
              isActive
            />
          </div>
        </div>
        <div className={classes.detail}>
          <div className={classes.detailTitle}>
            <h3>Observaciones</h3>
          </div>
          <div className={classes.detailBody}>
            <FileList
              members={props.evaluations}
              sendNotification={props.sendNotification}
              isActive
            />
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    element = (
      <div className={classes.completeContainer}>
        <div className={classes.detailComplete}>
          <div className={classes.detailTitle}>
            <h3>Observaciones</h3>
          </div>
          <div className={classes.detailBody}>
            <FileList members={props.observations} />
          </div>
        </div>
        <div className={classes.detailComplete}>
          <div className={classes.detailTitle}>
            <h3>Evaluaciones</h3>
          </div>
          <div className={classes.detailBody}>
            <FileList members={props.evaluations} />
          </div>
        </div>
      </div>
    );
  }

  return element;
};

export default ArchivosFase;
