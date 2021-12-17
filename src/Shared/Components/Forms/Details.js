import React from 'react';

import classes from './Details.module.css';

const Details = (props) => {
    return (
        <div className={classes.container}>
            <h3>{props.title}</h3>
            {props.children}
            {props.frases &&
                props.frases.map((frase, index) => (
                    <p key={index}>
                        {frase.text}
                    </p>
                ))}
        </div>
    );
}

export default Details;