import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import Layout from './components/Layout/Layout';
import { HeroPage } from './pages/HeroPage';
import { AllProductsPage } from './pages/AllProductsPage';
import { ProductsProvider } from './contexts/products/ProductsContext';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<HeroPage />} />
              <Route path='/products' element={<AllProductsPage />} />
            </Routes>
          </Layout>
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
