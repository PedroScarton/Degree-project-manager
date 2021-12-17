import React from 'react';

import Button from '../../../../Shared/Components/FormElements/Button';

import classes from './CardFooter.module.css';

const CardFooter = (props) => {
  let teacher = false;
  let users = [];
  const { members } = props;
  if (members) {
    users = members.filter((member) => member.rol === 'MEMORISTA');
    const teachers = members.filter((member) => member.rol !== 'MEMORISTA');
    if (teachers.length !== 0) {
      teacher = teachers.find((teacher) => teacher.rol === 'GUIA');
      if (teacher) {
        teacher = teacher.usuario.nombre_completo;
      } else {
        teacher = false;
      }
    }
  }

  return (
    <div className={classes.container}>
      {props.members && (
        <div className={classes.members}>
          {users.length > 0 &&
            users.map((member, index) => (
              <div key={index} className={classes.membersDetail}>
                <span>Integrante:</span>
                <p>{member.usuario.nombre_completo}</p>
              </div>
            ))}

          <div className={classes.membersDetail}>
            <span>Profesor guía: </span>
            <p>{!!teacher ? teacher : 'Sin definir'}</p>
          </div>
        </div>
      )}
      <div className={classes.Button}>
        <Button to={props.to}>{props.action}</Button>
      </div>
    </div>
  );
};

export default CardFooter;
