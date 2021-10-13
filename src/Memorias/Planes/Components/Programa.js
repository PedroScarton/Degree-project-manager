import React from 'react';

import EliminarIcon from '../../../Assets/icons/eliminar.svg';
import EditarIcon from '../../../Assets/icons/editar.svg';
import classes from './Programa.module.css';

const Programa = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <div className={classes.title}>
                    <h3>{props.name}</h3>
                    <div className={classes.buttons}>
                        <button>
                            <img src={EliminarIcon} alt="" />
                        </button>
                        <button>
                            <img src={EditarIcon} alt="" />
                        </button>
                    </div>
                </div>
                <p>{props.code}</p>
            </div>
            <div className={classes.body}>
                <span>Fases :</span>
                <p>{props.fases}</p>
            </div>

        </div>
    );
}

export default Programa;