import React, { useState } from 'react';
import Output from '../../../Shared/Components/FormElements/Output';

import Card from '../../../Shared/Components/UI/Card';
import Button from '../../../Shared/Components/FormElements/Button';
import FormModal from '../../../Shared/Components/Layout/FormModal';
import SectionHeader from '../../Shared/Components/Header';
import ResumeInfoMemoria from '../../Shared/Components/ResumeInfoMemoria';
import TeacherForm from '../Components/TeacherForm';

import classes from './Solicitud.module.css';
import InputSelect from '../../../Shared/Components/FormElements/InputSelect';

const Solicitud = (props) => {
  const [informante1, setInformante1] = useState(undefined);
  const [informante2, setInformante2] = useState(undefined);
  const [informante3, setInformante3] = useState(undefined);
  const [guia, setGuia] = useState(undefined);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const profesorGuiaHandler = () => {
    console.log('seleccion de profesor guia');
  };

  const memoryHandler = (type) => {
    console.log(type);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const setTeacher = (value, type) => {
    console.log('profesor asignado');
    switch (type) {
      case 'guia':
        setGuia(value);
        break;
      case 'informante1':
        setInformante1(value);
        break;
      case 'informante2':
        setInformante2(value);
        break;
      case 'informante3':
        setInformante3(value);
        break;
      default:
        break;
    }
    closeHandler();
  };

  const closeHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <Card>
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
        />
        <SectionHeader title="Información de solicitud">
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet orci eu
            dignissim suscipit. Maecenas ornare lorem fermentum nunc sagittis, in accumsan lacus
            tristique. Phasellus ut elit quis metus porta efficitur sed at urna. Suspendisse tempus
            neque nec condimentum vulputate. Donec varius nibh enim, eget tempor diam malesuada eu.
            Etiam nunc felis, interdum ac semper in, mollis ac lorem. Quisque ut dictum quam, eget
            gravida diam. Nunc sed ligula eget urna interdum vulputate id et dui. Praesent a metus
            tempor, semper enim eu, eleifend nisi. Nunc euismod, elit sit amet commodo ornare, eros
            lectus iaculis nisi, ut imperdiet augue libero quis augue. <br />
            <br />
            Proin at erat non nulla dignissim aliquam. Sed eget iaculis quam. Proin ligula sem,
            efficitur a tincidunt vel, lacinia nec sapien. Phasellus nec ligula nibh. Vestibulum
            aliquet, est ac dapibus elementum, nisl odio facilisis tortor, vel maximus felis nulla
            eu metus. Pellentesque sit amet ultrices magna, ac cursus orci. Ut auctor mauris quam,
            sit amet posuere tellus posuere et. Phasellus volutpat, quam sit amet sagittis bibendum,
            erat quam hendrerit eros, sed consequat ligula nulla lobortis purus. Mauris lacus urna,
            ultrices et mi ut, tempor posuere nunc.
          </p>

        </SectionHeader>
        <SectionHeader title="Formato de solicitud Ucen">
          <div style={{ width: "50%" }}>
            <Output file
              title="Solicitud formal"
            />
          </div>
        </SectionHeader>
        <SectionHeader title="Selección de profesores">
          <div>
            <div className={classes.miniSection}>
              <div className={classes.miniSectionHeader}>
                <h5>Profesor guía solicitado</h5>
              </div>
              <Output
                action={'Modificar'}
                onCallAction={openModal}
                title={'Nombre'}
                detail={'Hernan Olmi'}
              />
            </div>
            <div className={classes.miniSection}>
              <div className={classes.miniSectionHeader}>
                <h5>Profesores informantes</h5>
              </div>
              <Output
                action={'Modificar'}
                onCallAction={openModal}
                title={'Nombre'}
                detail={'Hernan Olmi'}
              />
              <Output
                action={'Modificar'}
                onCallAction={openModal}
                title={'Nombre'}
                detail={'Hernan Olmi'}
              />
              <Output
                action={'Modificar'}
                onCallAction={openModal}
                title={'Nombre'}
                detail={'Hernan Olmi'}
              />
            </div>
          </div>
        </SectionHeader>
        <SectionHeader title="Asignación plan de estudio y fechas">
          <div className={classes.plan}>
            <InputSelect
              label="Plan de estudio: "
              helperText="Corresponde al tipo de matricula de/los alumnos"
            />
            <InputSelect
              label="Programa semestral: "
              helperText="Corresponde a la planificación de fechas que seguirá la memoria"
            />
          </div>
        </SectionHeader>
        <div className={classes.footer}>
          <div className={classes.btnContainer}>
            <Button onClick={() => memoryHandler('reject')} secondary>
              Rechazar
            </Button>
          </div>
          <div className={classes.btnContainer}>
            <Button onClick={() => memoryHandler('aprove')}>Aprobar</Button>
          </div>
        </div>
      </Card>
      <FormModal title="Asignación de profesor" open={isModalOpen} onClose={closeHandler}>
        <TeacherForm onSubmit={setTeacher} />
      </FormModal>
    </React.Fragment>
  );
};

export default Solicitud;
