import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from "react-redux";
import Logout from './Logout';
import { authState } from '../selectors';
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export default function MenuAppBar() {
  const { loggedIn, authChecked, currentUser } = useSelector(authState);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Referral System
          </Typography>
          {authChecked && loggedIn &&
            <>
            <Button href='/referral' color="inherit" component={RouterLink} to="/referral"> Referral </Button>
              {currentUser.email}
              <Logout />
            </>
          }
          {
            (!authChecked || !loggedIn) &&
            <>
            <Button href='/signup' component={RouterLink} sx={{ mr: 2 }} color="inherit" to="/signup"> Sign Up </Button>
            <Button  href='/login' component={RouterLink} sx={{ mr: 2 }} color="inherit" to="/login"> Log In </Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}