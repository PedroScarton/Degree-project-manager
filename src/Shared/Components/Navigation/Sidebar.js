import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Sidebar.module.css';

const SideBarItem = (props) => {
	return (
		<li className={classes.item}>
			<NavLink
				className={classes.itemLink}
				activeClassName={classes.itemLinkActive}
				exact
				to={props.href}
			>
				<props.icon />
				<p>{props.name}</p>
				{props.notification && (
					<div className={classes.countItem}>
						<p>{props.counte}</p>
					</div>
				)}
			</NavLink>
		</li>
	);
};
const Sidebar = (props) => {
	console.log(props.tools);
	return (
		<aside className={classes.sideBar}>
			<div>
				<nav>
					<ul>
						{props.tools &&
							props.tools.map((tool) => (
								<SideBarItem
									key={tool.name}
									{...tool}
									count={props.count}
								/>
							))}
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
