import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useHttpClient } from '../../../Shared/Hooks/http-hook';

// Programas Components
import Programas from '../Components/Programas';
import PlanEstudio from '../Components/PlanEstudio';
import AddButton from '../Components/AddButton';
import ProgramaForm from '../Components/ProgramaForm';

// General Components
import Card from '../../../Shared/Components/UI/Card';
import FormModal from '../../../Shared/Components/Layout/FormModal';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

import classes from './Plan.module.css';

const Plan = () => {
  const params = useParams();
  // Programas state
  const [programas, setProgramas] = useState(undefined);
  const [plan, setPlan] = useState(undefined);
  // Visual state
  const [isModalOpen, setIsModalOpen] = useState(false);
  // hooks
  // eslint-disable-next-line
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const fetchPrograms = useCallback(async () => {
    try {
      const response = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/planes/one?id=${params.id}`
      );
      setPlan(response.planes);
      setProgramas(response.planes.programas);
    } catch (err) {}
  }, [sendRequest, params]);

  // fetch data from server
  useEffect(() => {
    return fetchPrograms();
  }, [sendRequest, fetchPrograms]);

  const programaModalHandler = (state) => {
    setIsModalOpen(state);
  };

  const addProgramHandler = async (values) => {
    try {
      const response = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/programas/`,
        'POST',
        { codigo: values.codigo, plan_id: plan.id },
        {
          'Content-type': 'application/json',
        }
      );
      const programId = response.programa.id;
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/fecha-limite/multiple`,
        'POST',
        {
          programa: programId,
          fases: values.fechas,
        },
        {
          'Content-type': 'application/json',
        }
      );
      await fetchPrograms();
      programaModalHandler(false);
    } catch (err) {}
  };

  const deleteProgram = async (id) => {
    await sendRequest(process.env.REACT_APP_BACKEND_URL + `/programas?id=${id}`, 'DELETE');
    await fetchPrograms();
  };

  return (
    <div className={classes.container}>
      {isLoading && <LoadingSpinner />}
      {plan && (
        <>
          <div>
            <Card>
              <PlanEstudio
                inner
                name={plan.nombre}
                code={plan.codigo}
                fases={plan.fases.join(', ')}
              />
            </Card>
            <div className={classes.title}>
              <h1>Programas del plan</h1>
            </div>
            <div className={classes.body}>
              <AddButton onClick={() => programaModalHandler(true)} text="Agregar programa" />
              <Programas deleteProgram={deleteProgram} programas={programas} />
            </div>
          </div>
          <FormModal
            title="Agregar programa"
            open={isModalOpen}
            onClose={() => programaModalHandler(false)}
          >
            <ProgramaForm onSubmit={addProgramHandler} fases={plan.fases} />
          </FormModal>
        </>
      )}
    </div>
  );
};

export default Plan;
