import { FC, ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Box, Container } from '@mui/material';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Box sx={(theme) => ({ flexGrow: 1, m: theme.spacing(2) })}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </Container>
  );
};

export default Layout;
