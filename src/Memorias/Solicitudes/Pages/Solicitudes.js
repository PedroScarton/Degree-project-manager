import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getIdFromPath } from '../../../Shared/Utils/getId';

import Solicitud from './Solicitud';
import ListWrapper from '../../Shared/Layout/ListWrapper';
import GenericCard from '../../Shared/Components/GenericCard';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

import classes from './Solicitudes.module.css';

const Solicitudes = (props) => {
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
          <ListWrapper title="Solicitudes entrantes">
            {memories &&
              memories.map((memory, index) => (
                <GenericCard
                  selected={memoryId}
                  id={memory.id}
                  key={index}
                  title={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar...'
                  }
                  details={[new Date().toLocaleDateString('en-US')]}
                  members={['Pedro Scarton', 'Ignacio Araya', 'Cristian Gonzalez']}
                  teacher={'Hernan Olmi'}
                  action={'Ver solicitud'}
                  to={`/memorias/solicitudes/${memory.id}`}
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
