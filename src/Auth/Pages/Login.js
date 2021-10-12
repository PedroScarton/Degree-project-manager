import React from 'react';
import FormContainer from '../Components/FormContainer';

import Card from '../../Shared/Components/UI/Card';
import CardHeader from '../../Memorias/Shared/Components/CardComponents/CardHeader';
import CardFooter from '../../Memorias/Shared/Components/CardComponents/CardFooter';

import classes from './SharedClasses.module.css';

const Login = () => {

	return (
		<main className={classes.main}>
			<FormContainer>
				<div >
					<Card>
						<CardHeader
							title="Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar"
							detailOne="fecha de inicio"
							detailTwo="fecha de termino"
						/>
						<CardFooter
							action="Ver Detalle"
						/>
					</Card>
					<Card>
						<CardHeader title="Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur"
							detailOne="fecha de inicio"
						/>
						<div style={{display:'block'}}>
							<p>Fase actual: PT2</p>
							<p>Fecha de entrega: por definir</p>
						</div>

						<CardFooter
							action="Ver solicitud"
							memberOne="Ignacio Araya"
							guide="Hernán Olmi"
						/>
					</Card>
					<Card>
						<CardHeader title="Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur"/>
						<CardFooter
							action="Ver solicitud"
							memberOne="Ignacio Araya"
							memberTwo="Pedro Scarton"
							guide="Hernán Olmi"
						/>
					</Card>
					{/* Aca adentro los inputs */}
				</div>
			</FormContainer>
		</main>
	);
};

export default Login;
