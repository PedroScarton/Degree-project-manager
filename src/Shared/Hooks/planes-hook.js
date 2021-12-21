import { useState, useCallback, useEffect } from 'react';

import { useHttpClient } from './http-hook';

export const usePlanes = () => {
  const [planes, setPlanes] = useState(false);

  // eslint-disable-next-line
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const getPlanes = useCallback(async () => {
    try {
      const response = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/planes');
      setPlanes(response.planes);
    } catch (err) {}
  }, [sendRequest]);

  useEffect(() => {
    getPlanes();
  }, [getPlanes]);

  return { planes };
};
