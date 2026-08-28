import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Header 'inc' qovluğunda yerləşir
import Header from '../inc/Header';

// Pages
import Home from '../pages/Home';
import Store from '../pages/Store';
import ProductDetail from '../pages/ProductDetail';
import Console from '../pages/Console';
import Lifestyle from '../pages/Lifestyle';
import Mobile from '../pages/Mobile';
import PC from '../pages/PC';
import Support from '../pages/Support';
import Community from '../pages/Community';

function Router({ cartCount, onOpenCart, onAddToCart }) {
  return (
    <>
      <Header cartCount={cartCount} onOpenCart={onOpenCart} />
      <Routes>
        {/* Home və Store komponentlərinə onAddToCart prop-u əlavə olundu */}
        <Route path="/" element={<Home onAddToCart={onAddToCart} />} />
        <Route path="/store" element={<Store onAddToCart={onAddToCart} />} />
        
        {/* Həm /product-detail, həm də /product/:id keçidləri dəstəklənir */}
        <Route 
          path="/product-detail" 
          element={<ProductDetail onAddToCart={onAddToCart} />} 
        />
        <Route 
          path="/product/:id" 
          element={<ProductDetail onAddToCart={onAddToCart} />} 
        />

        <Route path="/console" element={<Console />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/pc" element={<PC />} />
        <Route path="/support" element={<Support />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
}

export default Router;