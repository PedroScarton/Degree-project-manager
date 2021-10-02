import React from 'react';

import { AuthContext } from './Shared/Context/auth-context';
import { useAuth } from './Shared/Hooks/auth-hook';

import MainWrapper from './Shared/Components/Layout/MainWrapper';

const App = () => {
	const { token, id, name, lastname, email, rut, imageUrl, role, login, logout } =
		useAuth();
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token,
				token,
				id,
				name,
				lastname,
				email,
				rut,
				imageUrl,
				role,
				login,
				logout,
			}}
		>
			<MainWrapper></MainWrapper>
		</AuthContext.Provider>
	);
};

export default App;
