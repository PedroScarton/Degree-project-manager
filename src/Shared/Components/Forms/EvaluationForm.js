import React from 'react';

import {
  VALIDATOR_REQUIRE
} from '../../Utils/validators';
import { useForm } from '../../Hooks/form-hook';

import Input from '../FormElements/Input';
import Button from '../FormElements/Button';
import InputSelect from '../FormElements/InputSelect';

import classes from './Forms.module.css';

const EvaluationForm = (props) => {

  const inputs = {
    numRevision: {
      value: '',
      isValid: false,
    },
    fecha: {
      value: '',
      isValid: false,
    },
    numNota: {
      value: '',
      isValid: false,
    },
    apreciacionTema: {
      value: '',
      isValid: false,
    },
    aspectosCorregir: {
      value: '',
      isValid: false,
    },
    fechaEntrega: {
      value: '',
      isValid: false,
    },
    1: {
      value: '',
      isValid: false,
    },
    2: {
      value: '',
      isValid: false,
    },
    3: {
      value: '',
      isValid: false,
    },
    4: {
      value: '',
      isValid: false,
    },
    5: {
      value: '',
      isValid: false,
    },
    6: {
      value: '',
      isValid: false,
    },
    7: {
      value: '',
      isValid: false,
    },
    8: {
      value: '',
      isValid: false,
    },
    9: {
      value: '',
      isValid: false,
    },
    10: {
      value: '',
      isValid: false,
    },
    11: {
      value: '',
      isValid: false,
    },
    12: {
      value: '',
      isValid: false,
    },
    comentarios: {
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
          <div className={classes.detail}>
            <Input
              id="numRevision"
              type="text"
              label="Revisión N°: *"
              placeholder=""
              onInput={inputHandler}
              initialValidity={true}
              validators={[]}
            />
            <Input
              id="fecha"
              type="date"
              label="Fecha: *"
              placeholder=""
              onInput={inputHandler}
              initialValidity={true}
              validators={[]}
            />
            <Input
              id="numNota"
              type="text"
              label="Nota en número: *"
              placeholder="6,2"
              onInput={inputHandler}
              initialValidity={true}
              validators={[]}
            />
            <Input
              id="textNota"
              type="text"
              label="Nota en palabras:"
              placeholder="Seis coma Dos"
              onInput={inputHandler}
              initialValidity={true}
              validators={[]}
            />
          </div>
          <Input
            id="apreciacionTema"
            type="textarea"
            label="Apreciación general desarrollo del tema:"
            onInput={inputHandler}
            initialValidity={true}
            validators={[]}
          />
          <Input
            id="aspectosCorregir"
            type="textarea"
            label="Aspectos específicos a corregir:"
            onInput={inputHandler}
            initialValidity={true}
            validators={[]}
          />
          <div className={classes.pattern}>
            <div className={classes.patternTitle}>
              <h2>Pauta de evaluación informe final</h2>
            </div>
            <div className={classes.patternContent}>
              <Input
                id="fechaEntrega"
                type="date"
                label="Fecha máxima de entrega: *"
                onInput={inputHandler}
                initialValidity={true}
                validators={[]}
              />
              <div className={classes.subContent}>
                <h3>Aspectos formales</h3>
                <InputSelect
                  id="1"
                  label="1.- Se han cumplido las exigencias hasta este momento para el trabajo tales 
                como: Tamaño de la hoja, letra, espacio, formato, etc. : *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
                <InputSelect
                  id="2"
                  label="2.- La redacción es coherente en términos de construcción de las frases, 
                puntuación, ortografía: *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
                <InputSelect
                  id="3"
                  label="3.- El uso de referencias y citas es adecuado: *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
                <InputSelect
                  id="4"
                  label="4.- Los datos de la bibliografía son completos y exactos: *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
              </div>
              <div className={classes.subContent}>
                <h3>Aspectos de fondo</h3>
                <InputSelect
                  id="5"
                  label="5.- Introducción - Es clara y define adecuadamente los lineamentos: *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
                <InputSelect
                  id="6"
                  label="6.- Objetivos del proyecto - Se formulan con claridad y apunta a los requerimientos del proyecto: *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
                <InputSelect
                  id="7"
                  label="7.- Problematización - Desarrolla las principales dimensiones que intervienen en el problema. Contextualiza la situación general: *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
                <InputSelect
                  id="8"
                  label="8.- Solución a la problemática - Es adecuada de acuerdo con la descripción del problema planteado. Indica con claridad el aporte ingenieril del proyecto: *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
                <InputSelect
                  id="9"
                  label="9.- Marco teórico - La revisión bibliográfica es la pertinente, permitiendo diseñar las principales líneas de explicación para el problema planteado: *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
                <InputSelect
                  id="10"
                  label="10.- Marco teórico - Existe coherencia entre el abordaje teórico y la problemática del proyecto: *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
                <InputSelect
                  id="11"
                  label="11.- Fuentes - Todas las fuentes de información, las gráficas y tablas están documentadas y en el formato deseado: *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
                <InputSelect
                  id="12"
                  label="12.- Cronograma - Se determinan las fechas para el desarrollo del proyecto: *"
                  options={options}
                  onInput={inputHandler}
                  validators={[]}
                  placeholder="Selecciona una opción..."
                />
              </div>
              <Input
                id="comentarios"
                type="textarea"
                label="Comentarios / Observaciones: *"
                onInput={inputHandler}
                initialValidity={true}
                validators={[]}
              />
            </div>
          </div>
        </div>

        <div className={classes.buttonMargin}>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default EvaluationForm;
