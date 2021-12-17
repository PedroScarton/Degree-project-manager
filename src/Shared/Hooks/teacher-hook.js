import { useState, useCallback, useEffect } from 'react';

import { useHttpClient } from './http-hook';

export const useTeachers = () => {
  const [teacher, setTeachers] = useState(false);

  // eslint-disable-next-line
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const getTeachers = useCallback(async () => {
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/usuarios?type=PROFESOR`
      );
      setTeachers(response.usuarios);
    } catch (err) {
      setTeachers([{ name: 'Por favor, recargar' }]);
    }
  }, [sendRequest]);

  useEffect(() => {
    getTeachers();
  }, [getTeachers]);

  return { teacher };
};
