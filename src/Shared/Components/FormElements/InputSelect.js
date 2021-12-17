import React, { useReducer, useEffect } from 'react';
import { validate } from '../../Utils/validators';

import './InputSelect.css';

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

const InputSelect = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValidity || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    if (!props.outsource) {
      onInput(id, value, isValid);
    }
  }, [id, onInput, value, isValid, props.outsource]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  return (
    <div className="form-control-select">
      <label>{props.label}</label>
      <div className="custom-selector">
        <select
          id={props.id}
          onChange={props.outsource ? props.changeHandler : changeHandler}
          onBlur={props.outsource ? props.touchHandler : touchHandler}
          value={props.outsource ? props.value : value}
          disabled={props.disabled}
        >
          <option disabled defaultValue value="">
            {props.placeholder}
          </option>
          {props.options &&
            props.options.map((opcion, index) => (
              <option key={index} value={opcion.name}>
                {opcion.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default InputSelect;
