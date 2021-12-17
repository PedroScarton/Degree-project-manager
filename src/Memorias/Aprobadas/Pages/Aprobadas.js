import React, { useState, useEffect } from 'react';

import { stringify } from 'querystring';
import { useHttpClient } from '../../../Shared/Hooks/http-hook';

import SearchForm from '../Components/SearchForm';
import GenericCard from '../../Shared/Components/GenericCard';
import StudentWrapper from '../Components/StudentWrapper';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

import classes from './Aprobadas.module.css';

const Aprobadas = (props) => {
  // fetched data states
  const [memories, setMemories] = useState([]);
  // hooks
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/memorias?estado=FINALIZADA'
        );
        setMemories(response.memorias);
      } catch (err) {}
    };
    return fetchData();
  }, [sendRequest]);

  const searchHandler = async (values) => {
    const queries = stringify({ estado: 'FINALIZADA', ...values });

    try {
      const response = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + '/memorias?' + queries
      );
      setMemories(response.memorias);
    } catch (err) {}
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
