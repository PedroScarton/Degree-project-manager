import React from "react";

import Card from '../../../Shared/Components/UI/Card';
import InfoMemoria from "../../Shared/Components/ResumeInfoMemoria";

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
        </main>
    );
}

export default Activa;