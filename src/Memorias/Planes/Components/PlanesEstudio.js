import React from 'react';

import Card from '../../../Shared/Components/UI/Card';
import PlanEstudio from './PlanEstudio';
import classes from './PlanesEstudio.module.css';

const Programas = () => {
    return (
        <div className={classes.container}>
            <Card>
                <PlanEstudio
                    name="Diurno"
                    code="D-021"
                    fases="PT1, PT2, Defensa"
                />
            </Card>
            <Card>
                <PlanEstudio
                    name="Diurno"
                    code="D-021"
                    fases="PT1, PT2, Defensa"
                />
            </Card>
            <Card>
                <PlanEstudio
                    name="Diurno"
                    code="D-021"
                    fases="PT1, PT2, Defensa"
                />
            </Card>
            <Card>
                <PlanEstudio
                    name="Diurno"
                    code="D-021"
                    fases="PT1, PT2, Defensa"
                />
            </Card>
            <Card>
                <PlanEstudio
                    name="Diurno"
                    code="D-021"
                    fases="PT1, PT2, Defensa"
                />
            </Card>
        </div>
    );
}

export default Programas;