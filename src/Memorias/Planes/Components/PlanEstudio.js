import React from 'react';
import { Link } from 'react-router-dom';

import EliminarIcon from '../../../Assets/icons/eliminar.svg';
import EditarIcon from '../../../Assets/icons/editar.svg';
import classes from './PlanEstudio.module.css';

const PlanesEstudio = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>{props.name}</h3>
        <p>{props.code}</p>
      </div>
      <div className={classes.body}>
        <span>Fases :</span>
        <p>{props.fases}</p>
      </div>
      <div className={classes.buttons}>
        {!!!props.inner && (
          <>
            <button onClick={() => props.onDelete(props.id)}>
              <img src={EliminarIcon} alt="" />
            </button>
            <Link className={classes.Link} to={`/memorias/plan/${props.id}`}>
              <img src={EditarIcon} alt="" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default PlanesEstudio;
