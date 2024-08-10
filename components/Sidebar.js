// components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

const SidebarItem = ({ icon, text, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

const Sidebar = ({ activeTab, setActiveTab }) => (
  <Drawer
    variant="permanent"
    sx={{
      width: 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
    }}
  >
    <Toolbar />
    <List>
      <SidebarItem icon={<HomeIcon />} text="Home" onClick={() => setActiveTab('home')} />
      <SidebarItem icon={<ChatIcon />} text="Chat" onClick={() => setActiveTab('chat')} />
      <SidebarItem icon={<SettingsIcon />} text="Settings" onClick={() => setActiveTab('settings')} />
      <SidebarItem icon={<HelpIcon />} text="Help & FAQ" onClick={() => setActiveTab('help')} />
    </List>
  </Drawer>
);

export default Sidebar;