import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../../Shared/Components/UI/Card';
import FormModal from '../../../Shared/Components/Layout/FormModal';
import Programas from '../Components/Programas';
import PlanEstudio from '../Components/PlanEstudio';
import AddButton from '../Components/AddButton';
import EditPlanForm from '../Components/EditPlanForm';
import ProgramaForm from '../Components/ProgramaForm';

import classes from './Plan.module.css';

const Plan = (props) => {
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProgramaModalOpen, setIsProgramaModalOpen] = useState(false);
  const [programas, setProgramas] = useState(undefined);

  // fetch data from server
  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching', params.id);
    };
    return fetchData();
  });

  const modalHandler = (state) => {
    setIsModalOpen(state);
  };
  const programaModalHandler = (state) => {
    setIsProgramaModalOpen(state);
  };
  const onEditHandler = (values) => {
    console.log(values);
  };
  const onEditPrograma = (values) => {
    console.log(values);
  };
  const onDeletePlanHandler = () => {
    console.log('Programa eliminado');
  };
  return (
    <div className={classes.container}>
      <div>
        <Card>
          <PlanEstudio
            onDelete={onDeletePlanHandler}
            onEdit={() => modalHandler(true)}
            name="Diurno"
            code="D-021"
            fases="PT1, PT2, Defensa"
          />
        </Card>
        <div className={classes.title}>
          <h1>Programas del plan</h1>
        </div>
        <div className={classes.body}>
          <AddButton text="Agendar programa" />
          <Programas programas={programas} />
        </div>
      </div>
      <FormModal
        title="Editar plan de estudio"
        open={isModalOpen}
        onClose={() => modalHandler(false)}
      >
        <EditPlanForm edit onSubmit={onEditHandler} />
      </FormModal>
      <FormModal
        title="Editar programa"
        open={isProgramaModalOpen}
        onClose={() => programaModalHandler(false)}
      >
        <ProgramaForm edit onSubmit={onEditPrograma} />
      </FormModal>
    </div>
  );
};

export default Plan;
