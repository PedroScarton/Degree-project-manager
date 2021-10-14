import React from "react";

import Card from '../../../Shared/Components/UI/Card';
import InfoMemoria from "../../Shared/Components/ResumeInfoMemoria";
import Fases from '../../Shared/Components/Fases/Fases';

import classes from './Activa.module.css';

const Activa = () => {
    return (
        <main className={classes.container}>
            <Card>
                <InfoMemoria
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar"
                    detail="fecha de solicitud"
                />
            </Card>
            <Fases approved={false}
                fases={[{ name: "PT1", state: "aprobada", initDate: new Date(), testDate: new Date(), calification: "6.3" },
                { name: "PT2", state: "en curso", initDate: new Date(), testDate: new Date(), calification: "" },
                { name: "Defensa", state: "por comenzar", initDate: null, testDate: null, calification: "" }]}
            />
        </main>
    );
}

export default Activa;