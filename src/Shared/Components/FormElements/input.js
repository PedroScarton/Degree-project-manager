import React, { useState } from 'react';

import CalendarIcon from '../../../Assets/icons/eventos.svg'
import eyeOn from '../../../Assets/icons/eye-on.svg';
import eyeOff from '../../../Assets/icons/eye-off.svg';
import './input.css';


const Input = (props) => {


    const [passwordMode, setPasswordMode] = useState('password');
    const [eyeMode, setEyeMode] = useState(true);


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd


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
            <input
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
            />
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
            <input
                type={props.type}
                id={props.id}
                min={today}
                placeholder={today}
            />
        );
    } else if (props.type === 'file') {
        element = (
            <div className="input-file">
                <input
                    type={props.type}
                    id={props.id}
                    placeholder={today}
                />
            </div>
        );
    }


    return (
        <div className="form-control">
            <label htmlFor={props.id}
                style={{ color: props.white && "white" }}>
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
