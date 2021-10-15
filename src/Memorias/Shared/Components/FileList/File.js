import React from 'react';

import Output from '../../../../Shared/Components/FormElements/Output';

import { roles } from '../../../../Shared/Constants/roles';

const File = (props) => {
  const role = roles.COORDINADOR;
  let callToActionText = '';
  switch (role) {
    case roles.COORDINADOR:
      callToActionText = 'Notificar';
      break;
    case roles.DOCENTE:
      callToActionText = 'Subir archivo';
      break;
    case roles.ALUMNO:
      callToActionText = 'Subir archivo';
      break;

    default:
      callToActionText = '';
      break;
  }
  const handler = () => {
    switch (role) {
      case roles.COORDINADOR:
        props.sendNotification(props.name);
        break;
      case roles.DOCENTE:
        break;
      case roles.ALUMNO:
        break;

      default:
        break;
    }
  };
  return (
    <Output
      file
      archive={props.archive}
      title={`${props.teacher ? (props.guia ? 'Guía' : 'Informante') : 'Integrante'} ${
        !!props.index ? `°${props.index}` : ''
      }`}
      action={props.isActive ? callToActionText : ''}
      onCallAction={handler}
    />
  );
};

export default File;
