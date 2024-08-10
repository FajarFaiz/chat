// components/ErrorSnackbar.js
import React from 'react';
import { Snackbar } from '@mui/material';

const ErrorSnackbar = ({ error, setError }) => (
  <Snackbar
    open={error !== null}
    autoHideDuration={6000}
    onClose={() => setError(null)}
    message={error}
  />
);

export default ErrorSnackbar;
