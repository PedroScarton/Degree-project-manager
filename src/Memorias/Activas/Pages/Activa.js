import React, { useState } from 'react';

import Card from '../../../Shared/Components/UI/Card';
import InfoMemoria from '../Components/InfoMemoria';
import ResumeInfoMemoria from '../../Shared/Components/ResumeInfoMemoria';

import classes from './Activa.module.css';

const Activa = () => {
    const [principalPage, setPrincipalPage] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const showDetailsHandler = (state) => {
        setPrincipalPage(!state);
        setShowDetails(state);
    };
    return (
        <Card>
            {principalPage && (
                <React.Fragment>
                    <ResumeInfoMemoria
                        title={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar...'
                        }
                        details={[new Date().toLocaleDateString('en-US')]}
                        members={[
                            {
                                rut: '20.207.855-5',
                                nombre: 'Ignacio Araya Neira',
                                correo: 'correoMalo1reoMalo1reoMalo1reoMalo1reoMalo1reoMalo1reoMalo11@gmail.com',
                            },
                            {
                                rut: '20.207.855-5',
                                nombre: 'Ignacio Araya Neira',
                                correo: 'correoMalo11@gmail.com',
                            },
                        ]}
                        goToDetails={() => showDetailsHandler(true)}
                    />
                </React.Fragment>
            )}
            {showDetails && (
                <InfoMemoria
                    title={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar...'
                    }
                    date={new Date()}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet orci eu dignissim suscipit. Maecenas ornare lorem fermentum nunc sagittis, in accumsan lacus tristique. Phasellus ut elit quis metus porta efficitur sed at urna. Suspendisse tempus neque nec condimentum vulputate. Donec varius nibh enim, eget tempor diam malesuada eu. Etiam nunc felis, interdum ac semper in, mollis ac lorem. Quisque ut dictum quam, eget gravida diam. Nunc sed ligula eget urna interdum vulputate id et dui. Praesent a metus tempor, semper enim eu, eleifend nisi. Nunc euismod, elit sit amet commodo ornare, eros lectus iaculis nisi, ut imperdiet augue libero quis augue.
          
Proin at erat non nulla dignissim aliquam. Sed eget iaculis quam. Proin ligula sem, efficitur a tincidunt vel, lacinia nec sapien. Phasellus nec ligula nibh. Vestibulum aliquet, est ac dapibus elementum, nisl odio facilisis tortor, vel maximus felis nulla eu metus. Pellentesque sit amet ultrices magna, ac cursus orci. Ut auctor mauris quam, sit amet posuere tellus posuere et. Phasellus volutpat, quam sit amet sagittis bibendum, erat quam hendrerit eros, sed consequat ligula nulla lobortis purus. Mauris lacus urna, ultrices et mi ut, tempor posuere nunc.`}
                    members={[
                        {
                            index: 1,
                            rut: '20.207.855-5',
                            nombre: 'Ignacio Araya Neira',
                            correo: 'correoMalo11@gmail.com',
                        },
                        {
                            index: 2,
                            rut: '20.207.855-5',
                            nombre: 'Ignacio Araya Neira',
                            correo: 'correoMalo11@gmail.com',
                        },
                    ]}
                    teachers={[
                        {
                            nombre: 'Ignacio Araya Neira',
                            correo: 'correoMalo11@gmail.com',
                            guia: true,
                            teacher: true,
                        },
                        {
                            index: 1,
                            nombre: 'Ignacio Araya Neira',
                            correo: 'correoMalo11@gmail.com',
                            teacher: true,
                        },
                    ]}
                    goBack={() => showDetailsHandler(false)}
                />
            )}
        </Card>
    );
};

export default Activa;
