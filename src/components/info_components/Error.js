import { useState, useEffect } from 'react';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

const Error = ({ error, message }) => {
  const [openErrorMsg, setOpenErrorMsg] = useState(false);

  useEffect(() => setOpenErrorMsg(true), [error]);

  const handleCloseErrorMsg = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenErrorMsg(false);
  };
  return (
    <Snackbar
      open={openErrorMsg}
      autoHideDuration={2000}
      onClose={handleCloseErrorMsg}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{ width: '50%' }}
    >
      <Alert severity='error' sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Error;
