import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../../Shared/Context/auth-context';

import { useHttpClient } from '../../../Shared/Hooks/http-hook';

import InProcess from '../Components/InProcess';
import Informative from '../Components/Informative';
import classes from './MiMemoria.module.css';
import LoadingSpinner from '../../../Shared/Components/UI/LoadingSpinner';

const MiMemoria = () => {
  const auth = useContext(AuthContext);
  // Memory data
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasMemory, setHasMemory] = useState(false);
  // Hooks
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // load the memory
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/usuario-x-memoria/por-usuario?id_usuario=${auth.id}`
        );
        if (response.memoria) {
          setHasMemory(true);
        } else {
          setHasMemory(false);
        }
        setIsLoaded(true);
      } catch (err) {}
    };
    return fetchData();
  }, [sendRequest, auth.id]);

  console.log(hasMemory);

  return isLoading ? (
    <LoadingSpinner contained />
  ) : (
    <>
      {isLoaded ? (
        <div className={classes.container}>{hasMemory ? <InProcess /> : <Informative />}</div>
      ) : (
        <LoadingSpinner contained />
      )}
    </>
  );
};

export default MiMemoria;
