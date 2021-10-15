import React, { useContext, useState } from 'react';

import Card from '../../../../Shared/Components/UI/Card';
import Button from '../../../../Shared/Components/FormElements/Button';
import FormModal from '../../../../Shared/Components/Layout/FormModal';

import classes from './FaseActual.module.css';
import FileForm from '../Forms/FileModal';
import DateForm from '../Forms/DateForm';

import { roles, actual as RoleActual } from '../../../../Shared/Constants/roles';

const FaseActual = (props) => {
  // Se obtiene el contexto para ver el rol
  // const auth = useContext()

  let isTeacher = false;
  if (RoleActual !== roles.ALUMNO) {
    isTeacher = true;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const actual = props.fases.filter((fase) => fase.state === 'en curso');
  const modalHandler = (state) => {
    setIsModalOpen(state);
  };
  const dateModalHandler = (state) => {
    setIsDateModalOpen(state);
  };

  const onSendDocumentHandler = (value) => {
    console.log(value);
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        {actual.length === 1 && (
          <Card color="#EA4700">
            <div className={classes.cardHead}>
              <h3>Fase actual</h3>
              <h3>{actual[0].name}</h3>
            </div>
            <div className={classes.cardFoot}>
              <div className={classes.footInfo}>
                <div className={classes.infoDetail}>
                  <span>Fecha de inicio :</span>
                  <p>{new Date(actual[0].initDate).toLocaleDateString('en-US')}</p>
                </div>
                <div className={classes.infoDetail}>
                  <span>Fecha de evaluación :</span>
                  <p>{new Date(actual[0].testDate).toLocaleDateString('en-US')}</p>
                </div>
              </div>
              <div className={classes.footButton} style={{ width: !isTeacher ? '45%' : '20%' }}>
                <div
                  className={classes.btnContainer}
                  style={{ width: !isTeacher ? '45%' : '100%' }}
                >
                  <Button onClick={() => modalHandler(true)} secondary={isTeacher}>
                    {isTeacher ? 'Evaluación' : 'Enviar evaluación'}
                  </Button>
                </div>
                {!isTeacher && (
                  <div className={classes.btnContainer2}>
                    <Button onClick={() => dateModalHandler(true)} secondary>
                      Reagendar fecha
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card>
        )}
      </div>
      <FormModal
        title="Realizar evaluación de fase"
        description={
          'Deberá descargar la planilla que ya vendrá con toda la información base de la memoria que se está evaluando. Una vez haya completado la planilla súbala en la casilla de archivo adjunto.'
        }
        open={isModalOpen}
        onClose={() => modalHandler(false)}
      >
        <FileForm onSubmit={onSendDocumentHandler} />
      </FormModal>
      <FormModal
        title="Solicitar cambio de fecha"
        open={isDateModalOpen}
        onClose={() => dateModalHandler(false)}
      >
        <DateForm onSubmit={onSendDocumentHandler} />
      </FormModal>
    </React.Fragment>
  );
};

export default FaseActual;
