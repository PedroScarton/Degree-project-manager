import React from 'react';

import Integrantes from './Integrantes/Integrantes';
import Button from '../../../Shared/Components/FormElements/Button';
import CardHeader from './CardComponents/CardHeader';

import classes from './ResumeInfoMemoria.module.css';
import SectionHeader from './Header';

const ResumeInfoMemoria = (props) => {
  return (
    <div className={classes.container}>
      <CardHeader title={props.title} details={props.details} />
      <SectionHeader title={'Información de grupo'}>
        <Integrantes members={props.members} />
        {props.goToDetails && (
          <div className={classes.footer}>
            <Button onClick={props.goToDetails}>Ver información de memoria</Button>
          </div>
        )}
      </SectionHeader>
    </div>
  );
};

export default ResumeInfoMemoria;
