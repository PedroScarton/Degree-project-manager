import React from 'react';

import Output from '../../../../Shared/Components/FormElements/Output';

const File = (props) => {
  const sendNotificationHandler = () => {
    props.sendNotification(props.name);
  };
  return (
    <Output
      file
      archive={props.archive}
      title={`${props.teacher ? (props.guia ? 'Guía' : 'Informante') : 'Integrante'} ${
        !!props.index ? `°${props.index}` : ''
      }`}
      action={props.isActive ? 'Notificar' : ''}
      onCallAction={sendNotificationHandler}
    />
  );
};

export default File;
