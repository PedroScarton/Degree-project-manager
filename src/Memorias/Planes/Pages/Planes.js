import React, { useState, useEffect, useCallback } from 'react';

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

const Planes = () => {
  // fetched states
  const [fetchPlans, setFetchPlans] = useState([]);
  // visual states
  const [isModalOpen, setIsModalOpen] = useState(false);
  // hooks
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const fetchPlanes = useCallback(async () => {
    try {
      const response = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/planes');
      setFetchPlans(response.planes);
    } catch (err) {}
  }, [sendRequest]);

  useEffect(() => {
    return fetchPlanes();
  }, [sendRequest, fetchPlanes]);

  const modalHandler = (state) => {
    setIsModalOpen(state);
  };

  const onAddPlan = async (values) => {
    try {
      await sendRequest(process.env.REACT_APP_BACKEND_URL + '/planes', 'POST', values, {
        'Content-type': 'application/json',
      });
      await fetchPlanes();
      modalHandler(false);
    } catch (err) {}
  };

  const onDeleteHandler = async (id) => {
    try {
      await sendRequest(process.env.REACT_APP_BACKEND_URL + `/planes?id=${id}`, 'DELETE');
      await fetchPlanes();
    } catch (err) {}
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
          <PlanesEstudio planes={fetchPlans} onDelete={onDeleteHandler} />
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
