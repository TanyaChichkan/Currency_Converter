import React from 'react';
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from '@mui/material';

function SelectElement({ optionsData, name, value, handleChange }) {
  return (
    <FormControl>
      <InputLabel id='currency-select-label'>Currency</InputLabel>
      <Select
        labelId='currency-select-label'
        id='currency-simple-select'
        value={value}
        label='Currency'
        onChange={handleChange}
        name={name}
      >
        {optionsData.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select currency</FormHelperText>
    </FormControl>
  );
}

export default SelectElement;
