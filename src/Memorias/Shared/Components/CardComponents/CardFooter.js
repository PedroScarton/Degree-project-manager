import React from 'react';

import Button from '../../../../Shared/Components/FormElements/Button';

import classes from './CardFooter.module.css';

const CardFooter = (props) => {
  return (
    <div className={classes.container} style={{ margin: props.memberOne && '30px 0 0 0' }}>
      {props.memberOne && (
        <div className={classes.members}>
          <div className={classes.membersDetail}>
            <span>Integrante 1 :</span>
            <p>{props.memberOne}</p>
          </div>
          {props.memberTwo && (
            <div className={classes.membersDetail}>
              <span>Integrante 2 :</span>
              <p>{props.memberTwo}</p>
            </div>
          )}
          {props.memberThree && (
            <div className={classes.membersDetail}>
              <span>Integrante 3 : </span>
              <p>{props.meberThree}</p>
            </div>
          )}
          <div className={classes.membersDetail}>
            <span>Profesor guía: </span>
            <p>{props.guide}</p>
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
