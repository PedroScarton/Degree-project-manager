import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import { getIdFromPath } from '../../../Shared/Utils/getId';

import Solicitud from './Solicitud';
import ListWrapper from '../../Shared/Layout/ListWrapper';
import GenericCard from '../../Shared/Components/GenericCard';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

import classes from './Solicitudes.module.css';

const Solicitudes = () => {
  const location = useLocation();

  // fetched data states
  const [memories, setMemories] = useState([]);
  const [memoryId, setMemoryId] = useState(undefined);
  // hooks
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/usuario-x-memoria/all?estado=PRE_INSCRIPCION'
        );
        setMemories(response.memorias);
      } catch (err) {}
    };
    return fetchData();
  }, [sendRequest]);

  // Cargando el id desde la url
  useEffect(() => {
    setMemoryId(+getIdFromPath(location.pathname));
  }, [location]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner contained />
      ) : (
        <>
          <ListWrapper title="Solicitudes entrantes">
            {memories &&
              memories.map((memory, index) => (
                <GenericCard
                  selected={memoryId}
                  id={memory.memoria.id}
                  key={memory.memoria.id}
                  title={memory.memoria.titulo}
                  details={[new Date(memory.memoria.fecha_de_creacion).toLocaleDateString('en-US')]}
                  members={memory.usuarios}
                  action={'Ver solicitud'}
                  to={`/memorias/solicitudes/${memory.memoria.id}`}
                />
              ))}
          </ListWrapper>
          <div className={classes.mainContainer}>
            <Solicitud />
          </div>
        </>
      )}
    </>
  );
};

export default Solicitudes;
