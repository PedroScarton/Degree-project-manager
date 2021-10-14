import React from 'react';

import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ContainedButton = styled(Button)({
  color: 'white',
  backgroundColor: '#26A5EA',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Rajdhani',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
  ].join(','),
  fontSize: 15,
  fontWeight: '400',
  textTransform: 'none',
  borderWidth: 2,
  padding: '0.4rem 0',
  borderColor: '#D3131C',
  '&:hover': {
    backgroundColor: '#26A5EA',
    borderColor: '#26A5EA',
  },
  '&:disabled': {
    color: 'white',
    borderColor: '#B4B4B4',
    backgroundColor: '#B4B4B4',
  },
});

const ContainedButtonOrange = styled(Button)({
  color: 'white',
  backgroundColor: '#EA4600',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Rajdhani',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
  ].join(','),
  fontSize: 15,
  fontWeight: '400',
  textTransform: 'none',
  borderWidth: 2,
  padding: '0.4rem 0',
  borderColor: '#EA4600',
  '&:hover': {
    backgroundColor: '#EA4600',
    borderColor: '#EA4600',
  },
  '&:disabled': {
    color: 'white',
    borderColor: '#B4B4B4',
    backgroundColor: '#B4B4B4',
  },
});

const OutlinedButton = styled(Button)({
  color: '#26A5EA',
  borderColor: '#26A5EA',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Rajdhani',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
  ].join(','),
  textTransform: 'none',
  borderWidth: 2,
  fontSize: 15,
  fontWeight: '400',
  padding: '0.4rem 0',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  '&:hover': {
    borderWidth: 2,
    borderColor: '#26A5EA',
    color: '#26A5EA',
  },
  '&:disabled': {
    color: '#B4B4B4',
    borderWidth: 2,
    borderColor: '#B4B4B4',
  },
});

const CustomButton = (props) => {
  if (props.outlined) {
    return (
      <OutlinedButton
        fullWidth
        disabled={props.disabled}
        type={props.type}
        onClick={props.type === 'submit' ? null : props.onClick}
        variant="outlined"
        color="primary"
        component={props.to && Link}
        to={props.to}
        download={props.download}
        disableElevation={props.elevated}
      >
        {props.children}
      </OutlinedButton>
    );
  } else if (props.secondary) {
    return (
      <ContainedButtonOrange
        fullWidth
        disabled={props.disabled}
        type={props.type}
        onClick={props.type === 'submit' ? null : props.onClick}
        color="primary"
        component={props.to && Link}
        to={props.to}
        download={props.download}
      >
        {props.children}
      </ContainedButtonOrange>
    );
  }

  return (
    <ContainedButton
      fullWidth
      variant="contained"
      disabled={props.disabled}
      type={props.type}
      onClick={props.type === 'submit' ? null : props.onClick}
      component={props.to && Link}
      to={props.to}
      download={props.download}
      disableElevation
      color="primary"
    >
      {props.children}
    </ContainedButton>
  );
};

export default CustomButton;
