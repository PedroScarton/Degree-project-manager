import { useContext } from 'react';
import { AuthContext } from '../Context/auth-context';

export const useRole = () => {
  const auth = useContext(AuthContext);
  return auth.role;
};
