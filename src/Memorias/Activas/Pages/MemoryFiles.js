import React, { useEffect, useState } from 'react';

import { useHistory, useParams, useLocation } from 'react-router-dom';

import Card from '../../../Shared/Components/UI/Card';
import Title from '../../Shared/Layout/Title';
import ArchivosFase from '../../Shared/Components/ArchivosFase';
import FormModal from '../../../Shared/Components/Layout/FormModal';
import DateForm from '../Components/DateForm';

import classes from './MemoryFiles.module.css';

const dummy_data = {
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar...',
  active: {
    active: true,
  },
  finished: {
    active: false,
  },
  teachers: [
    {
      nombre: 'Pedro Scarton',
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
  ],
  members: [
    {
      index: 1,
      rut: '20.207.855-5',
      nombre: 'Pedro Scarton',
      correo: 'correoMalo11@gmail.com',
    },
    {
      index: 2,
      rut: '20.207.855-5',
      nombre: 'Ignacio Araya Neira',
      correo: 'correoMalo11@gmail.com',
      file: true,
    },
  ],
};

const MemoryFiles = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const history = useHistory();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log('faseId: ' + params.evaluationId);
    if (location.state.isActive) {
      setIsActive(true);
    }
    console.log(location.state);
    console.log('Cargando archivos desde el backend');
  }, [params, location.state]);

  const goBackHandler = () => {
    history.goBack();
  };

  const dateChangeModalHandler = (state) => {
    setIsOpen(state);
  };

  const onDateChange = (value) => {
    console.log(value);
    dateChangeModalHandler(false);
  };

  const sendNotification = (user) => {
    console.log(user);
  };

  return (
    <React.Fragment>
      <Card>
        <Title goBack={goBackHandler}>
          <div className={classes.headTitle}>
            <h1>{dummy_data.title}</h1>
            <p>{new Date().toLocaleDateString('en-US')}</p>
          </div>
        </Title>
        <ArchivosFase
          onDateChange={() => dateChangeModalHandler(true)}
          active={isActive}
          evaluations={dummy_data.teachers}
          observations={dummy_data.members}
          sendNotification={sendNotification}
        />
      </Card>
      <FormModal
        title="Modificación de fecha"
        open={isOpen}
        onClose={() => dateChangeModalHandler(false)}
      >
        <DateForm onSubmit={onDateChange} />
      </FormModal>
    </React.Fragment>
  );
};

export default MemoryFiles;
