import React from 'react';

import Button from '../../../../Shared/Components/FormElements/Button';

import classes from './CardFooter.module.css';

const CardFooter = (props) => {
  return (
    <div className={classes.container} style={{ margin: props.memberOne && '30px 0 0 0' }}>
      {props.teacher && props.members && (
        <div className={classes.members}>
          {props.members.length !== 0 &&
            props.members.map((member, index) => (
              <div key={index} className={classes.membersDetail}>
                <span>Integrante:</span>
                <p>{member}</p>
              </div>
            ))}
          <div className={classes.membersDetail}>
            <span>Profesor guía: </span>
            <p>{props.teacher}</p>
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
