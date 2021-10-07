import React from 'react';

import classes from './FormContainer.module.css'

const FormContainer = (props) => {
	return <div className={classes.container}>{props.children}</div>;
};

export default FormContainer;
