import { useState } from 'react';

import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

interface CustomDatePickerProps {
  inputValue: Date | null;
  handleChange: (newValue: Date | null) => void;
}

function CustomDatePicker(props: CustomDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <FormControl sx={{ width: '100%', mb: 2 }}>
        <DatePicker
          views={['year', 'month']}
          label="Mês e Ano"
          minDate={new Date('2012-03-01')}
          maxDate={new Date('2023-06-01')}
          value={props.inputValue}
          onChange={(newValue) => {
            props.handleChange(newValue);
          }}
          renderInput={(params) => (
            <TextField size="small" {...params} helperText={null} />
          )}
        />
      </FormControl>
    </LocalizationProvider>
  );
}

export default CustomDatePicker;
