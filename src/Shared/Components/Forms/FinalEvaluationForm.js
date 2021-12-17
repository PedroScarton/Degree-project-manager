import React from 'react';

import {
    VALIDATOR_REQUIRE
} from '../../Utils/validators';
import { useForm } from '../../Hooks/form-hook';

import Input from '../FormElements/Input';
import Button from '../FormElements/Button';
import InputSelect from '../FormElements/InputSelect';

import classes from './Forms.module.css';
import Details from './Details';

const FinalEvaluation = () => {
    const inputs = {
        profGuia: {
            value: '',
            isValid: false,
        },
        profInformante: {
            value: '',
            isValid: false,
        },
        fecha: {
            value: '',
            isValid: false,
        },
        resumen: {
            value: '',
            isValid: false,
        },
        introduccion: {
            value: '',
            isValid: false,
        },
        marcoTeorico: {
            value: '',
            isValid: false,
        },
        metodologia: {
            value: '',
            isValid: false,
        },
        desarrollo: {
            value: '',
            isValid: false,
        },
        conclusiones: {
            value: '',
            isValid: false,
        },
        bibliografia: {
            value: '',
            isValid: false,
        },
        formato: {
            value: '',
            isValid: false,
        },
        otrasObservaciones: {
            value: '',
            isValid: false,
        },
    };
    const [formState, inputHandler] = useForm(inputs, false);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formState);
    };


    const options = [{ name: 'Si' }, { name: 'Con observación' }, { name: 'No' }]
    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <div className={classes.container}>
                    <h3>Profesores participes en el informe</h3>
                    <div className={classes.detail}>
                        <Input
                            id="profGuia"
                            type="text"
                            label="Profesor guía: *"
                            placeholder=""
                            onInput={inputHandler}
                            initialValidity={true}
                            validators={[]}
                        />
                        <Input
                            id="profInformante"
                            type="text"
                            label="Profesor informante: *"
                            placeholder=""
                            onInput={inputHandler}
                            initialValidity={true}
                            validators={[]}
                        />
                    </div>
                    <Input
                        id="fecha"
                        type="date"
                        label="Fecha: *"
                        placeholder=""
                        onInput={inputHandler}
                        initialValidity={true}
                        validators={[]}
                    />
                    <h3>Resumen</h3>
                    <Input
                        id="resumen"
                        type="textarea"
                        label="Observaciones"
                        onInput={inputHandler}
                        initialValidity={true}
                        validators={[]}
                    />
                    <Details
                        frases={[
                            { text: '•	El resumen debe dar una idea completa del trabajo.' },
                            { text: '•	Se debe exponer brevemente el problema y la metodología que se utilizó para dar solución (detallar brevemente el contenido de cada capítulo).' },
                            { text: '•	Se debe resumir las principales conclusiones y/o resultados alcanzados en el desarrollo de la memoria.' }
                        ]}
                    />

                    <Details
                        title="Introducción"
                        frases={[
                            { text: '•	Formulación y justificación del problema de la memoria.' },
                            { text: '•	Metodología utilizada para el desarrollo de la memoria.' },
                            { text: '•	Principales conclusiones que se espera obtener de la memoria.' },
                            { text: '•	Identificación de las áreas en las que se desarrollará la tesis, de acuerdo con la temática propuesta.' }
                        ]}
                    >
                        <Input
                            id="introduccion"
                            type="textarea"
                            label="Observaciones"
                            onInput={inputHandler}
                            initialValidity={true}
                            validators={[]}
                        />

                    </Details>

                    <Details
                        title="Marco Teórico"
                        frases={[
                            { text: '•	Coherencia entre la estructura teórica y el desarrollo de la memoria.' },
                            { text: '•	Adecuada referenciación de autores, sitios web, artículos, libros y documentos utilizados para el desarrollo de la memoria (Norma APA).' },
                            { text: '•	Adecuada discusión bibliográfica de los autores consultados.' },
                            { text: '•	Relación del marco teórico con los objetivos planteados.' }
                        ]}
                    >
                        <Input
                            id="marcoTeorico"
                            type="textarea"
                            label="Observaciones"
                            onInput={inputHandler}
                            initialValidity={true}
                            validators={[]}
                        />

                    </Details>


                    <Details
                        title="Metodología"
                        frases={[
                            { text: '•	Coherencia de la metodología a los objetivos de la memoria.' },
                            { text: '•	Uso adecuado de herramientas metodológicas (cuantitativas y cualitativas) tendientes a resolver el problema planteado.' },
                            { text: '•	Claro establecimiento de alcance y limitaciones del proyecto.' },
                            { text: '•	Establecer con claridad el tipo de diseño del estudio (experimental, no experimental, otros)' }
                        ]}
                    >
                        <Input
                            id="metodologia"
                            type="textarea"
                            label="Observaciones"
                            onInput={inputHandler}
                            initialValidity={true}
                            validators={[]}
                        />
                    </Details>

                    <Details
                        title="Desarrollo, aplicación y factibilidad de la investigación"
                        frases={[
                            { text: '•	Adecuación del desarrollo a los objetivos planteados en la tesis.' },
                            { text: '•	Adecuación del desarrollo al marco teórico.' },
                            { text: '•	Consistencia del desarrollo efectuado con los objetivos y la metodología planteada.' },
                            { text: '•	Aporte de la memoria a la solución del problema ingenieril planteado.' },
                            { text: '•	Factibilidad de la solución planteada.' }
                        ]}
                    >
                        <Input
                            id="desarrollo"
                            type="textarea"
                            label="Observaciones"
                            onInput={inputHandler}
                            initialValidity={true}
                            validators={[]}
                        />
                    </Details>

                    <Details
                        title="Conclusiones"
                        frases={[
                            { text: 'Las conclusiones deben contener como mínimo los siguientes puntos:' },
                            { text: '•	Nivel de logro de los objetivos de la tesis.' },
                            { text: '•	Principales resultados obtenidos.' },
                            { text: '•	Análisis crítico del proceso de desarrollo efectuado.' },
                            { text: '•	Consecuencias o impacto observado de los resultados obtenidos.' },
                            { text: '•	Recomendaciones y proyecciones.' },
                            { text: '•	Limitaciones del estudio detectadas durante el desarrollo de este.' }
                        ]}
                    >
                        <Input
                            id="conclusiones"
                            type="textarea"
                            label="Observaciones"
                            onInput={inputHandler}
                            initialValidity={true}
                            validators={[]}
                        />
                    </Details>

                    <Details
                        title="Bibliografía"
                        frases={[
                            { text: '•	Uso adecuado de normas de citación bibliográfica.' },
                            { text: '•	En la bibliografía se debe citar a la totalidad de los autores utilizados en el desarrollo de la tesis.' },
                            { text: '•	Se debe usar el formato APA.' },
                        ]}
                    >
                        <Input
                            id="bibliografia"
                            type="textarea"
                            label="Observaciones"
                            onInput={inputHandler}
                            initialValidity={true}
                            validators={[]}
                        />
                    </Details>

                    <Details
                        title="Formato"
                        frases={[
                            { text: '•	Cumple adecuadamente con el formato de memoria de la Universidad Central.' },
                        ]}
                    >
                        <Input
                            id="formato"
                            type="textarea"
                            label="Observaciones"
                            onInput={inputHandler}
                            initialValidity={true}
                            validators={[]}
                        />
                    </Details>

                    <Input
                        id="otrasObservaciones"
                        type="textarea"
                        label="Otras observaciones"
                        onInput={inputHandler}
                        initialValidity={true}
                        validators={[]}
                    />

                </div>

                <div className={classes.buttonMargin}>
                    <Button type="submit">Enviar</Button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default FinalEvaluation;