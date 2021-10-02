import React from 'react';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import classes from './SideDrawer.module.css'

const SideDrawer = (props) => {
	const content = (
		<CSSTransition
			in={props.show}
			timeout={300}
			classNames="slide-in-left"
			mountOnEnter
			unmountOnExit
		>
			<aside className={classes.sideDrawer} onClick={props.onClick}>{props.children}</aside>
		</CSSTransition>
	);

	return ReactDom.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
