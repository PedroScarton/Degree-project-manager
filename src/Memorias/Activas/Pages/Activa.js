import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { getIdFromPath } from '../../../Shared/Utils/getId';

// Memory Components
import InfoMemoria from '../Components/InfoMemoria';
import ResumeInfoMemoria from '../../Shared/Components/ResumeInfoMemoria';
import Fases from '../../Shared/Components/Fases/Fases';
import MemoryFiles from './MemoryFiles';

// General components
import Card from '../../../Shared/Components/UI/Card';
import Fallback from '../../../Shared/Components/UI/Fallback';
import FormPage from '../../../Shared/Components/Layout/FormPage';

// Styles
import classes from './Activa.module.css';

const dummy_data = {
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet molestie ligula. Pellentesque magna est, vehicula ut neque condimentum, pretium pulvinar...',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet orci eu dignissim suscipit. Maecenas ornare lorem fermentum nunc sagittis, in accumsan lacus tristique. Phasellus ut elit quis metus porta efficitur sed at urna. Suspendisse tempus neque nec condimentum vulputate. Donec varius nibh enim, eget tempor diam malesuada eu. Etiam nunc felis, interdum ac semper in, mollis ac lorem. Quisque ut dictum quam, eget gravida diam. Nunc sed ligula eget urna interdum vulputate id et dui. Praesent a metus tempor, semper enim eu, eleifend nisi. Nunc euismod, elit sit amet commodo ornare, eros lectus iaculis nisi, ut imperdiet augue libero quis augue.
          
  Proin at erat non nulla dignissim aliquam. Sed eget iaculis quam. Proin ligula sem, efficitur a tincidunt vel, lacinia nec sapien. Phasellus nec ligula nibh. Vestibulum aliquet, est ac dapibus elementum, nisl odio facilisis tortor, vel maximus felis nulla eu metus. Pellentesque sit amet ultrices magna, ac cursus orci. Ut auctor mauris quam, sit amet posuere tellus posuere et. Phasellus volutpat, quam sit amet sagittis bibendum, erat quam hendrerit eros, sed consequat ligula nulla lobortis purus. Mauris lacus urna, ultrices et mi ut, tempor posuere nunc.`,
  members: [
    {
      rut: '20.207.855-5',
      nombre: 'Ignacio Araya Neira',
      correo: 'correoMalo1reoMalo1reoMalo1reoMalo1reoMalo1reoMalo1reoMalo11@gmail.com',
    },
    {
      rut: '20.207.855-5',
      nombre: 'Ignacio Araya Neira',
      correo: 'correoMalo11@gmail.com',
    },
  ],
  teachers: [
    {
      nombre: 'Ignacio Araya Neira',
      correo: 'correoMalo11@gmail.com',
      guia: true,
      teacher: true,
    },
    {
      index: 1,
      nombre: 'Ignacio Araya Neira',
      correo: 'correoMalo11@gmail.com',
      teacher: true,
    },
  ],
  fases: [
    { id: '1', name: 'PT 1', state: 'Finalizada' },
    { id: '2', name: 'PT 2', state: 'en curso' },
    { id: '3', name: 'Examen', state: 'Por comenzar' },
  ],
};

const Activa = () => {
  const location = useLocation();
  const [principalPage, setPrincipalPage] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showFormPage, setShowFormPage] = useState(false);
  const [memoryId, setMemoryId] = useState(getIdFromPath(location.pathname));
  const [evaluationId, setEvaluationId] = useState(undefined);

  useEffect(() => {
    setMemoryId(getIdFromPath(location.pathname));
  }, [location]);

  // load the memory
  useEffect(() => {
    const fetchMemory = async () => { };
    if (memoryId) {
      fetchMemory(memoryId);
    }
  });

  if (!memoryId) {
    return <Fallback />;
  }

  const showDetailsHandler = (state) => {
    setPrincipalPage(!state);
    setShowDetails(state);
    setEvaluationId(undefined);
  };

  const showEvaluationHandler = (id) => {
    setPrincipalPage(false);
    setEvaluationId(id);
  };

  const showFormPageHandler = (state) => {
    setPrincipalPage(!state);
    setShowFormPage(state);
  };

  return (
    <div className={classes.container}>
      {principalPage && (
        <React.Fragment>
          <Card>
            <ResumeInfoMemoria
              title={location.pathname}
              details={[new Date().toLocaleDateString('en-US')]}
              members={dummy_data.members}
              goToDetails={() => showDetailsHandler(true)}
            />
          </Card>
          <Fases
            goTo={showEvaluationHandler}
            openForm={() => showFormPageHandler(true)}
            fases={dummy_data.fases}
          />
        </React.Fragment>
      )}
      {showDetails && (
        <Card>
          <InfoMemoria
            title={dummy_data.title}
            date={new Date()}
            description={dummy_data.description}
            members={dummy_data.mem}
            teachers={dummy_data.teachers}
            goBack={() => showDetailsHandler(false)}
          />
        </Card>
      )}
      {evaluationId && (
        <MemoryFiles evaluationId={evaluationId} goBack={() => showDetailsHandler(false)} />
      )}
      {showFormPage && <FormPage type="observación" goBack={() => showFormPageHandler(false)} />}
    </div>
  );
};

export default Activa;
