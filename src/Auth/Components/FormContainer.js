import React from 'react';

import classes from './FormContainer.module.css';

const FormContainer = (props) => {
	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<h1>{props.title}</h1>
			</div>
			<form onSubmit={props.onSubmit}>{props.children}</form>
			<hr className={classes.hr} />
			<div>{props.footer}</div>
		</div>
	);
};

export default FormContainer;
