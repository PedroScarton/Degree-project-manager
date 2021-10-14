// IMPORT DE COMPONENTES PARA RUTAS
// componentes de memorias
import Solicitudes from '../../Memorias/Solicitudes/Pages/Solicitudes';
import Solicitud from '../../Memorias/Solicitudes/Pages/Solicitud';
import Aprobadas from '../../Memorias/Aprobadas/Pages/Aprobadas';
import Activas from '../../Memorias/Activas/Pages/Activas';
import Activa from '../../Memorias/Activas/Pages/Activa';
import MemoryFiles from '../../Memorias/Activas/Pages/MemoryFiles';
// componentes de agenda
// componentes de docentes
// componentes de alumnos
import VerificarPractica from '../../Alumnos/Verificar/Pages/VerificarPractica';

// IMPORT DE ICONOS

// iconos de memorias
import { ReactComponent as SolicitudesIcon } from '../icons/solicitudes.svg';
import { ReactComponent as ListaIcon } from '../icons/lista.svg';
import { ReactComponent as AprobadasIcon } from '../icons/aprobadas.svg';
import { ReactComponent as ExitoIcon } from '../icons/exito.svg';
import { ReactComponent as ComenzarIcon } from '../icons/comenzar.svg';

// iconos de agenda

// iconos de docentes

// iconos de alumnos
import { ReactComponent as ValidacionIcon } from '../icons/validacion.svg';

export const roles = {
  coordinador: {
    memorias: [
      {
        type: 'nested',
        href: '/memorias/solicitudes/:id',
        component: <Solicitud />,
      },
      {
        type: 'notification',
        name: 'Lista de solicitudes',
        icon: SolicitudesIcon,
        href: '/memorias/solicitudes',
        component: <Solicitudes />,
      },
      {
        type: 'nested',
        href: '/memorias/activas/:id/evaluaciones/:evaluationId',
        component: <MemoryFiles />,
      },
      {
        type: 'nested',
        href: '/memorias/activas/:id',
        component: <Activa />,
      },
      {
        name: 'Memorias activas',
        icon: ListaIcon,
        href: '/memorias/activas',
        component: <Activas />,
      },
      {
        type: 'nested',
        href: '/memorias/aprobadas/:id',
        component: (
          <div className="center">
            <h1>memoria aprobada</h1>
          </div>
        ),
      },
      {
        name: 'Memorias aprobadas',
        icon: AprobadasIcon,
        href: '/memorias/aprobadas',
        component: <Aprobadas />,
      },
    ],
    agenda: [],
    docentes: [],
    alumnos: [
      {
        name: 'Verificar practicas',
        icon: ValidacionIcon,
        href: '/alumnos/verificar/practicas',
        component: <VerificarPractica />,
      },
    ],
  },
  administrador: {
    memorias: [
      {
        name: 'Verificacion inicial',
        icon: AprobadasIcon,
        href: '/memorias/verificacion',
        component: <Solicitudes />,
      },
      {
        name: 'Examen de grado',
        icon: ValidacionIcon,
        href: '/memorias/examenes',
        component: <Solicitudes />,
      },
    ],
  },
  docente: {
    memorias: [
      {
        name: 'Memorias activas',
        icon: ListaIcon,
        href: '/memorias/activas',
        component: <Activas />,
      },
      {
        name: 'Participaciones',
        icon: ExitoIcon,
        href: '/memorias/participaciones',
        component: (
          <div className="center">
            <h1>Hola</h1>
          </div>
        ),
      },
      {
        name: 'Memorias aprobadas',
        icon: AprobadasIcon,
        href: '/memorias/aprobadas',
        component: <Aprobadas />,
      },
    ],
    agenda: [],
    alumnos: [],
  },
  alumnos: {
    memorias: [
      {
        name: 'Iniciar solicitud',
        icon: ComenzarIcon,
        href: '/memorias/solicitud',
        component: (
          <div className="center">
            <h1>Hola</h1>
          </div>
        ),
      },
      {
        name: 'Mi memoria',
        icon: ListaIcon,
        href: '/memorias/mi-memoria',
        component: (
          <div className="center">
            <h1>Hola</h1>
          </div>
        ),
      },
      {
        name: 'Historial de memorias',
        icon: AprobadasIcon,
        href: '/memorias/historial',
        component: <Aprobadas />,
      },
    ],
    agenda: [],
    docentes: [],
  },
};
