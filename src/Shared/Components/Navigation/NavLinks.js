import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavLinks.module.css';

const CustomNavLink = (props) => (
	<li className={classes.LinkContainer}>
		<NavLink
			className={classes.Link}
			activeClassName={classes.ActiveLink}
			exact={props.exact}
			to={props.to}
		>
			{props.children}
		</NavLink>
	</li>
);

const NavLinks = (props) => {
	return (
		<div className={classes.container}>
			<nav className={classes.navItem}>
				<ul className={classes.LinkList}>
					{props.links &&
						props.links.map((link) => (
							<CustomNavLink key={link} to={`/${link}`}>
								{link}
							</CustomNavLink>
						))}
				</ul>
			</nav>
		</div>
	);
};

export default NavLinks;
