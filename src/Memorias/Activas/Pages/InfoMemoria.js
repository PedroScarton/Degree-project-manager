import React from "react";

import Card from '../../../Shared/Components/UI/Card';
import Integrantes from "../../Shared/Components/Integrantes/Integrantes";
import Docentes from "../Components/Docentes";
import Title from '../../Shared/Components/Layout/Title';

import classes from './InfoMemoria.module.css';

const InfoMemoria = (props) => {
    return (
        <div className={classes.container}>
            <Card>
                <div className={classes.head}>
                    <Title>
                        <div className={classes.headTitle}>
                            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar</h1>
                            <p>Fecha de solicitud</p>
                        </div>
                    </Title>
                </div>
                <div className={classes.body}>
                    <div className={classes.description}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet orci eu dignissim suscipit. Maecenas ornare lorem fermentum nunc sagittis, in accumsan lacus tristique. Phasellus ut elit quis metus porta efficitur sed at urna. Suspendisse tempus neque nec condimentum vulputate. Donec varius nibh enim, eget tempor diam malesuada eu. Etiam nunc felis, interdum ac semper in, mollis ac lorem. Quisque ut dictum quam, eget gravida diam. Nunc sed ligula eget urna interdum vulputate id et dui. Praesent a metus tempor, semper enim eu, eleifend nisi.

                            Nunc euismod, elit sit amet commodo ornare, eros lectus iaculis nisi, ut imperdiet augue libero quis augue. Proin at erat non nulla dignissim aliquam. Sed eget iaculis quam. Proin ligula sem, efficitur a tincidunt vel, lacinia nec sapien. Phasellus nec ligula nibh. Vestibulum aliquet, est ac dapibus elementum, nisl odio facilisis tortor, vel maximus felis nulla eu metus. Pellentesque sit amet ultrices magna, ac cursus orci. Ut auctor mauris quam, sit amet posuere tellus posuere et. Phasellus volutpat, quam sit amet sagittis bibendum, erat quam hendrerit eros, sed consequat ligula nulla lobortis purus. Mauris lacus urna, ultrices et mi ut, tempor posuere nunc.</p>
                    </div>
                    <div className={classes.members}>
                        <h3>Información del grupo</h3>
                        <Integrantes members={[{ rut: '20.207.855-5', nombre: 'Ignacio Araya Neira', correo: 'correoMalo11@gmail.com' }, { rut: '20.207.855-5', nombre: 'Ignacio Araya Neira', correo: 'correoMalo11@gmail.com' }]} />
                    </div>
                    <div className={classes.teachers}>
                        <h3>Información de los docentes</h3>
                        <Docentes
                            guia={{ nombre: "Pedro Scarton", correo: "correoDocente@gmail.com" }}
                            informante1={{ nombre: "Ignacio Araya", correo: "correoDocente@gmail.com" }}
                            informante2={{ nombre: null, correo: null }}
                        />
                    </div>
                </div>

            </Card>
        </div>
    );
}

export default InfoMemoria;