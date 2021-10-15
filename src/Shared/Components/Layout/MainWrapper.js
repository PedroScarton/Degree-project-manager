import React, { useState, useEffect, useCallback } from 'react';

import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';

import MainNavigation from '../Navigation/MainNavigation';
import Sidebar from '../Navigation/Sidebar';

import classes from './MainWrapper.module.css';

import { roles } from '../../../Assets/config/nav.config';

const getRoutes = (role) => {
  // obtengo los modulos
  const modules = Object.keys(roles[role]);
  const routes = [];
  for (const module of modules) {
    routes.push(...roles[role][module]);
  }
  return routes;
};

const MainWrapper = (props) => {
  // estados de rutas
  const { role } = props;
  const modules = Object.keys(roles[props.role]);
  const routes = getRoutes(props.role);

  const [actualModule, setActualModule] = useState(false);
  const [memoryCount, setMemoryCount] = useState(0);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const fullpath = location.pathname.split('/');
    if (fullpath.length === 2) {
      const baseModule = fullpath[1];
      if (baseModule) {
        const actualModule = roles[role][baseModule];
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
      const modules = Object.keys(roles[role]);
      const actualModule = roles[role][modules[0]];
      if (actualModule) {
        const tools = actualModule.filter((tool) => tool.type !== 'nested' && tool);
        if (tools.length !== 0) {
          history.push(tools[0].href);
          return;
        }
      }
    }
  }, [location.pathname, role, history, modules]);

  const getModules = (module) => {
    const baseModule = location.pathname.split('/')[1];
    if (baseModule) {
      const actualModule = roles[role][baseModule];
      if (actualModule) {
        // obtenemos las rutas de ese modulo
        const tools = actualModule.filter((tool) => tool.type !== 'nested' && tool);
        // generamos rutas para ese modulo
        return tools;
      }
    }
  };

  const getNewRequest = useCallback(() => {}, []);

  return (
    <React.Fragment>
      <MainNavigation modules={modules} />
      <div className={classes.wrapper}>
        <Sidebar tools={getModules(actualModule)} count={memoryCount} />
        <main className={classes.mainContainer}>
          <div className={classes.routerContainer}>
            <Switch>
              {routes.map((route) => (
                <Route key={route.href} path={route.href} render={() => route.component} />
              ))}
              <Redirect to="/" />
            </Switch>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default MainWrapper;
