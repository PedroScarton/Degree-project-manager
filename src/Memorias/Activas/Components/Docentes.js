import React from "react";

import Output from "../../../Shared/Components/FormElements/Output";

import classes from './Docentes.module.css';

const Docentes = (props) => {
    return (<div className={classes.container}>
        <div className={classes.teacher}>
            <div className={classes.teacherPosition}>
                <p>Guía</p>
            </div>
            <div className={classes.teacherInfo}>
                <div className={classes.teacherInfoDetail}>
                    <Output
                        title="Nombre"
                        detail={props.guia.nombre ?? 'Información no disponible'}
                    />

                </div>
                <div className={classes.teacherInfoDetail}>
                    <Output
                        title="Correo"
                        detail={props.guia.correo ?? 'Información no disponible'}
                    />

                </div>
            </div>
        </div>
        <div className={classes.teacher}>
            <div className={classes.teacherPosition}>
                <p>Informante 1</p>
            </div>
            <div className={classes.teacherInfo}>
                <div className={classes.teacherInfoDetail}>
                    <Output
                        title="Nombre"
                        detail={props.informante1.nombre ?? 'Información no disponible'}
                    />

                </div>
                <div className={classes.teacherInfoDetail}>
                    <Output
                        title="Correo"
                        detail={props.informante1.correo ?? 'Información no disponible'}
                    />

                </div>
            </div>
        </div>
        <div className={classes.teacher}>
            <div className={classes.teacherPosition}>
                <p>Informante 2</p>
            </div>
            <div className={classes.teacherInfo}>
                <div className={classes.teacherInfoDetail}>
                    <Output
                        title="Nombre"
                        detail={props.informante2.nombre ?? 'Información no disponible'}
                    />
                </div>
                <div className={classes.teacherInfoDetail}>
                    <Output
                        title="Correo"
                        detail={props.informante2.correo ?? 'Información no disponible'}
                    />
                </div>
            </div>
        </div>
    </div>);
}

export default Docentes;