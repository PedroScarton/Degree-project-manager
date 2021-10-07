import React from 'react';
import { Link } from 'react-router-dom';

import './button.css';

const Button = (props) => {

    if (props.to) {
        return (
            <Link
                to={props.to}
                exact={props.exact}
                className={`button ${props.outlined && 'button--outlined'} ${props.disabled && !props.outlined && 'button--disabled'} ${props.disabled && props.outlined && 'button--outlined--disabled'}`}
                style={{border: `3px solid ${props.color}`, width: props.full && '100%'}}
                disabled={props.disabled}
            >
                {props.children}
            </Link>
        )
    }

    return (
        <button
            className={`button ${props.outlined && 'button--outlined'} ${props.disabled && !props.outlined && 'button--disabled'} ${props.disabled && props.outlined && 'button--outlined--disabled'}`}
            style={{background: props.color, border: `3px solid ${props.color}`, width: props.full && '100%',height: props.height}}
            disabled={props.disabled}
            onClick={props.onClick}>

            {props.children}
        </button>
    );
}


export default Button;