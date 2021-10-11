import React from 'react';

import FormContainer from '../Components/FormContainer';
import Button from '../../Shared/Components/FormElements/button';
import Input from '../../Shared/Components/FormElements/input';
import Output from '../../Shared/Components/FormElements/output';
import Card from '../../Shared/Components/UI/Card';

import classes from './SharedClasses.module.css';

const Login = () => {
	return (
		<main className={classes.main}>
			<FormContainer title="Autenticación">
				<form>{/* Aca adentro los inputs */}</form>
			</FormContainer>
		</main>
	);
};

export default Login;
