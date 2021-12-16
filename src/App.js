import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './Shared/Context/auth-context';
import { useAuth } from './Shared/Hooks/auth-hook';

import MainWrapper from './Shared/Components/Layout/MainWrapper';
import Login from './Auth/Pages/Login';
import Signup from './Auth/Pages/Signup';

import { actual } from './Shared/Constants/roles';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { token, id, name, lastname, email, rut, imageUrl, role, login, logout } = useAuth();

  const authHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  let mainComponent = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Redirect to="/login" />
    </Switch>
  );

  if (!!isLoggedIn) {
    mainComponent = <MainWrapper role={actual} />;
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        id: 'p1',
        name,
        lastname,
        email,
        rut,
        imageUrl,
        role: actual,
        login: authHandler,
        logout: logoutHandler,
      }}
    >
      <Router>{mainComponent}</Router>
    </AuthContext.Provider>
  );
};

export default App;
