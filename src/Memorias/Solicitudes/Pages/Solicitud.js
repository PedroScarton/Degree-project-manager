import React, { useEffect, useState } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import { useForm } from '../../../Shared/Hooks/form-hook';
import { useTeachers } from '../../../Shared/Hooks/teacher-hook';
import { getIdFromPath } from '../../../Shared/Utils/getId';

// Memory components
import ResumeInfoMemoria from '../../Shared/Components/ResumeInfoMemoria';
import MemoryNotFound from '../../Shared/Components/MemoryNotFound';

// General components
import Card from '../../../Shared/Components/UI/Card';
import Button from '../../../Shared/Components/FormElements/Button';
import FormModal from '../../../Shared/Components/Layout/FormModal';
import SectionHeader from '../../Shared/Components/Header';
import Output from '../../../Shared/Components/FormElements/Output';
import InputSelect from '../../../Shared/Components/FormElements/InputSelect';
import Fallback from '../../../Shared/Components/UI/Fallback';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

// Styles
import classes from './Solicitud.module.css';
import { VALIDATOR_REQUIRE } from '../../../Shared/Utils/validators';

const Solicitud = () => {
  const location = useLocation();
  const history = useHistory();
  // Memory Data States
  const [memoryId, setMemoryId] = useState(getIdFromPath(location.pathname));
  const [memoryData, setMemoryData] = useState(undefined);
  // Input Handler States
  const [informante1, setInformante1] = useState(undefined);
  const [informante2, setInformante2] = useState(undefined);
  const [informante3, setInformante3] = useState(undefined);
  const [guia, setGuia] = useState(undefined);
  // Visual States
  const [teacherType, setTeacherType] = useState(false);
  // Hooks
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { teacher } = useTeachers();
  const inputs = {
    teacher: { value: '', isValid: false },
  };
  const [formState, inputHandler] = useForm(inputs, false);

  // Cargando el id desde la url
  useEffect(() => {
    setMemoryId(getIdFromPath(location.pathname));
    setInformante1(undefined);
    setInformante2(undefined);
    setInformante3(undefined);
    setGuia(undefined);
    setTeacherType(false);
  }, [location]);

  // load the memory
  useEffect(() => {
    const fetchData = async (id) => {
      if (id) {
        try {
          const response = await sendRequest(
            process.env.REACT_APP_BACKEND_URL + `/usuario-x-memoria?id_memoria=${id}`
          );
          setMemoryData(response.details);
        } catch (err) {}
      }
    };
    return fetchData(memoryId);
  }, [sendRequest, memoryId]);

  if (!memoryId) {
    return <Fallback />;
  }

  const memoryHandler = async (type) => {
    const estado = type ? 'EN_CURSO' : 'RECHAZADA';
    console.log(estado);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/memorias?id=${memoryId}`,
        'PUT',
        { estado: estado },
        {
          'Content-type': 'application/json',
        }
      );
      history.push('/memorias');
    } catch (err) {}
  };

  const openModal = (type) => {
    setTeacherType(type);
  };

  const setTeacher = (e, type, value) => {
    e.preventDefault();
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
    setTeacherType(false);
  };

  return isLoading ? (
    <LoadingSpinner contained />
  ) : memoryData ? (
    <div className={classes.container}>
      <Card>
        <ResumeInfoMemoria
          title={memoryData.memoria.titulo}
          details={[new Date(memoryData.memoria.fecha_de_creacion).toLocaleDateString('en-US')]}
          members={memoryData.usuarios}
        />
        <SectionHeader title="Información de solicitud">
          <p className={classes.description}>{memoryData.memoria.descripcion}</p>
        </SectionHeader>
        <SectionHeader title="Selección de profesores">
          <div>
            <div className={classes.miniSection}>
              <div className={classes.miniSectionHeader}>
                <h5>Profesor guía solicitado</h5>
              </div>
              <Output
                action={'Modificar'}
                onCallAction={() => openModal('guia')}
                title={'Nombre'}
                detail={guia}
              />
            </div>
            <div className={classes.miniSection}>
              <div className={classes.miniSectionHeader}>
                <h5>Profesores informantes</h5>
              </div>
              <Output
                action={'Modificar'}
                onCallAction={() => openModal('informante1')}
                title={'Nombre'}
                detail={informante1}
              />
              <Output
                action={'Modificar'}
                onCallAction={() => openModal('informante2')}
                title={'Nombre'}
                detail={informante2}
              />
              <Output
                action={'Modificar'}
                onCallAction={() => openModal('informante3')}
                title={'Nombre'}
                detail={informante3}
              />
            </div>
          </div>
        </SectionHeader>
        {/* <SectionHeader title="Asignación plan de estudio y fechas">
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
        </SectionHeader> */}
        <div className={classes.footer}>
          <div className={classes.btnContainer}>
            <Button onClick={() => memoryHandler(false)} secondary>
              Rechazar
            </Button>
          </div>
          <div className={classes.btnContainer}>
            <Button onClick={() => memoryHandler(true)}>Aprobar</Button>
          </div>
        </div>
      </Card>
      <FormModal title="Asignación de profesor" open={teacherType} onClose={closeHandler}>
        <form onSubmit={(event) => setTeacher(event, teacherType, formState.inputs.teacher.value)}>
          <InputSelect
            id="teacher"
            label="Profesor guía:"
            helperText="La selección de profesor guía es opcional"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            type="text"
            options={
              teacher &&
              teacher.map((teacher) => {
                return { name: teacher.nombre_completo };
              })
            }
          />
          <div className={classes.btnContainer2}>
            <Button type="submit">Asignar</Button>
          </div>
        </form>
      </FormModal>
    </div>
  ) : (
    <MemoryNotFound />
  );
};

export default Solicitud;
