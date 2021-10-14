import React from 'react';

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
                <button>
                    <img src={EliminarIcon} alt="" />
                </button>
                <button>
                    <img src={EditarIcon} alt="" />
                </button>
            </div>

        </div>
    );
}

export default PlanesEstudio;