import React, { useState, useContext } from 'react';

import { AuthContext } from '../../../Shared/Context/auth-context';

import Card from '../../../Shared/Components/UI/Card';
import Title from '../../Shared/Layout/Title';
import ArchivosFase from '../../Shared/Components/ArchivosFase';
import FormModal from '../../../Shared/Components/Layout/FormModal';
import DateForm from '../Components/DateForm';

import classes from './MemoryFiles.module.css';
import FormPage from '../../../Shared/Components/Layout/FormPage';

const MemoryFiles = (props) => {
  const auth = useContext(AuthContext);
  // Visual states
  const [showPrincipal, setShowPrincipal] = useState(true);
  const [file, setFile] = useState(false);
  const [fileType, setFileType] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const dateChangeModalHandler = (state) => {
    setIsOpen(state);
  };

  const onDateChange = (value) => {
    console.log('Enviando nueva fecha: ', new Date(value));
    dateChangeModalHandler(false);
  };

  const showPrincipalHandler = () => {
    setFile(undefined);
    setFileType(undefined);
    setShowPrincipal(true);
  };

  const onSelectFile = (type, id) => {
    setFile(true);
    setFileType(type);
    setShowPrincipal(false);
  };

  return (
    <div className={classes.container}>
      {showPrincipal && (
        <>
          <Card>
            <Title goBack={props.goBack}>
              <div className={classes.headTitle}>
                <h1>{props.title}</h1>
                <p>{new Date().toLocaleDateString('en-US')}</p>
              </div>
            </Title>
            <ArchivosFase
              onDateChange={() => dateChangeModalHandler(true)}
              onOpenFile={onSelectFile}
              active={props.fase === props.actual}
              fase={props.fases.find((fase) => fase.tipo === props.fase)}
              teachers={props.teachers}
              students={props.members}
              isCoordinador={auth.role === 'COORDINADOR'}
            />
          </Card>
          <FormModal
            title="Modificación de fecha"
            open={isOpen}
            onClose={() => dateChangeModalHandler(false)}
          >
            <DateForm onSubmit={onDateChange} />
          </FormModal>
        </>
      )}
      {file && <FormPage goBack={showPrincipalHandler} type={fileType} />}
    </div>
  );
};

export default MemoryFiles;
