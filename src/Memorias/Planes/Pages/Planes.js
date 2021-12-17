import React, { useState, useEffect } from 'react';

import { useHttpClient } from '../../../Shared/Hooks/http-hook';

// Planes Components
import PlanesEstudio from '../Components/PlanesEstudio';
import AddButton from '../Components/AddButton';
import EditPlanForm from '../Components/EditPlanForm';

// General components
import FormModal from '../../../Shared/Components/Layout/FormModal';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

// Styles
import classes from './Planes.module.css';

const dummy_planes = [1, 2, 3, 4, 5];

const Planes = () => {
  // fetched states
  const [fetchPlans, setFetchPlans] = useState([]);
  // visual states
  const [isModalOpen, setIsModalOpen] = useState(false);
  // hooks
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/programas');
        setFetchPlans(response.programas);
      } catch (err) {}
    };
    return fetchData();
  }, [sendRequest]);

  const modalHandler = (state) => {
    setIsModalOpen(state);
  };
  const onAddPlan = async (values) => {
    // try {
    //   const response = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/programas');
    //   setFetchPlans(response.programas);
    // } catch (err) {}
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
          <PlanesEstudio planes={dummy_planes} onDelete={onDeleteHandler} />
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
