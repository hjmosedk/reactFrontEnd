import { FC, ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Box } from '@mui/material';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Box>
  );
};

export default Layout;
