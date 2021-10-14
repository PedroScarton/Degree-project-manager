import React from 'react';

import Card from '../../../../Shared/Components/UI/Card';
import Button from '../../../../Shared/Components/FormElements/Button';
import classes from './FaseActual.module.css';

const FaseActual = (props) => {

    const actual = (props.fases.filter((fase) => fase.state === "en curso"));

    console.log(actual[0])
    return (
        <div className={classes.container}>
            {actual.length === 1 && (
                <Card color="#EA4700">
                    <div className={classes.cardHead}>
                        <h3>Fase actual</h3>
                        <h3>{actual[0].name}</h3>
                    </div>
                    <div className={classes.cardFoot}>
                        <div className={classes.footInfo}>
                            <div className={classes.infoDetail}>
                                <span>Fecha de inicio :</span>
                                <p>{new Date(actual[0].initDate).toLocaleDateString('en-US')}</p>
                            </div>
                            <div className={classes.infoDetail}>
                                <span>Fecha de evaluación :</span>
                                <p>{new Date(actual[0].testDate).toLocaleDateString('en-US')}</p>
                            </div>
                        </div>
                        <div className={classes.footButton}>
                            <Button secondary >
                                Evaluar
                            </Button>
                        </div>
                    </div>

                </Card>
            )
            }
        </div>
    );
}

export default FaseActual;