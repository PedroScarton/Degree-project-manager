import React from 'react';

import Grid from '../../../Shared/Components/Layout/Grid';

import classes from './ListWrapper.module.css'

const ListWrapper = (props) => {
	return (
		<React.Fragment>
			<div className={classes.ListHeaderContainer}>
				<h1>{props.title}</h1>
			</div>
			<Grid>{props.children}</Grid>
		</React.Fragment>
	);
};

export default ListWrapper;
