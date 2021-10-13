import React from 'react';

import Card from '../../../Shared/Components/UI/Card';
import AñadirIcon from '../../../Assets/icons/añadir.svg';
import Programa from './Programa';
import classes from './Programas.module.css';

const Programas = () => {
    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <h1>Programas de Estudio</h1>
                <button>
                    <img src={AñadirIcon} alt="" />
                </button>
            </div>
            <div className={classes.body}>
                <Card>
                    <Programa
                        name="Diurno"
                        code="D-021"
                        fases="PT1, PT2, Defensa"
                    />
                </Card>
                <Card>
                    <Programa
                        name="Diurno"
                        code="D-021"
                        fases="PT1, PT2, Defensa"
                    />
                </Card>
                <Card>
                    <Programa
                        name="Diurno"
                        code="D-021"
                        fases="PT1, PT2, Defensa"
                    />
                </Card>
                <Card>
                    <Programa
                        name="Diurno"
                        code="D-021"
                        fases="PT1, PT2, Defensa"
                    />
                </Card>
                <Card>
                    <Programa
                        name="Diurno"
                        code="D-021"
                        fases="PT1, PT2, Defensa"
                    />
                </Card>

            </div>
        </div>
    );
}

export default Programas;