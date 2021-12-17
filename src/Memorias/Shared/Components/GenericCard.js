import React from 'react';

import CardFooter from './CardComponents/CardFooter';
import CardHeader from './CardComponents/CardHeader';
import Card from '../../../Shared/Components/UI/Card';

const GenericCard = (props) => (
  <Card color={props.selected === props.id ? '#26A5EA' : '#C0C0C0'}>
    <CardHeader title={props.title} details={props.details} />
    <div>{props.children}</div>
    <CardFooter members={props.members} to={props.to} action={props.action} />
  </Card>
);

export default GenericCard;
