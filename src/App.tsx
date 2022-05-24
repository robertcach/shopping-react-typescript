import Home from './views/Home/Home';
import './App.scss';
import { Route, Routes } from 'react-router';
import ProductDetail from './views/ProductDetail/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
