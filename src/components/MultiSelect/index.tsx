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

function MultiSelect(props: MultiSelectProps) {
  return (
    <FormControl sx={{ width: '100%', mb: 2 }}>
      <InputLabel id="multiple-checkbox-label">{props.tag}</InputLabel>
      <Select
        labelId="multiple-checkbox-label"
        id="multiple-checkbox"
        multiple
        name={props.name}
        value={props.inputValue}
        onChange={props.handleChange}
        input={<OutlinedInput size="small" label={props.tag} />}
        renderValue={(selected) => selected.join(', ')}
      >
        {props.options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={props.inputValue.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultiSelect;
