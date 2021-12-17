import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useHttpClient } from '../../../Shared/Hooks/http-hook';
import { getIdFromPath } from '../../../Shared/Utils/getId';

import Activa from './Activa';
import ListWrapper from '../../Shared/Layout/ListWrapper';
import GenericCard from '../../Shared/Components/GenericCard';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

import classes from './Activas.module.css';

const Activas = () => {
  const location = useLocation();

  // fetched data states
  const [memories, setMemories] = useState([]);
  const [memoryId, setMemoryId] = useState(undefined);
  // Hooks
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/usuario-x-memoria/all?estado=EN_CURSO'
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
          <ListWrapper title="Memorias activas">
            {memories &&
              memories.map((memory, index) => (
                <GenericCard
                  key={index}
                  selected={memoryId}
                  id={memory.memoria.id}
                  title={memory.memoria.titulo}
                  members={memory.usuarios}
                  details={[new Date(memory.memoria.fecha_de_creacion).toLocaleDateString('en-US')]}
                  action={'Ver detalle'}
                  to={`/memorias/activas/${memory.memoria.id}`}
                >
                  <div>
                    <p>
                      <span>Fase actual: </span>
                      {memory.fases
                        ? memory.fases.find((fase) => fase.fecha_de_evaluacion).tipo
                        : 'PT1'}
                    </p>
                    <p>
                      <span>Fecha de entrega: </span>
                      {new Date(
                        memory.memoria.fecha_de_finalizacion ??
                          +new Date() + 30 * 24 * 60 * 60 * 1000
                      ).toLocaleDateString('en-US')}
                    </p>
                  </div>
                </GenericCard>
              ))}
          </ListWrapper>
          <div className={classes.mainContainer}>
            <Activa />
          </div>
        </>
      )}
    </>
  );
};

export default Activas;
