import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import {
  AccountCircle,
  Menu,
  Settings,
  Home,
  ShoppingCart,
} from '@mui/icons-material';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
            Rainbow Baby Dragon Shop
          </Typography>
          <div>
            <IconButton
              size='large'
              aria-label='return to main page'
              color='inherit'
            >
              <Home />
            </IconButton>
          </div>
          <div>
            <IconButton
              size='large'
              aria-label='the cart of the current user'
              color='inherit'
            >
              <ShoppingCart />
            </IconButton>
          </div>
          <div>
            <IconButton
              size='large'
              aria-label='account of the current user'
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div>
            <IconButton size='large' aria-label='settings' color='inherit'>
              <Settings />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
