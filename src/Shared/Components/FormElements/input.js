import React, { useState } from 'react';

import CalendarIcon from '../../../Assets/icons/eventos.svg';
import eyeOn from '../../../Assets/icons/eye-on.svg';
import eyeOff from '../../../Assets/icons/eye-off.svg';
import './input.css';

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

	let element = (
		<input type={props.type} id={props.id} placeholder={props.placeholder} />
	);

	if (props.type === 'password') {
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
					placeholder={
						passwordMode === 'password' ? '************' : 'Contraseña...'
					}
				/>
			</React.Fragment>
		);
	} else if (props.type === 'date') {
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1;
		const yyyy = today.getFullYear();

		if (dd < 10) {
			dd = '0' + dd;
		}

		if (mm < 10) {
			mm = '0' + mm;
		}

		today = yyyy + '-' + mm + '-' + dd;
		element = (
			<input type={props.type} id={props.id} min={today} placeholder={today} />
		);
	} else if (props.type === 'file') {
		element = (
			<div className="input-file">
				<input type={props.type} id={props.id} />
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
