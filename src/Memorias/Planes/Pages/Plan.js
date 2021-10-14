import React from "react";

import Card from '../../../Shared/Components/UI/Card';
import Programas from '../Components/Programas';
import PlanEstudio from '../Components/PlanEstudio';
import classes from './Plan.module.css';
import AddButton from "../Components/AddButton";

const Plan = () => {
    return (
        <main className={classes.container}>
            <Card>
                <PlanEstudio
                    name="Diurno"
                    code="D-021"
                    fases="PT1, PT2, Defensa"
                />
            </Card>
            <div className={classes.title}>
                <h1>Programas del plan</h1>
            </div>
            <div className={classes.body}>
                <AddButton text="Agendar programa" />
                <Programas />
            </div>
        </main>
    );
}

export default Plan;