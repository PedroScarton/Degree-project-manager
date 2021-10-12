import React, { useState } from 'react';

import Card from '../../../Shared/Components/UI/Card';
import Input from '../../../Shared/Components/FormElements/input';
import Button from '../../../Shared/Components/FormElements/button';
import FormModal from '../../../Shared/Components/Layout/FormModal';
import AdvancedSearchForm from './AdvancedSearchForm';

import classes from './SearchForm.module.css';

const SearchForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log('search');
  };
  const advanceSearch = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };
  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Card>
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes.container}>
            <div className={classes.column}>
              <Input
                label="Título de memoria:"
                helperText="Se buscará las memorias que coincidan con las palabras ingresadas"
              />
            </div>
            <div className={classes.buttonContainer}>
              <Button>Buscar</Button>
              <div className={classes.button}>
                <button onClick={advanceSearch} className={classes.hyperLink}>
                  Búsqueda avanzada
                </button>
              </div>
            </div>
          </div>
        </form>
      </Card>
      <FormModal
        title="Búsqueda avanzada"
        open={isOpen}
        onClose={closeHandler}
        footer={<Button>Buscar</Button>}
      >
        <AdvancedSearchForm />
      </FormModal>
    </div>
  );
};

export default SearchForm;
