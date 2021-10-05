import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ListWrapper from '../../Shared/Layout/ListWrapper';

import classes from './Solicitudes.module.css';

const Solicitudes = (props) => {
	const [memories, setMemories] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

	useEffect(() => {
		// aqui adentro se hace el request
	}, []);

	// falta el loadingspinner de cuando se solicitan las memorias

	return (
		<ListWrapper title="Lista de solicitudes entrantes">
			{memories &&
				memories.map((memory) => (
					<Link
						to={`/memorias/solicitudes/${memory.id}`}
						className={classes.resetLink}
					>
						<div
							style={{
								borderColor: 'black',
								borderWidth: 2,
								borderStyle: 'solid',
								borderRadius: 4,
							}}
						>
							hola
						</div>
					</Link>
				))}
		</ListWrapper>
	);
};

export default Solicitudes;
