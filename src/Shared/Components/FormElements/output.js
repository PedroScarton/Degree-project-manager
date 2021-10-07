import React from 'react';

import downloadFileIcon from '../../../Assets/icons/descargarArchivo.svg';
import Button from './button';

import './output.css';

const Output = (props) => {

    if (props.file) {
        return (
            <div className="output-container">
                <div className="output-tittle">
                    <p>{props.title}</p>
                </div>
                <div className="output-detail">
                    <p>Descargar Archivo</p>
                    <button>
                        <img src={downloadFileIcon} alt="" />
                    </button>
                </div>
            </div>
        );
    } else if (props.button) {
        return (
            <div className="output-container">
                <div className="output-tittle">
                    <p>{props.title}</p>
                </div>
                <div className="output-detail">
                    <p>{props.detail}</p>
                </div>
                <div className="output-button">
                    <Button height="40px" color="#EA4700">
                        {props.button}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="output-container">
            <div className="output-tittle">
                <p>{props.title}</p>
            </div>
            <div className="output-detail">
                <p>{props.detail}</p>
            </div>
        </div>
    );
}

export default Output;