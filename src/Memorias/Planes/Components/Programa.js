import React from "react";

import EliminarIcon from '../../../Assets/icons/eliminar.svg';
import EditarIcon from '../../../Assets/icons/editar.svg';
import classes from './Programa.module.css';

const Programa = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <h3>{props.code}</h3>
                <div className={classes.buttons}>
                    <button>
                        <img src={EliminarIcon} alt="" />
                    </button>
                    <button>
                        <img src={EditarIcon} alt="" />
                    </button>
                </div>
            </div>
            {props.fases &&
                props.fases.map((fase) => (
                    <div className={classes.bodyDetail}>
                        <span>{fase.name}</span>
                        <p>{new Date(fase.date).toLocaleDateString('en-US')}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Programa;