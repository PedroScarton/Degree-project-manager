import React from 'react';

import { makeStyles } from '@mui/styles';

import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

import { ReactComponent as CloseIcon } from '../../../Assets/icons/cerrar.svg';

import classes from './FormModal.module.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const FormModal = (props) => {
  const styles = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={styles.modal}
      open={props.open ?? true}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open ?? true}>
        <div className={classes.modalContainer}>
          <div className={classes.header}>
            <h1>{props.title}</h1>
            <button className={classes.closeIcon} onClick={props.onClose}>
              <CloseIcon style={{ height: '30px', width: '30px' }} />
            </button>
          </div>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.content}>{props.children}</div>
          {props.footer && <div className={classes.footer}>{props.footer}</div>}
        </div>
      </Fade>
    </Modal>
  );
};

export default FormModal;
