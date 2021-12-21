import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../Shared/Context/auth-context';
import { useHttpClient } from '../../../Shared/Hooks/http-hook';

// Memory Components
import InfoMemoria from '../../Activas/Components/InfoMemoria';
import MemoryFiles from '../../Activas/Pages/MemoryFiles';
import ResumeInfoMemoria from '../../Shared/Components/ResumeInfoMemoria';
import Fases from '../../Shared/Components/Fases/Fases';
import MemoryNotFound from '../../Shared/Components/MemoryNotFound';

// General components
import Card from '../../../Shared/Components/UI/Card';
import FormPage from '../../../Shared/Components/Layout/FormPage';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

// Styles
import classes from '../../Activas/Pages/Activa.module.css';

const InProccess = () => {
  const auth = useContext(AuthContext);

  // Memory State
  const [memoryData, setMemoryData] = useState(undefined);
  const [evaluationId, setEvaluationId] = useState(undefined);

  // Page Handler State
  const [principalPage, setPrincipalPage] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showFormPage, setShowFormPage] = useState(false);

  // Hooks
  // eslint-disable-next-line
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // load the memory
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/usuario-x-memoria/por-usuario?id_usuario=${auth.id}`
        );
        setMemoryData(response.memoria);
      } catch (err) {}
    };
    return fetchData();
  }, [sendRequest, auth.id]);

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
              members={memoryData.usuarios.filter((usuario) => usuario.rol === 'MEMORISTA')}
              goToDetails={() => showDetailsHandler(true)}
            />
          </Card>
          <Fases
            student
            actual={memoryData.fase_actual}
            openForm={() => showFormPageHandler(true)}
            fases={memoryData.memoria.fases}
            users={memoryData.usuarios}
            goTo={showEvaluationHandler}
          />
        </React.Fragment>
      )}
      {showDetails && (
        <Card>
          <InfoMemoria
            title={memoryData.memoria.titulo}
            date={new Date(memoryData.memoria.fecha_de_creacion)}
            description={memoryData.memoria.description}
            members={memoryData.usuarios.filter((user) => user.rol === 'MEMORISTA')}
            teachers={memoryData.usuarios.filter((user) => user.rol !== 'MEMORISTA')}
            goBack={() => showDetailsHandler(false)}
          />
        </Card>
      )}
      {evaluationId && (
        <MemoryFiles
          teachers={memoryData.usuarios.filter((user) => user.rol !== 'MEMORISTA')}
          members={memoryData.usuarios.filter((user) => user.rol === 'MEMORISTA')}
          fases={memoryData.memoria.fases}
          actual={memoryData.fase_actual}
          fase={evaluationId}
          goBack={() => showDetailsHandler(false)}
        />
      )}
      {showFormPage && <FormPage type="evaluacion" goBack={() => showFormPageHandler(false)} />}
    </div>
  ) : (
    <MemoryNotFound />
  );
};

export default InProccess;
