import React from 'react';

import { makeStyles } from '@mui/styles';

import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from './Backdrop';

import './LoadingSpinner.css';

const useStylesFacebook = makeStyles((theme) => ({
  color: {
    color: '#26A5EA',
  },
}));

const LoadingSpinner = (props) => {
  const classes = useStylesFacebook();
  if (props.contained) {
    return (
      <div className="spinner_contained">
        <CircularProgress variant="indeterminate" color="primary" className={classes.color} />
      </div>
    );
  }
  return (
    <Backdrop onClick={null}>
      <div className="center" style={{ height: '100%' }}>
        <CircularProgress variant="indeterminate" color="primary" className={classes.color} />
      </div>
    </Backdrop>
  );
};
export default LoadingSpinner;
