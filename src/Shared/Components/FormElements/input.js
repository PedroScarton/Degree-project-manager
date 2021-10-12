import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

import { ReactComponent as CalendarIcon } from '../../../Assets/icons/eventos.svg';
import UploadIcon from '../../../Assets/icons/upload.svg';
import eyeOn from '../../../Assets/icons/eye-on.svg';
import eyeOff from '../../../Assets/icons/eye-off.svg';
import './Input.css';

const MaterialUIPickers = (props) => {
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <MobileDatePicker
        label="Date mobile"
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
};

const Input = (props) => {
  const [passwordMode, setPasswordMode] = useState('password');
  const [eyeMode, setEyeMode] = useState(true);

  const showPasswordHandler = (event) => {
    event.preventDefault();
    setEyeMode(false);
    setPasswordMode('text');
  };

  const hidePasswordHandler = (event) => {
    event.preventDefault();
    setEyeMode(true);
    setPasswordMode('password');
  };

  let element;
  if (props.type === 'text') {
    element = (
      <React.Fragment>
        <input type={props.type} id={props.id} placeholder={props.placeholder} />
      </React.Fragment>
    );
  } else if (props.type === 'password') {
    element = (
      <React.Fragment>
        {eyeMode ? (
          <button onClick={showPasswordHandler}>
            <img src={eyeOn} alt="" />
          </button>
        ) : (
          <button onClick={hidePasswordHandler}>
            <img src={eyeOff} alt="" />
          </button>
        )}

        <input
          autoComplete="off"
          autoCorrect="off"
          id={props.id}
          type={passwordMode}
          placeholder="*******"
        />
      </React.Fragment>
    );
  } else if (props.type === 'date') {
    element = (
      <div className="input-date-picker">
        <div className="svg-container">
          <CalendarIcon />
        </div>
        <MaterialUIPickers />
      </div>
    );
  } else if (props.type === 'file') {
    return (
      <div className="input-file-container">
        <label htmlFor={props.id} style={{ color: props.white && 'white' }}>
          {props.label}
        </label>
        <label htmlFor="input-file" className="input-file-box">
          <input type="file" id="input-file" hidden="hidden" />
          <p id="file-name">{props.fileName ?? 'Seleccione un archivo...'}</p>
          <img src={UploadIcon} alt="" />
        </label>
      </div>
    );
  }

  return (
    <div className="form-control">
      <label htmlFor={props.id} style={{ color: props.white && 'white' }}>
        {props.label}
      </label>
      {element}
      {props.helperText && (
        <div className="form-control__helper">
          <p>{props.helperText}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
