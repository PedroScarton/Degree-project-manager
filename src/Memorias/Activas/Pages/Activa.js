import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import { getIdFromPath } from '../../../Shared/Utils/getId';

// Memory Components
import InfoMemoria from '../Components/InfoMemoria';
import ResumeInfoMemoria from '../../Shared/Components/ResumeInfoMemoria';
import Fases from '../../Shared/Components/Fases/Fases';
import MemoryFiles from './MemoryFiles';
import MemoryNotFound from '../../Shared/Components/MemoryNotFound';

// General components
import Card from '../../../Shared/Components/UI/Card';
import Fallback from '../../../Shared/Components/UI/Fallback';
import FormPage from '../../../Shared/Components/Layout/FormPage';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

// Styles
import classes from './Activa.module.css';

const Activa = () => {
  const location = useLocation();
  // Memory state
  const [memoryId, setMemoryId] = useState(getIdFromPath(location.pathname));
  const [memoryData, setMemoryData] = useState(undefined);
  const [evaluationId, setEvaluationId] = useState(undefined);
  // Page handler state
  const [principalPage, setPrincipalPage] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showFormPage, setShowFormPage] = useState(false);
  // Hooks
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    setMemoryId(getIdFromPath(location.pathname));
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

  const showDetailsHandler = (state) => {
    setPrincipalPage(!state);
    setShowDetails(state);
    setEvaluationId(undefined);
  };

  const showEvaluationHandler = (id) => {
    setPrincipalPage(false);
    setEvaluationId(id);
  };

  const showFormPageHandler = (state) => {
    setPrincipalPage(!state);
    setShowFormPage(state);
  };

  return isLoading ? (
    <LoadingSpinner contained />
  ) : memoryData ? (
    <div className={classes.container}>
      {principalPage && (
        <React.Fragment>
          <Card>
            <ResumeInfoMemoria
              title={memoryData.memoria.titulo}
              details={[new Date(memoryData.memoria.fecha_de_creacion).toLocaleDateString('en-US')]}
              members={memoryData.usuarios}
              goToDetails={() => showDetailsHandler(true)}
            />
          </Card>
          {/* <Fases
            goTo={showEvaluationHandler}
            openForm={() => showFormPageHandler(true)}
            fases={memoryData.memoria.fases}
          /> */}
        </React.Fragment>
      )}
      {showDetails && (
        <Card>
          <InfoMemoria
            title={memoryData.memoria.title}
            date={new Date(memoryData.memoria.fecha_de_creacion)}
            description={memoryData.memoria.description}
            members={memoryData.usuarios.filter((user) => user.rol === 'MEMORISTA')}
            teachers={memoryData.usuarios.filter((user) => user.rol !== 'MEMORISTA')}
            goBack={() => showDetailsHandler(false)}
          />
        </Card>
      )}
      {evaluationId && (
        <MemoryFiles evaluationId={evaluationId} goBack={() => showDetailsHandler(false)} />
      )}
      {showFormPage && <FormPage type="observación" goBack={() => showFormPageHandler(false)} />}
    </div>
  ) : (
    <MemoryNotFound />
  );
};

export default Activa;
