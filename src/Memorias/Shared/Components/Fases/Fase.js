import React from 'react';

import Card from '../../../../Shared/Components/UI/Card';
import Button from '../../../../Shared/Components/FormElements/Button';
import classes from './Fase.module.css';

const Fase = (props) => {

    let buttonState;
    if (props.state === "en curso" || props.state === "aprobada") {
        buttonState = false;
    } else {
        buttonState = true;
    }

    return (
        <div className={classes.container}>
            <Card color={props.state === "en curso" ? "#EA4700" : "C0C0C0"}>
                <div className={classes.head}>
                    <h3>{props.name}</h3>
                    <p style={{ color: props.state === "en curso" ? "#EA4700" : "black" }}>
                        {props.state}
                    </p>
                </div>
                <div className={classes.body}>
                    <div className={classes.detailBody}>
                        <span>Inicio: </span>
                        <p>{props.initDate ? new Date(props.initDate).toLocaleDateString('en-US') : "---"}</p>
                    </div>
                    <div className={classes.detailBody}>
                        <span>Finalización: </span>
                        <p>{props.testDate ? new Date(props.testDate).toLocaleDateString('en-US') : "---"}</p>
                    </div>
                    <div className={classes.detailBody}>
                        <span>Calificación: </span>
                        <p>{props.calification ? props.calification : "---"}</p>
                    </div>
                </div>
                <div className={classes.footer}>
                    <Button disabled={buttonState}>
                        Ver Detalles
                    </Button>
                </div>
            </Card >
        </div >
    );
}

export default Fase;