import React, { useState, useEffect, useCallback } from 'react';

import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';

import MainNavigation from '../Navigation/MainNavigation';
import Sidebar from '../Navigation/Sidebar';

import classes from './MainWrapper.module.css';

import { roles } from '../../../Assets/config/nav.config';

const MainWrapper = (props) => {
	// estados de rutas
	const { role } = props;
	const modules = Object.keys(roles[props.role]);

	const [routes, setRoutes] = useState([]);
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
		console.log(tools);
	}, [role, modules, location.pathname]);

	const obtenerNuevasSolicitudes = useCallback(() => {}, []);

	return (
		<React.Fragment>
			<MainNavigation modules={modules} />
			<div className={classes.wrapper}>
				<Sidebar />
				<main className={classes.mainContainer}>
					<Switch></Switch>
				</main>
			</div>
			{/* <Redirect from="" to={`/${modules[0]}`} /> */}
		</React.Fragment>
	);
};

export default MainWrapper;
