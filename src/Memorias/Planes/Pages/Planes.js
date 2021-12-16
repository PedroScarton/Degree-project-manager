import React, { useEffect, useState } from 'react';

import PlanesEstudio from '../Components/PlanesEstudio';
import AddButton from '../Components/AddButton';
import FormModal from '../../../Shared/Components/Layout/FormModal';
import EditPlanForm from '../Components/EditPlanForm';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

import classes from './Planes.module.css';

const Planes = () => {
  // fetched states
  const [fetchPlans, setFetchPlans] = useState([]);
  // visual states
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data');
    };
    return fetchData;
  }, []);

  const modalHandler = (state) => {
    setIsModalOpen(state);
  };
  const onAddPlan = () => {
    console.log('Plan agregado');
  };
  const onDeleteHandler = (id) => {
    console.log(id);
  };

  return isLoading ? (
    <LoadingSpinner contained />
  ) : (
    <div className={classes.container}>
      <div>
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
    </div>
  );
};

export default Planes;
