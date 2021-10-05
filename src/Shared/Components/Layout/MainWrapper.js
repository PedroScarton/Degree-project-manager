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

	const [moduleTools, setModuleTools] = useState(false);

	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		const fullpath = location.pathname.split('/');
		if (location.pathname === '/' || fullpath.length === 2) {
			// aca debo enviar al usuario al primer modulo y primera herramienta
			// obtengo el primer modulo
			const firstModule = modules[0];
			// busco la primera herramienta del primer modulo
			const firstTool = roles[role][firstModule][0];
			// enviamos al usuario a la primera herramienta
			history.push(firstTool.href);
		}
	}, [location.pathname, role, history, modules]);

	useEffect(() => {
		// obtenemos el modulo
		const actualModule = location.pathname.split('/')[1];
		// obtenemos las rutas de ese modulo
		const tools = roles[role][actualModule];
		// generamos rutas para ese modulo
		setModuleTools(tools);
	}, [role, modules, location.pathname]);

	const obtenerNuevasSolicitudes = useCallback(() => {}, []);

	return (
		<React.Fragment>
			<MainNavigation modules={modules} />
			<div className={classes.wrapper}>
				<Sidebar tools={moduleTools} />
				<main className={classes.mainContainer}>
					<div className={classes.routerContainer}>
						<Switch>
							{routes.map((route) => (
								<Route
									key={route.href}
									path={route.href}
									render={() => <h1 className="center">Hola</h1>}
								/>
							))}
						</Switch>
					</div>
				</main>
			</div>
		</React.Fragment>
	);
};

export default MainWrapper;
