import React from 'react';

import File from './File';

const FileList = (props) =>
  props.members &&
  props.members.map((member, index) => (
    <File
      name={member.nombre}
      teacher={member.teacher}
      guia={member.guia}
      key={index}
      index={member.index}
      archive={member.file}
      sendNotification={props.sendNotification}
      isActive={props.isActive && !member.file}
    />
  ));

export default FileList;
