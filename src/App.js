import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './Shared/Context/auth-context';
import { useAuth } from './Shared/Hooks/auth-hook';
import { useTeachers } from './Shared/Hooks/teacher-hook';

import MainWrapper from './Shared/Components/Layout/MainWrapper';
import Login from './Auth/Pages/Login';
import Signup from './Auth/Pages/Signup';

const App = () => {
  const { id, name, email, rut, role, login, logout } = useAuth();

  // eslint-disable-next-line
  const { teacher } = useTeachers();

  let mainComponent = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Redirect to="/login" />
    </Switch>
  );

  if (!!id) {
    mainComponent = <MainWrapper />;
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!id,
        id,
        name,
        email,
        rut,
        role,
        login: login,
        logout: logout,
      }}
    >
      <Router>{mainComponent}</Router>
    </AuthContext.Provider>
  );
};

export default App;
