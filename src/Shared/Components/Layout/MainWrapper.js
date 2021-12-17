import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';

import { AuthContext } from '../../Context/auth-context';

import MainNavigation from '../Navigation/MainNavigation';
import Sidebar from '../Navigation/Sidebar';

import classes from './MainWrapper.module.css';

import { roles } from '../../../Assets/config/nav.config';
import LoadingSpinner from '../UI/LoadingSpinner';

const getRoutes = (role) => {
  // obtengo los modulos
  const modules = Object.keys(roles[role]);
  const routes = [];
  for (const module of modules) {
    routes.push(...roles[role][module]);
  }
  return routes;
};

const MainWrapper = () => {
  const auth = useContext(AuthContext);
  // eslint-disable-next-line
  const [actualModule, setActualModule] = useState(false);

  const location = useLocation();
  const history = useHistory();
  let modules = roles[auth.role];

  useEffect(() => {
    if (modules) {
      const fullpath = location.pathname.split('/');
      if (fullpath.length === 2) {
        const baseModule = fullpath[1];
        if (baseModule) {
          const actualModule = roles[auth.role][baseModule];
          if (actualModule) {
            const tools = actualModule.filter((tool) => tool.type !== 'nested' && tool);
            if (tools.length !== 0) {
              history.push(tools[0].href);
              return;
            }
          }
        }
      }
      if (location.pathname === '/') {
        const modules = Object.keys(roles[auth.role]);
        const actualModule = roles[auth.role][modules[0]];
        if (actualModule) {
          const tools = actualModule.filter((tool) => tool.type !== 'nested' && tool);
          if (tools.length !== 0) {
            history.push(tools[0].href);
            return;
          }
        }
      }
    }
  }, [location.pathname, auth.role, history, modules]);

  if (!modules) {
    return <LoadingSpinner contained />;
  }

  modules = Object.keys(modules);

  const routes = getRoutes(auth.role);

  const getModules = () => {
    const baseModule = location.pathname.split('/')[1];
    if (baseModule) {
      const actualModule = roles[auth.role][baseModule];
      if (actualModule) {
        // obtenemos las rutas de ese modulo
        const tools = actualModule.filter((tool) => tool.type !== 'nested' && tool);
        // generamos rutas para ese modulo
        return tools;
      }
    }
  };

  return (
    <React.Fragment>
      <MainNavigation modules={modules} />
      <div className={classes.wrapper}>
        <Sidebar tools={getModules(actualModule)} />
        <main className={classes.mainContainer}>
          <Switch>
            {routes.map((route) => (
              <Route key={route.href} path={route.href} render={() => route.component} />
            ))}
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    </React.Fragment>
  );
};

export default MainWrapper;
