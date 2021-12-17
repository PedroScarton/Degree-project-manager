import React from 'react';

import { withStyles } from '@mui/styles';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import './checkBox.css';

const CustomCheckBox = withStyles({
  root: {
    color: '#26A5EA',
    '&$checked': {
      color: '#26A5EA',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CheckboxInput = (props) => {
  return (
    <div className="form-control__checkbox">
      <FormControlLabel
        control={
          <CustomCheckBox checked={props.checked} onChange={props.onChange} name={props.id} />
        }
        label={props.label}
      />
    </div>
  );
};

export default CheckboxInput;
