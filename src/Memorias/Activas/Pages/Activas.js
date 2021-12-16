import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getIdFromPath } from '../../../Shared/Utils/getId';

import Activa from './Activa';
import ListWrapper from '../../Shared/Layout/ListWrapper';
import GenericCard from '../../Shared/Components/GenericCard';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

import classes from './Activas.module.css';

const Activas = (props) => {
  const location = useLocation();

  // fetched data states
  const [memories, setMemories] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [memoryId, setMemoryId] = useState(undefined);
  // visual states
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data');
    };
    return fetchData;
  }, []);

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
                  id={memory.id}
                  title={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar...'
                  }
                  members={['Pedro Scarton', 'Ignacio Araya']}
                  teacher={'Hernan Olmi'}
                  details={[new Date().toLocaleDateString('en-US')]}
                  action={'Ver detalle'}
                  to={`/memorias/activas/${memory.id}`}
                >
                  <div>
                    <p>
                      <span>Fase actual: </span>
                      {memory.actualFase ?? 'PT2'}
                    </p>
                    <p>
                      <span>Fecha de entrega: </span>
                      {new Date().toLocaleDateString('en-US')}
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
