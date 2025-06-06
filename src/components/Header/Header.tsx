import { useState } from 'react';

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  AccountCircle,
  Menu as MenuIcon,
  Settings,
  Home,
  ShoppingCart,
  AddCircle,
  Inventory2,
  ChecklistRtl,
} from '@mui/icons-material';

import { useNavigate } from 'react-router';
export const Header = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleClose();
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

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
            <MenuIcon />
          </IconButton>
          <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
            Rainbow Baby Dragon Shop
          </Typography>
          <div>
            <IconButton
              size='large'
              aria-label='return to main page'
              color='inherit'
              onClick={() => navigate('/')}
            >
              <Home />
            </IconButton>
          </div>
          <div>
            <IconButton
              size='large'
              aria-label='the cart of the current user'
              color='inherit'
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart />
            </IconButton>
          </div>
          <div>
            <IconButton
              size='large'
              aria-label='account of the current user'
              color='inherit'
              onClick={() => navigate('/account')}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div>
            <IconButton
              size='large'
              aria-label='settings'
              color='inherit'
              onClick={handleMenu}
            >
              <Settings />
            </IconButton>
          </div>
          <Menu
            anchorEl={anchorElement}
            open={Boolean(anchorElement)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleNavigate('/new-product')}>
              New Product <AddCircle sx={{ paddingLeft: 1 }} />
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('/all-products')}>
              List All Products <Inventory2 sx={{ paddingLeft: 1 }} />
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('/all-orders')}>
              List All Orders {} <ChecklistRtl sx={{ paddingLeft: 1 }} />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
