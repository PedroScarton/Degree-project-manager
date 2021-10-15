import React from 'react';

import Output from '../../../Shared/Components/FormElements/Output';
import FileList from './FileList/FileList';

import classes from './ArchivosFase.module.css';

const ArchivosFase = (props) => {
  let element;
  if (props.active) {
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
  } else {
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
        <div className={classes.info}>
          <div className={classes.infoDetail}>
            <div className={classes.detailTitle}>
              <h3>Fecha de entrega</h3>
            </div>
            <div className={classes.detailBody}>
              <Output
                title="Fecha agendada"
                detail={props.eventDate}
              />
            </div>
          </div>
          <div className={classes.infoDetail}>
            <div className={classes.detailTitle}>
              <h3>Calificación</h3>
            </div>
            <div className={classes.detailBody}>
              <Output
                title="Calificación"
                detail={props.grade}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return element;
};

export default ArchivosFase;
