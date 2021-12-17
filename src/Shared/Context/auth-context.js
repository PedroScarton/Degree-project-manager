import { createContext } from 'react';

export const AuthContext = createContext({
	isLoggedIn: false,
	id: null,
	name: null,
	email: null,
	rut: null,
	role: null,
	login: () => {},
	logout: () => {},
});
