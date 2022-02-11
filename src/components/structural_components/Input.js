import { TextField } from '@mui/material';
import useWindowSize from '../../custom_hooks/useWindowResize';

const Input = ({ value, handleChange, name }) => {
  const { width } = useWindowSize();
  return (
    <>
      <TextField
        style={{ width: width < 375 ? '50%' : '60%' }}
        id='filled-number'
        label='Amount'
        type='number'
        name={name}
        value={value}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        helperText='Insert amount'
      />
    </>
  );
};

export default Input;
