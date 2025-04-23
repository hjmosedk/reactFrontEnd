import { Typography, Box } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <Box
      sx={{
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(https://cdn2.thecatapi.com/images/2jp.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant='h1' color='warning' fontWeight={900}>
        404 - Not Found
      </Typography>
      <Typography variant='body1' color='white' fontWeight={900}>
        The page you are looking for does not exist. Reload the page, go back to
        the previous page, or return to the home page.{' '}
      </Typography>
      <Typography variant='body1' color='white' fontWeight={900}>
        If you keep coming back to this page, enjoy this picture of a cute cat :
        {')'}
      </Typography>
    </Box>
  );
};
