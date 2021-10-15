import React, { useState } from 'react';

import Card from '../../../Shared/Components/UI/Card';
import Button from '../../../Shared/Components/FormElements/Button';
import Input from '../../../Shared/Components/FormElements/Input';
import InputSelect from '../../../Shared/Components/FormElements/InputSelect';
import classes from './IniciarSolicitud.module.css';

const IniciarSolicitud = () => {
  const [numIntegrantes, setnumIntegrantes] = useState(3);

  return (
    <main className={classes.container}>
      <div className={classes.head}>
        <h1>Solicitud de memoria</h1>
        <p>(*) indica que los campos obligatorios</p>
      </div>
      <Card>
        <form className={classes.memory}>
          <div className={classes.memoryInfo}>
            <h2>Información sobre la memoria</h2>
            <Input
              label="Titulo: *"
              helperText="El titulo indicado aquí debe coincidir con el que señalará en el formulario."
            />
            <Input
              label="Descripción: *"
              helperText="La descripción debe ser un breve resumen de los temas a tratar en su memoria."
            />
            <div className={classes.formSelects}>
              <InputSelect
                label="Profesor guía: "
                helperText="En caso de haber conversado con un docente seleccionelo como guía"
              />
              <InputSelect
                label="Área de estudio: *"
                helperText="Especifique el campo de estudio que abarca su memoria"
              />
            </div>
          </div>
          <div className={classes.memoryBody}>
            <div className={classes.memoryGroup}>
              <h2>Información sobre el grupo</h2>
              <InputSelect
                label="Número de estudiantes:* "
                helperText="Cantidad de integrantes del grupo"
              />
              <Input
                label="Correo institucional : *"
                helperText="El correo debe pertener a la red de la universidad"
              />
              {numIntegrantes >= 2 && (
                <Input
                  label="Correo institucional : *"
                  helperText="El correo debe pertener a la red de la universidad"
                />
              )}
              {numIntegrantes >= 3 && (
                <Input
                  label="Correo institucional : *"
                  helperText="El correo debe pertener a la red de la universidad"
                />
              )}
            </div>
            <div className={classes.memoryFile}>
              <div className={classes.memoryFileHead}>
                <h2>Formulario de Solicitud</h2>
                <p>
                  Deberá descargar la planilla que vendrá con los campos que solicita la universidad
                  por reglamentos internos para iniciar el proceso de memoria
                </p>
              </div>
              <Button>Descargar plantilla</Button>
              <Input
                label="Documento de solicitud: *"
                helperText="Por favor subir el archivo Word completado descargado previamente."
              />
            </div>
          </div>
          <div className={classes.Button}>
            <Button>Enviar Solicitud</Button>
          </div>
        </form>
      </Card>
    </main>
  );
};

export default IniciarSolicitud;
