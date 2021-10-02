const alumno = {
	name: '',
	lastname: '',
	email: '',
	password: '',
	rut: '',
	imageUrl: '',
	role: 'estudiante',
};

export const alumnoActivo = {
	actualToken: 'ab',
	id: 'e1',
	...alumno,
	isActive: true,
};

export const alumnoInactivo = {
	actualToken: 'ac',
	id: 'e2',
	...alumno,
	isActive: false,
};
