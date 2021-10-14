import React from "react";

import Card from '../../../Shared/Components/UI/Card';
import Programa from './Programa';
import classes from './Programas.module.css';

const Programas = () => {
    return (
        <div className={classes.container}>
            <Card>
                <Programa
                    code="2021-02"
                    fases={[{ name: "PT1", date: new Date() }, { name: "PT2", date: new Date() }, { name: "Defensa", date: new Date() }]}
                />
            </Card>
            <Card>
                <Programa
                    code="2021-02"
                    fases={[{ name: "PT1", date: new Date() }, { name: "Defensa", date: new Date() }]}
                />
            </Card>
            <Card>
                <Programa
                    code="2021-02"
                    fases={[{ name: "PT1", date: new Date() }, { name: "PT2", date: new Date() }, { name: "Defensa", date: new Date() }]}
                />
            </Card>
        </div>
    );
}

export default Programas;