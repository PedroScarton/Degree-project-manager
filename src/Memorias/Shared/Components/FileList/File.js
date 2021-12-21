import React, { useContext } from 'react';

import { roles } from '../../../../Shared/Constants/roles';

import Output from '../../../../Shared/Components/FormElements/Output';
import { AuthContext } from '../../../../Shared/Context/auth-context';

const File = (props) => {
  const auth = useContext(AuthContext);

  let callToActionText = '';
  switch (auth.role) {
    case roles.DOCENTE:
      callToActionText = 'Enviar formulario';
      break;
    case roles.ALUMNO:
      callToActionText = 'Enviar formulario';
      break;

    default:
      callToActionText = '';
      break;
  }

  const onClickHandler = () => {
    switch (auth.role) {
      case roles.DOCENTE:
        break;
      case roles.ALUMNO:
        break;

      default:
        break;
    }
  };

  return props.isActive ? (
    <Output
      file
      onOpen={props.onOpen}
      archive={props.archive}
      title={`${
        props.teacher
          ? props.guia
            ? 'Guía'
            : `Informante n°${props.index + 1}`
          : `Integrante n°${props.index - 1}`
      }`}
      action={props.id === auth.id ? callToActionText : ''}
      onCallAction={props.onOpen}
    />
  ) : (
    <Output
      file
      onOpen={props.onOpen}
      archive={props.archive}
      title={`${
        props.teacher
          ? props.guia
            ? 'Guía'
            : `Informante n°${props.index}`
          : `Integrante n°${props.index - 1}`
      }`}
    />
  );
};

export default File;
