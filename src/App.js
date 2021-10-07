import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AuthContext } from './Shared/Context/auth-context';
import { useAuth } from './Shared/Hooks/auth-hook';

import MainWrapper from './Shared/Components/Layout/MainWrapper';
import Input from './Shared/Components/FormElements/input';


const App = () => {
	const { token, id, name, lastname, email, rut, imageUrl, role, login, logout } =
		useAuth();


	// aca adentro pon tus componentes para la prueba
	return (
		<div>

			<Input
				type="password"
				label="Rut"
				helperText="Aquí va el rut"
				placeholder="20.206.812-7"
			/>

			<Input
				type="date"
				label="Fecha de evaluación: *"
				helperText="La fecha de evaluación debe ser posterior a la fecha de inicio."
			/>

			<Input
				type="file"
				label="Documento de evaluación: *"
				helperText="Por favor subir el archivo Word completado descargado previamente."
			/>
		</div>
	);

	// return (
	// 	<AuthContext.Provider
	// 		value={{
	// 			isLoggedIn: !!token,
	// 			token,
	// 			id,
	// 			name,
	// 			lastname,
	// 			email,
	// 			rut,
	// 			imageUrl,
	// 			role,
	// 			login,
	// 			logout,
	// 		}}
	// 	>
	// 		<Router>
	// 			<MainWrapper role={'coordinador'} />
	// 		</Router>
	// 	</AuthContext.Provider>
	// );
};

export default App;
