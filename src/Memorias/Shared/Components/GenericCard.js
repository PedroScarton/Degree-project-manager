import React from 'react';

import CardFooter from './CardComponents/CardFooter';
import CardHeader from './CardComponents/CardHeader';
import Card from '../../../Shared/Components/UI/Card';

const GenericCard = (props) => {
  console.log(`esta es la: ${props.id}, estado: ${props.selected === props.id}`);
  return (
    <Card color={props.selected === props.id ? '#26A5EA' : '#C0C0C0'}>
      <CardHeader title={props.title} details={props.details} />
      <div>{props.children}</div>
      <CardFooter
        members={props.members}
        teacher={props.teacher}
        to={props.to}
        action={props.action}
      />
    </Card>
  );
};

export default GenericCard;
