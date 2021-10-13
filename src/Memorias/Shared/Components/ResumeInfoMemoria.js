import React from "react";

import classes from './ResumeInfoMemoria.module.css';
import Integrantes from "./Integrantes/Integrantes";
import Button from '../../../Shared/Components/FormElements/Button';

const ResumeInfoMemoria = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <h1>{props.title}</h1>
                <p>{props.detail}</p>
            </div>
            <Integrantes members={[{ rut: '20.207.855-5', nombre: 'Ignacio Araya Neira', correo: 'correoMalo11@gmail.com' }, { rut: '20.207.855-5', nombre: 'Ignacio Araya Neira', correo: 'correoMalo11@gmail.com' }]} />
            <div className={classes.footer}>
                <Button outlined>
                    Ver información de memoria
                </Button>
            </div>

        </div>
    );
}

export default ResumeInfoMemoria;