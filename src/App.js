import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './Shared/Context/auth-context';
import { useAuth } from './Shared/Hooks/auth-hook';

import MainWrapper from './Shared/Components/Layout/MainWrapper';
import Login from './Auth/Pages/Login';
import Signup from './Auth/Pages/Signup';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    mainComponent = <MainWrapper role={'coordinador'} />;
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        id,
        name,
        lastname,
        email,
        rut,
        imageUrl,
        role,
        login: authHandler,
        logout: logoutHandler,
      }}
    >
      <Router>{mainComponent}</Router>
    </AuthContext.Provider>
  );
};

export default App;
