import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialLink = ({
  icon,
  href,
  label,
}: {
  icon: any;
  href: string;
  label: string;
}) => (
  <a
    href={href}
    aria-label={label}
    style={{ color: 'white', textDecoration: 'none' }}
  >
    <FontAwesomeIcon icon={icon} size='2x' style={{ marginRight: '10px' }} />
  </a>
);

export const LegalLink = ({ name, href }: { name: string; href: string }) => (
  <Typography
    component={'a'}
    href={href}
    sx={{
      textDecoration: 'none',
      color: 'white',
      margin: '0 10px',
      fontSize: '1.5rem',
    }}
  >
    {name}
  </Typography>
);
