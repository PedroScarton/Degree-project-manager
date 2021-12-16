import React, { useEffect, useState } from 'react';

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
      id: 'p1',
      nombre: 'Pedro Scarton',
      correo: 'correoMalo11@gmail.com',
      guia: true,
      teacher: true,
      evaluation: {
        id: 'e1',
      },
    },
    {
      id: 'p2',
      index: '1',
      nombre: 'Ignacio Araya Neira',
      correo: 'correoMalo11@gmail.com',
      teacher: true,
      evaluation: {
        id: 'e2',
      },
      observation: {
        id: 'o4',
      },
    },
  ],
  members: [
    {
      id: 'm1',
      index: '1',
      rut: '20.207.855-5',
      nombre: 'Pedro Scarton',
      correo: 'correoMalo11@gmail.com',
      observation: {
        id: 'o1',
      },
    },
    {
      id: 'm2',
      index: '2',
      rut: '20.207.855-5',
      nombre: 'Ignacio Araya Neira',
      correo: 'correoMalo11@gmail.com',
      observation: {
        id: 'o2',
      },
    },
    {
      id: 'm3',
      index: '3',
      rut: '20.207.855-5',
      nombre: 'Pedro Scarton',
      correo: 'correoMalo11@gmail.com',
      observation: {
        id: 'o3',
      },
    },
  ],
};

const MemoryFiles = (props) => {
  // fetched data states
  const [evaluationData, setEvaluationData] = useState(undefined);
  // Visual states
  const [showPrincipal, setShowPrincipal] = useState(true);
  const [file, setFile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // dentro de este componente tengo que solicitar la informacion de archivos de la memoria
  // recibo si es activa
  // recibo la informacion de los archivos

  // fetching evaluation data
  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data', props.evaluationId);
    };
    fetchData();
  });

  const dateChangeModalHandler = (state) => {
    setIsOpen(state);
  };

  const onDateChange = (value) => {
    dateChangeModalHandler(false);
  };

  const showPrincipalHandler = () => {
    setFile(undefined);
    setShowPrincipal(true);
  };

  const onSelectFile = (type, id) => {
    console.log(type, id);
    // if (type === 'evaluación') {
    //   setFile(dummy_data.evaluations.filter((file) => file.id === id));
    // } else {
    //   setFile(dummy_data.observations.filter((file) => file.id === id));
    // }
    // setShowPrincipal(false);
  };

  return (
    <div className={classes.container}>
      {showPrincipal && (
        <>
          <Card>
            <Title goBack={props.goBack}>
              <div className={classes.headTitle}>
                <h1>{dummy_data.title}</h1>
                <p>{new Date().toLocaleDateString('en-US')}</p>
              </div>
            </Title>
            <ArchivosFase
              onDateChange={() => dateChangeModalHandler(true)}
              onOpenFile={onSelectFile}
              active={true} // debe cambiar al valor que venga del backend
              teachers={dummy_data.teachers}
              students={dummy_data.members}
            />
          </Card>
          <FormModal
            title="Modificación de fecha"
            open={isOpen}
            onClose={() => dateChangeModalHandler(false)}
          >
            <DateForm onSubmit={onDateChange} />
          </FormModal>
        </>
      )}
      {file && <div>hola</div>}
    </div>
  );
};

export default MemoryFiles;
