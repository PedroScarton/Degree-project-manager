import React, { useReducer, useEffect } from 'react';

import './InputSelect.css';


const InputSelect = (props) => {
	

	const { id, onInput } = props;
	// const { value, isValid } = inputState;

	// useEffect(() => {
	// 	if (!props.outsource) {
	// 		onInput(id, value, isValid);
	// 	}
	// }, [id, onInput, value, isValid, props.outsource]);

	const changeHandler = (event) => {
		// dispatch({
		// 	type: 'CHANGE',
		// 	val: event.target.value,
		// 	validators: props.validators,
		// });
	};

	const touchHandler = () => {
		// dispatch({
            
		// 	type: 'TOUCH',
		// });
	};

	return (
		<div className="form-control-select">
			<label>{props.label}</label>
			<div className="custom-selector">
				<select
					id={props.id}
					onChange={props.outsource ? props.changeHandler : changeHandler}
					onBlur={props.outsource ? props.touchHandler : touchHandler}
					value={props.outsource ? props.value : 'value'}
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