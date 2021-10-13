import React from 'react';

import CardFooter from './CardComponents/CardFooter';
import CardHeader from './CardComponents/CardHeader';
import Card from '../../../Shared/Components/UI/Card';

const GenericCard = (props) => (
  <Card>
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

export default GenericCard;
