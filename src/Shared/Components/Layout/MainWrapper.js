import React from 'react';

import MainNavigation from '../Navigation/MainNavigation';
import Sidebar from '../Navigation/Sidebar';

import classes from './MainWrapper.module.css'

const MainWrapper = (props) => {
	return (
		<React.Fragment>
			<MainNavigation />
			<div className={classes.wrapper}>
				<Sidebar />
				<main className={classes.mainContainer}>{props.children}</main>
			</div>
		</React.Fragment>
	);
};

export default MainWrapper;
