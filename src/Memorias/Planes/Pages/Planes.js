import React from "react";

import Programas from '../Components/';
import Semestres from '../Components/Semestres';
import classes from './Planes.module.css';

const ProgramasFechas = () => {

    return (
        <main className={classes.container}>
            <Programas />
            <Semestres />
        </main>
    );
}

export default ProgramasFechas;