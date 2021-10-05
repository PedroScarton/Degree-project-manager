import React, { useState } from 'react';

import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';
import Backdrop from '../UI/Backdrop';
import NavLinks from './NavLinks';

import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const drawerHandler = (state) => {
		setDrawerIsOpen(state);
	};

	return (
		<React.Fragment>
			{drawerIsOpen && <Backdrop onClick={() => drawerHandler(false)} />}
			<SideDrawer show={drawerIsOpen}>
				<div className={classes.sideNavigation}></div>
			</SideDrawer>
			<MainHeader>
				<NavLinks links={props.modules} />
			</MainHeader>
		</React.Fragment>
	);
};

export default MainNavigation;
