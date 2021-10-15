import React, { useState } from 'react';

import PlanesEstudio from '../Components/PlanesEstudio';
import AddButton from '../Components/AddButton';
import FormModal from '../../../Shared/Components/Layout/FormModal';
import EditPlanForm from '../Components/EditPlanForm';

import classes from './Planes.module.css';

const Planes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandler = (state) => {
    setIsModalOpen(state);
  };
  const onAddPlan = () => {
    console.log('Plan agregado');
  };
  const onDeleteHandler = (id) => {
    console.log(id);
  };
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Planes de estudio</h1>
        </div>
        <div className={classes.body}>
          <AddButton onClick={() => modalHandler(true)} text="Crear plan de estudio" />
          <PlanesEstudio onDelete={onDeleteHandler} />
        </div>
      </div>
      <FormModal
        title="Agregar plan de estudio"
        open={isModalOpen}
        onClose={() => modalHandler(false)}
      >
        <EditPlanForm onSubmit={onAddPlan} />
      </FormModal>
    </React.Fragment>
  );
};

export default Planes;
