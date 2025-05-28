import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { SocialLink, LegalLink } from './FooterElements';
import {
  Copyright,
  Facebook,
  X,
  LinkedIn,
  Instagram,
  YouTube,
} from '@mui/icons-material';

export const Footer = () => {
  const socialLinks = [
    {
      icon: <Facebook fontSize='large' />,
      href: 'https://facebook.com',
      label: 'Facebook',
    },
    { icon: <X fontSize='large' />, href: 'https://x.com', label: 'Twitter' },
    {
      icon: <LinkedIn fontSize='large' />,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: <Instagram fontSize='large' />,
      href: 'https://instagram.com',
      label: 'Instagram',
    },
    {
      icon: <YouTube fontSize='large' />,
      href: 'https://youtube.com',
      label: 'YouTube',
    },
  ];

  const legalLinks = [
    { name: 'About', href: '/about' },
    { name: 'Terms', href: '/terms-and-conditions' },
    { name: 'Policies', href: '/policies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='body2' component='div' sx={{ flexGrow: 1 }}>
            <Copyright sx={{ mr: 0.5, fontSize: '1rem' }} />{' '}
            {new Date().getFullYear()} Rainbow Baby Dragon Shop
          </Typography>

          {socialLinks.map((social, index) => (
            <SocialLink
              key={index}
              icon={social.icon}
              href={social.href}
              label={social.label}
            />
          ))}
        </Toolbar>
        <Toolbar>
          <Grid
            container
            justifyContent='space-evenly'
            alignItems='center'
            sx={{ padding: '10px 0', width: '100%' }}
          >
            {legalLinks.map((legal, index) => (
              <Grid key={index}>
                <LegalLink name={legal.name} href={legal.href} />
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
