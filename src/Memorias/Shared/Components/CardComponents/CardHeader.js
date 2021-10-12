import React from "react";

import classes from './CardHeader.module.css';

const CardHeader = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>{props.title}</h1>
            </div>
            {props.detailOne && (
                <div className={classes.subTitle}>
                    <p>{props.detailOne}</p>
                    <p>{props.detailTwo}</p>
                </div>
            )}
        </div>
    );

}

export default CardHeader;