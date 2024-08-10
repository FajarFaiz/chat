// components/SettingsArea.js
import React from 'react';
import { Box, Typography, Switch, FormControlLabel, Slider, Select, MenuItem } from '@mui/material';

const SettingsArea = () => {
  const [notifications, setNotifications] = React.useState(true);
  const [fontSize, setFontSize] = React.useState(16);
  const [theme, setTheme] = React.useState('light');

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Settings</Typography>
      <FormControlLabel
        control={<Switch checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />}
        label="Enable Notifications"
      />
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom>Font Size</Typography>
        <Slider
          value={fontSize}
          onChange={(_, newValue) => setFontSize(newValue)}
          aria-labelledby="font-size-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={12}
          max={24}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom>Theme</Typography>
        <Select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          fullWidth
        >
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
          <MenuItem value="system">System</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default SettingsArea;
