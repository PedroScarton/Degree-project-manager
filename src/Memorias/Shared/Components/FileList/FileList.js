import React from 'react';

import File from './File';

const FileList = (props) =>
  props.type === 'evaluación'
    ? props.members &&
      props.members.map((member, index) => (
        <File
          name={member.usuario.nombre_completo}
          teacher={member.rol !== 'MEMORISTA'}
          guia={member.rol === 'GUIA'}
          key={member.usuario.id}
          index={index}
          id={member.usuario.id}
          archive={member.evaluation}
          sendNotification={props.sendNotification}
          isActive={props.isActive && !member.evaluation}
          onOpen={() => props.onOpen(props.type, undefined)}
        />
      ))
    : props.members &&
      props.members.map((member, index) => (
        <File
          name={member.usuario.nombre_completo}
          teacher={member.rol !== 'MEMORISTA'}
          guia={member.rol === 'GUIA'}
          key={member.usuario.id}
          index={index}
          id={member.usuario.id}
          archive={member.observation}
          sendNotification={props.sendNotification}
          isActive={props.isActive && !member.observation}
          onOpen={() => props.onOpen(props.type, undefined)}
        />
      ));

export default FileList;
