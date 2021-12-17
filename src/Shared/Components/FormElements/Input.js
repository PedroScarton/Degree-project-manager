import React, { useReducer, useEffect, useState } from 'react';
import { validate } from '../../Utils/validators';
import { format as RutFormat } from 'rut.js';

import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

import { ReactComponent as CalendarIcon } from '../../../Assets/icons/eventos.svg';
import eyeOn from '../../../Assets/icons/eye-on.svg';
import eyeOff from '../../../Assets/icons/eye-off.svg';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

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
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ?? '',
    isTouched: false,
    isValid: props.initialValidity ?? false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  const [passwordMode, setPasswordMode] = useState('password');
  const [eyeMode, setEyeMode] = useState(true);

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, onInput, value, isValid]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators,
    });
  };

  const rutChangeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: RutFormat(event.target.value),
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  const showPasswordHandler = (event, state) => {
    event.preventDefault();
    setEyeMode(state);
    setPasswordMode(!!state ? 'password' : 'text');
  };

  let element;
  if (props.type === 'text') {
    element = (
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value}
      />
    );
  } else if (props.type === 'password') {
    element = (
      <React.Fragment>
        {eyeMode ? (
          <button
            type="button"
            name="mostrar contraseña"
            onClick={(e) => showPasswordHandler(e, false)}
          >
            <img src={eyeOn} alt="" />
          </button>
        ) : (
          <button
            type="button"
            name="mostrar contraseña"
            onClick={(e) => showPasswordHandler(e, true)}
          >
            <img src={eyeOff} alt="" />
          </button>
        )}

        <input
          autoComplete="off"
          autoCorrect="off"
          id={id}
          type={passwordMode}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={value}
        />
      </React.Fragment>
    );
  } else if (props.type === 'rut') {
    element = (
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={rutChangeHandler}
        onBlur={touchHandler}
        value={value}
      />
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
