import { useState, useEffect, useCallback } from 'react';

let logoutTimer;

export const useAuth = () => {
	const [token, setToken] = useState(false);
	const [id, setId] = useState(false);
	const [name, setName] = useState(false);
	const [lastname, setLastname] = useState(false);
	const [email, setEmail] = useState(false);
	const [rut, setRut] = useState(false);
	const [imageUrl, setImageUrl] = useState(false);
	const [role, setRole] = useState(false);
	const [tokenExpirationDate, setTokenExpirationDate] = useState();

	const login = useCallback(
		(token, id, name, lastname, email, rut, imageUrl, role, expirationDate) => {
			setId(id);
			setName(name);
			setLastname(lastname);
			setEmail(email);
			setRut(rut);
			setImageUrl(imageUrl);
			setRole(role);
			const tokenExpirationDate =
				expirationDate ||
				new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);
			setTokenExpirationDate(tokenExpirationDate);
			localStorage.setItem(
				'userData',
				JSON.stringify({
					token,
					id,
					name,
					lastname,
					email,
					rut,
					imageUrl,
					role,
					expiration: tokenExpirationDate.toISOString(),
				})
			);
			setToken(token);
		},
		[]
	);

	const logout = useCallback(() => {
		localStorage.removeItem('userData');
		setTokenExpirationDate(null);
		setId(null);
		setName(null);
		setLastname(null);
		setEmail(null);
		setRut(null);
		setImageUrl(null);
		setRole(null);
		setToken(null);
	}, []);

	useEffect(() => {
		if (token && tokenExpirationDate) {
			const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
			logoutTimer = setTimeout(logout, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, logout, tokenExpirationDate]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem('userData'));
		if (
			storedData &&
			storedData.token &&
			storedData.id &&
			storedData.name &&
			storedData.lastname &&
			storedData.email &&
			storedData.rut &&
			storedData.imageUrl &&
			storedData.role &&
			new Date(storedData.expiration) > new Date()
		) {
			login(
				storedData.token,
				storedData.id,
				storedData.name,
				storedData.lastname,
				storedData.email,
				storedData.rut,
				storedData.imageUrl,
				storedData.role,
				new Date(storedData.expiration)
			);
		}
	}, [login]);

	return { token, id, name, lastname, email, rut, imageUrl, role, login, logout };
};
