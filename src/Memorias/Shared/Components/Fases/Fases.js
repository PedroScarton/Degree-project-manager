import React from 'react';

import classes from './Fases.module.css';
import Fase from './Fase';
import FaseActual from './FaseActual';

const Fases = (props) => {

    return (
        <React.Fragment>
            {!props.approved &&
                <FaseActual fases={props.fases} />
            }
            <div className={classes.container}>
                {props.fases &&
                    props.fases.map((fase, index) =>
                        <Fase
                            key={index}
                            approved={props.approved}
                            name={fase.name}
                            state={fase.state}
                            initDate={fase.initDate}
                            testDate={fase.testDate}
                            calification={fase.calification}
                        />
                    )
                }
            </div>
        </React.Fragment>
    );
}

export default Fases;