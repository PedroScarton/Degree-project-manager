import React, { useState, useEffect } from 'react';

import SearchForm from '../Components/SearchForm';
import GenericCard from '../../Shared/Components/GenericCard';
import StudentWrapper from '../Components/StudentWrapper';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

import classes from './Aprobadas.module.css';

const Aprobadas = (props) => {
  // fetched data states
  const [memories, setMemories] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  // visual states
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data');
    };
    return fetchData;
  }, []);

  // falta el loadingspinner de cuando se solicitan las memorias

  const searchHandler = (values) => {
    console.log(values);
  };

  return isLoading ? (
    <LoadingSpinner contained />
  ) : (
    <div className={classes.container}>
      <SearchForm onSubmit={searchHandler} />
      <StudentWrapper>
        {memories &&
          memories.map((memory, index) => (
            <GenericCard
              key={index}
              selected={'1'} // aqui se debe quitar este uno y poner un undefined
              id={memory.id}
              title={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar...'
              }
              details={[new Date().toLocaleDateString('en-US')]}
              action={'Ver detalle'}
              to={`/memorias/aprobadas/${memory.id}`}
            />
          ))}
      </StudentWrapper>
    </div>
  );
};

export default Aprobadas;
