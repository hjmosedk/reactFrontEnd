import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import Layout from './components/Layout/Layout';
import { HeroPage } from './pages/HeroPage';
import { AllProductsPage } from './pages/AllProductsPage';
import { ProductInfoPage } from './pages/ProductInfoPage';
import { ProductsProvider } from './contexts/products/ProductsContext';
import { CssBaseline, Container } from '@mui/material';
import { Routes, Route } from 'react-router';
import { NotFoundPage } from './pages/404-NotFoundPage';

function App() {
  return (
    <Container maxWidth={false}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<HeroPage />} />
              <Route path='/products' element={<AllProductsPage />} />
              <Route path='/products/:id' element={<ProductInfoPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </ProductsProvider>
      </ThemeProvider>
    </Container>
  );
}

export default App;
