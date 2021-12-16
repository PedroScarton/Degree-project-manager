// IMPORT DE COMPONENTES PARA RUTAS
// componentes de memorias
import Solicitudes from '../../Memorias/Solicitudes/Pages/Solicitudes';
import Activas from '../../Memorias/Activas/Pages/Activas';
import Activa from '../../Memorias/Activas/Pages/Activa';
import MemoryFiles from '../../Memorias/Activas/Pages/MemoryFiles';
import Aprobadas from '../../Memorias/Aprobadas/Pages/Aprobadas';
import Aprobada from '../../Memorias/Aprobadas/Pages/Aprobada';
import MiMemoria from '../../Memorias/MiMemoria/Page/MiMemoria';
import IniciarSolicitud from '../../Memorias/IniciarSolicitud/Pages/IniciarSolicitud';
import Planes from '../../Memorias/Planes/Pages/Planes';
import Plan from '../../Memorias/Planes/Pages/Plan';
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
import { ReactComponent as CalendarioEditarIcon } from '../icons/calendarioEditar.svg';

// iconos de agenda

// iconos de docentes

// iconos de alumnos
import { ReactComponent as ValidacionIcon } from '../icons/validacion.svg';

export const roles = {
  coordinador: {
    memorias: [
      {
        type: 'notification',
        name: 'Lista de solicitudes',
        icon: SolicitudesIcon,
        href: '/memorias/solicitudes',
        component: <Solicitudes />,
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
        component: <Aprobada />,
      },
      {
        name: 'Memorias aprobadas',
        icon: AprobadasIcon,
        href: '/memorias/aprobadas',
        component: <Aprobadas />,
      },
      {
        type: 'nested',
        href: '/memorias/plan/:id',
        component: <Plan />,
      },
      {
        name: 'Planes de estudio',
        icon: CalendarioEditarIcon,
        href: '/memorias/plan',
        component: <Planes />,
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
        type: 'nested',
        href: '/memorias/aprobadas/:id',
        component: <Aprobada />,
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
        component: <IniciarSolicitud />,
      },
      {
        type: 'nested',
        href: '/memorias/mi-memoria/evaluaciones',
        component: <MemoryFiles />,
      },
      {
        name: 'Mi memoria',
        icon: ListaIcon,
        href: '/memorias/mi-memoria',
        component: <MiMemoria />,
      },
      {
        type: 'nested',
        href: '/memorias/aprobadas/:id',
        component: <Aprobada />,
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
