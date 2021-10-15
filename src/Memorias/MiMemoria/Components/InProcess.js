import React from "react";

import Card from '../../../Shared/Components/UI/Card';
import ResumeInfoMemoria from "../../Shared/Components/ResumeInfoMemoria";
import classes from './InProcess.module.css';

const InProcess = () => {

    const goToDetails = () => {
        console.log = ("hola")
    }

    return (
        <div className={classes.container}>
            <Card>
                <ResumeInfoMemoria
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar..."
                    details={[new Date().toLocaleDateString('en-US')]}
                    members={[{
                        rut: '20.207.855-5',
                        nombre: 'Ignacio Araya Neira',
                        correo: 'correoMalo1reoMalo1reoMalo1reoMalo1reoMalo1reoMalo1reoMalo11@gmail.com',
                    },
                    {
                        rut: '20.207.855-5',
                        nombre: 'Ignacio Araya Neira',
                        correo: 'correoMalo11@gmail.com',
                    }]}
                    goToDetails={goToDetails}
                />
            </Card>
        </div>
    );
}

export default InProcess;