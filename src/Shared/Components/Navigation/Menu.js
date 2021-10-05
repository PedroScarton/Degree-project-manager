import React from 'react';
import { createPortal } from 'react-dom';

import ClickAwayListener from '@mui/material/ClickAwayListener';

import classes from './Menu.module.css';

const Menu = (props) => {
	return createPortal(
		<ClickAwayListener onClickAway={props.onClose}>
			<div className={classes.menu}>
				<div className={classes.menuItems}>{props.children}</div>
			</div>
		</ClickAwayListener>,
		document.getElementById('menu-hook')
	);
};

export default Menu;
