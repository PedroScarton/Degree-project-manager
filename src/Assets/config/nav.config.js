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
				component: (
					<div className="center">
						<h1>Hola</h1>
					</div>
				),
			},
			{
				name: 'Memorias activas',
				icon: Lista,
				href: '/memorias/activas',
				component: (
					<div className="center">
						<h1>Hola</h1>
					</div>
				),
			},
			{
				name: 'Memorias aprobadas',
				icon: Aprobadas,
				href: '/memorias/aprobadas',
				component: (
					<div className="center">
						<h1>Hola</h1>
					</div>
				),
			},
		],
		agenda: [],
		docentes: [],
		alumnos: [
			{
				name: 'Verificar practicas',
				icon: Validacion,
				href: '/alumnos/verificar/practicas',
				component: (
					<div className="center">
						<h1>Hola</h1>
					</div>
				),
			},
		],
	},
	docente: {
		memorias: [
			{
				name: 'Memorias activas',
				icon: Lista,
				href: '/memorias/activas',
				component: (
					<div className="center">
						<h1>Hola</h1>
					</div>
				),
			},
			{
				name: 'Participaciones',
				icon: Exito,
				href: '/memorias/participaciones',
				component: (
					<div className="center">
						<h1>Hola</h1>
					</div>
				),
			},
			{
				name: 'Memorias aprobadas',
				icon: Aprobadas,
				href: '/memorias/aprobadas',
				component: (
					<div className="center">
						<h1>Hola</h1>
					</div>
				),
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
				component: (
					<div className="center">
						<h1>Hola</h1>
					</div>
				),
			},
			{
				name: 'Mi memoria',
				icon: Lista,
				href: '/memorias/mi-memoria',
				component: (
					<div className="center">
						<h1>Hola</h1>
					</div>
				),
			},
			{
				name: 'Memorias aprobadas',
				icon: Aprobadas,
				href: '/memorias/aprobadas',
				component: (
					<div className="center">
						<h1>Hola</h1>
					</div>
				),
			},
		],
		agenda: [],
		docentes: [],
	},
};
