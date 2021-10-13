import React, { useState, useEffect } from 'react';

import ListWrapper from '../../Shared/Layout/ListWrapper';
import GenericCard from '../../Shared/Components/GenericCard';

const Solicitudes = (props) => {
  const [memories, setMemories] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  useEffect(() => {
    // aqui adentro se hace el request
  }, []);

  // falta el loadingspinner de cuando se solicitan las memorias

  return (
    <ListWrapper title="Lista de solicitudes entrantes">
      {memories &&
        memories.map((memory, index) => (
          <GenericCard
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
  );
};

export default Solicitudes;
