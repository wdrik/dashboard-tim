import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

interface MultiSelectProps {
  tag: string;
  name: string;
  options: string[];
  inputValue: string[];
  handleChange: (event: SelectChangeEvent<string[]>) => void;
}

function MultiSelect({
  tag,
  name,
  options,
  inputValue,
  handleChange,
}: MultiSelectProps) {
  return (
    <FormControl sx={{ width: '100%', mb: 1 }}>
      <InputLabel id="multiple-checkbox-label">{tag}</InputLabel>
      <Select
        labelId="multiple-checkbox-label"
        id="multiple-checkbox"
        multiple
        name={name}
        value={inputValue}
        onChange={handleChange}
        input={<OutlinedInput size="small" label={tag} />}
        renderValue={(selected) => selected.join(', ')}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={inputValue.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultiSelect;
