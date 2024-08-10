// components/AppHeader.js
import React from 'react';
import { AppBar, Toolbar, Typography, TextField, MenuItem, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const AppHeader = ({ language, setLanguage, searchTerm, setSearchTerm, mode, setMode }) => (
  <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        Headstarter AI Support
      </Typography>
      <TextField
        select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        sx={{ width: 100, mr: 2 }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Español</MenuItem>
      </TextField>
      <TextField
        size="small"
        placeholder="Search messages..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mr: 2 }}
      />
      <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit">
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
