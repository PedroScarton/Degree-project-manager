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

export const roles = {
	coordinador: {
		memorias: [
			{
				type: 'notification',
				name: 'Lista de solicitudes',
				icon: Solicitudes,
				href: '/memorias/solicitudes',
				component: <h1>Hola</h1>,
			},
			{
				name: 'Memorias activas',
				icon: Lista,
				href: '/memorias/activas',
				component: <h1>Hola</h1>,
			},
			{
				name: 'Memorias aprobadas',
				icon: Aprobadas,
				href: '/memorias/aprobadas',
				component: <h1>Hola</h1>,
			},
		],
		agenda: [],
		docentes: [],
		alumnos: [
			{
				name: 'Verificar practicas',
				icon: Validacion,
				href: '/alumnos/verificar/practicas',
				component: <h1>Hola</h1>,
			},
		],
	},
	docente: {
		memorias: [
			{
				name: 'Memorias activas',
				icon: Lista,
				href: '/memorias/activas',
				component: <h1>Hola</h1>,
			},
			{
				name: 'Participaciones',
				icon: Exito,
				href: '/memorias/participaciones',
				component: <h1>Hola</h1>,
			},
			{
				name: 'Memorias aprobadas',
				icon: Aprobadas,
				href: '/memorias/aprobadas',
				component: <h1>Hola</h1>,
			},
		],
		agenda: [],
		alumnos: [],
	},
	alumnos: {
		memorias: [
			{
				name: 'Iniciar solicitud',
				icon: Comenzar,
				href: '/memorias/solicitud',
				component: <h1>Hola</h1>,
			},
			{
				name: 'Mi memoria',
				icon: Lista,
				href: '/memorias/mi-memoria',
				component: <h1>Hola</h1>,
			},
			{
				name: 'Memorias aprobadas',
				icon: Aprobadas,
				href: '/memorias/aprobadas',
				component: <h1>Hola</h1>,
			},
		],
		agenda: [],
		docentes: [],
	},
};
