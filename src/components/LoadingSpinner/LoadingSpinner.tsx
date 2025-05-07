import { CircularProgress, Container } from '@mui/material';

export const LoadingSpinner = () => {
  return (
    <Container>
      <CircularProgress
        color='secondary'
        size={100}
        sx={{ margin: 'auto', display: 'block' }}
      />
    </Container>
  );
};
