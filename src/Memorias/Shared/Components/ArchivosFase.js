import React from "react";

import Card from '../../../Shared/Components/UI/Card';
import Title from '../Components/Layout/Title';
import Output from '../../../Shared/Components/FormElements/Output';

import classes from './ArchivosFase.module.css';

const ArchivosFase = (props) => {

    let element;
    if (props.complete) {
        element = (
            <div className={classes.completeContainer}>
                <div className={classes.detailComplete}>
                    <div className={classes.detailTitle}>
                        <h3>Observaciones</h3>
                    </div>
                    <div className={classes.detailBody}>
                        <Output file
                            title="Profesor Guía"
                        />
                        <Output file
                            title="Informante 1"
                        />
                        <Output file
                            title="Informante 2"
                        />
                        {props.members &&
                            props.members.map((index) => (
                                <Output file
                                    title={"Integrante " + (index)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={classes.detailComplete}>
                    <div className={classes.detailTitle}>
                        <h3>Evaluaciones</h3>
                    </div>
                    <div className={classes.detailBody}>
                        <Output file
                            title="Profesor Guía"
                        />
                        <Output file
                            title="Informante 1"
                        />
                        <Output file
                            title="Informante 2"
                        />
                    </div>
                </div>

            </div>
        );
    } else {
        element = (
            <React.Fragment>
                <div className={classes.detail}>
                    <div className={classes.detailTitle}>
                        <h3>Fecha de entrega</h3>

                    </div>
                    <div className={classes.detailBody}>
                        <Output
                            button="Modificar"
                            title="Fecha Agendada"
                            detail="20/05/2021"
                        />

                    </div>
                </div>
                <div className={classes.detail}>
                    <div className={classes.detailTitle}>
                        <h3>Evaluaciones</h3>
                    </div>
                    <div className={classes.detailBody}>
                        <Output
                            title="Profesor Guía"
                            detail=""
                        />
                        <Output
                            title="Informante 1"
                            detail=""
                        />
                        <Output
                            title="Informante 2"
                            detail=""
                        />

                    </div>
                </div>
                <div className={classes.detail}>
                    <div className={classes.detailTitle}>
                        <h3>Observaciones</h3>
                    </div>
                    <div className={classes.detailBody}>
                        <Output
                            title="Profesor Guía"
                            detail=""
                        />
                        <Output
                            title="Informante 1"
                            detail=""
                        />
                        <Output
                            title="Informante 2"
                            detail=""
                        />
                        {props.members &&
                            props.members.map((index) => (
                                <Output
                                    title={"Integrante " + (index)}
                                    detail=""
                                />
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }

    return (
        <main className={classes.container}>
            <Card>
                <Title>
                    <div className={classes.head}>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ....</h1>
                        <div className={classes.subtitle}>
                            <span>PT2</span>
                            <p>2020/09/28</p>
                        </div>
                    </div>
                </Title>
                {element}
            </Card>
        </main>
    )

}

export default ArchivosFase;