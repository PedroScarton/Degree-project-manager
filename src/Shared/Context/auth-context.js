import { createContext } from 'react';

export const AuthContext = createContext({
	isLoggedIn: false,
	token: null,
	id: null,
	name: null,
	lastname: null,
	email: null,
	rut: null,
	imageUrl: null,
	role: null,
	isActive: false,
	login: () => {},
	logout: () => {},
});
