import React from "react";
import AddButton from "../Components/AddButton";

import PlanesEstudio from '../Components/PlanesEstudio';
import classes from './Planes.module.css';

const Planes = () => {

    return (
        <main className={classes.container}>
            <div className={classes.title}>
                <h1>Planes de estudio</h1>
            </div>
            <div className={classes.body}>
                <AddButton text="Crear Plan de estudio" />
                <PlanesEstudio />
            </div>
        </main>
    );
}

export default Planes;