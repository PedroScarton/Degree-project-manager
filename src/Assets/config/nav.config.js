// IMPORT DE COMPONENTES PARA RUTAS
// componentes de memorias
// componentes de agenda
// componentes de docentes
// componentes de alumnos

// IMPORT DE ICONOS

// iconos de memorias
import { ReactComponent as Solicitudes } from '../icons/solicitudes.svg';
import { ReactComponent as Lista } from '../icons/lista.svg';
import { ReactComponent as Aprobadas } from '../icons/aprobadas.svg';
import { ReactComponent as Exito } from '../icons/exito.svg';
import { ReactComponent as Comenzar } from '../icons/comenzar.svg';

// iconos de agenda

// iconos de docentes

// iconos de alumnos
import { ReactComponent as Validacion } from '../icons/validacion.svg';

export const coordinatorLinks = {
	memorias: [
		{
			name: 'Lista de solicitudes',
			icon: Solicitudes,
			href: '/memorias/solicitudes',
			component: '',
		},
		{
			name: 'Memorias activas',
			icon: Lista,
			href: '/memorias/activas',
			component: '',
		},
		{
			name: 'Memorias aprobadas',
			icon: Aprobadas,
			href: '/memorias/aprobadas',
			component: '',
		},
	],
	agenda: [],
	docentes: [],
	alumnos: [
		{
			name: 'Verificar practicas',
			icon: Validacion,
			href: '/alumnos/verificar/practicas',
			component: '',
		},
	],
};

export const docenteLinks = {
	memorias: [
		{
			name: 'Memorias activas',
			icon: Lista,
			href: '/memorias/activas',
			component: '',
		},
		{
			name: 'Participaciones',
			icon: Exito,
			href: '/memorias/participaciones',
			component: '',
		},
		{
			name: 'Memorias aprobadas',
			icon: Aprobadas,
			href: '/memorias/aprobadas',
			component: '',
		},
	],
	agenda: [],
	alumnos: [],
};

export const alumnoLinks = {
	memorias: [
		{
			name: 'Iniciar solicitud',
			icon: Comenzar,
			href: '/memorias/solicitud',
			component: '',
		},
		{
			name: 'Mi memoria',
			icon: Lista,
			href: '/memorias/mi-memoria',
			component: '',
		},
		{
			name: 'Memorias aprobadas',
			icon: Aprobadas,
			href: '/memorias/aprobadas',
			component: '',
		},
	],
	agenda: [],
	docentes: [],
};
