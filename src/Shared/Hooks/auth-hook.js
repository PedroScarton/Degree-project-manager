import { useState, useEffect, useCallback } from 'react';

export const useAuth = () => {
  const [id, setId] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [rut, setRut] = useState(false);
  const [role, setRole] = useState(false);

  const login = useCallback((id, name, email, rut, role) => {
    setId(id);
    setName(name);
    setEmail(email);
    setRut(rut);
    setRole(role);

    localStorage.setItem(
      'userData',
      JSON.stringify({
        id,
        name,
        email,
        rut,
        role,
      })
    );
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('userData');
    setId(null);
    setName(null);
    setEmail(null);
    setRut(null);
    setRole(null);
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.id &&
      storedData.name &&
      storedData.email &&
      storedData.rut &&
      storedData.role
    ) {
      login(storedData.id, storedData.name, storedData.email, storedData.rut, storedData.role);
    }
  }, [login]);

  return { id, name, email, rut, role, login, logout };
};
