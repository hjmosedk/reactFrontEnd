import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import Layout from './components/Layout/Layout';
import { HeroPage } from './pages/HeroPage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <HeroPage />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
