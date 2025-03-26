import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Grid } from '@mui/material';
import { SocialLink, LegalLink } from './FooterElements';
import { Copyright } from '@mui/icons-material';

export const Footer = () => {
  const socialLinks = [
    { icon: faFacebook, href: '#', label: 'Facebook' },
    { icon: faTwitter, href: '#', label: 'Twitter' },
    { icon: faLinkedin, href: '#', label: 'LinkedIn' },
    { icon: faInstagram, href: '#', label: 'Instagram' },
    { icon: faYoutube, href: '#', label: 'YouTube' },
  ];

  const legalLinks = [
    { name: 'About', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Policies', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='body2' component='div' sx={{ flexGrow: 1 }}>
            <Copyright sx={{ mr: 0.5 }} /> {new Date().getFullYear()} Rainbow
            Baby Dragon Shop
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
