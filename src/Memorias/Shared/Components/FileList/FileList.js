import React from 'react';

import File from './File';

const FileList = (props) =>
  props.type === 'evaluación'
    ? props.members &&
      props.members.map((member) => (
        <File
          name={member.nombre}
          teacher={member.teacher}
          guia={member.guia}
          key={member.id}
          index={member.index}
          id={member.id}
          archive={member.evaluation}
          sendNotification={props.sendNotification}
          isActive={props.isActive && !member.evaluation}
          onOpen={() => props.onOpen(props.type, member.evaluation.id)}
        />
      ))
    : props.members &&
      props.members.map((member) => (
        <File
          name={member.nombre}
          teacher={member.teacher}
          guia={member.guia}
          key={member.id}
          index={member.index}
          id={member.id}
          archive={member.observation}
          sendNotification={props.sendNotification}
          isActive={props.isActive && !member.observation}
          onOpen={() => props.onOpen(props.type, member.observation.id)}
        />
      ));

export default FileList;
