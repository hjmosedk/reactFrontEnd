import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import Layout from './components/Layout/Layout';
import { HeroPage } from './pages/HeroPage';
import { ProductsProvider } from './contexts/products/ProductsContext';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <Layout>
            <HeroPage />
          </Layout>
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
