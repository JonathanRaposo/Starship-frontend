import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';


const App = () => {
  return (
    <div className="App">

      <div className='wrapper'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<ProductDetailsPage />} />
          <Route path='/create' element={<AddProductPage />} />
          <Route path='/products/edit/:id' element={<EditProductPage />} />



          <Route path='*' element={<ErrorPage />} />




        </Routes>

        <div className='push'></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
