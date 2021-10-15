import React, { useState } from 'react';

import Card from '../../../Shared/Components/UI/Card';
import FormModal from '../../../Shared/Components/Layout/FormModal';
import Programas from '../Components/Programas';
import PlanEstudio from '../Components/PlanEstudio';
import AddButton from '../Components/AddButton';
import EditPlanForm from '../Components/EditPlanForm';
import ProgramaForm from '../Components/ProgramaForm';

import classes from './Plan.module.css';

const Plan = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProgramaModalOpen, setIsProgramaModalOpen] = useState(false);
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
    <React.Fragment>
      <div className={classes.container}>
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
          <Programas />
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
    </React.Fragment>
  );
};

export default Plan;
