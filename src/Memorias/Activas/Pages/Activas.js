import React, { useState, useEffect } from 'react';

import ListWrapper from '../../Shared/Layout/ListWrapper';
import GenericCard from '../../Shared/Components/GenericCard';

const Activas = (props) => {
  const [memories, setMemories] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  useEffect(() => {
    // aqui adentro se hace el request
  }, []);

  // falta el loadingspinner de cuando se solicitan las memorias

  return (
    <ListWrapper title="Lista de memorias en curso">
      {memories &&
        memories.map((memory, index) => (
          <GenericCard
            key={index}
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
  );
};

export default Activas;
