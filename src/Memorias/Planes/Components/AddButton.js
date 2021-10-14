import React from 'react';

import AddIcon from '../../../Assets/icons/añadir.svg';
import classes from './AddButton.module.css';

const AddButton = (props) => {
    return (
        <button className={classes.container} onClick={props.onClick}>
            <p>{props.text}</p>
            <img src={AddIcon} alt="" />
        </button>
    );

}

export default AddButton;