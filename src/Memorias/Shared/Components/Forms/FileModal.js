import React from 'react';

import Input from '../../../../Shared/Components/FormElements/Input';
import Button from '../../../../Shared/Components/FormElements/Button';

import classes from './FileModal.module.css';

const FileModal = (props) => {
  const submithandler = (e) => {
    e.preventDefault();
    props.onSubmit('archivo enviado');
  };
  const fileDownloadHandler = (e) => {
    e.preventDefault();
    console.log('descargar archivo');
  };
  return (
    <form onSubmit={submithandler}>
      <Button onClick={fileDownloadHandler}>Descargar planilla</Button>
      <div className={classes.formContainer}>
        <Input
          label="Documento de evaluación: *"
          helperText="Por favor subir el archivo Word completado descargado previamente."
        />
        <Input
          label="Calificación de fase: "
          helperText="La calificación debe ser un número decimal entre 1.0 y 7.0"
        />
      </div>
      <Button type="submit">Completar evaluación</Button>
    </form>
  );
};

export default FileModal;
