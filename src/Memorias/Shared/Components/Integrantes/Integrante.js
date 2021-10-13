import React from "react";

import Output from "../../../../Shared/Components/FormElements/Output";

import classes from './Integrante.module.css';

const Integrante = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h3>Integrante {props.index + 1}</h3>
            </div>
            <div className={classes.info}>
                <Output title="Rut" detail={props.rut} />
                <Output title="Nombre" detail={props.nombre} />
                <Output title="Correo" detail={props.correo} />
            </div>
        </div>
    );
}

export default Integrante;