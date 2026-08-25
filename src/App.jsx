import { useState, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { DataProvider } from './components/context/DataContext';
import Router from './components/Router/Router';
import CartModal from './components/pages/CartModal';

// Səhifə dəyişdikdə yuxarı scroll edən köməkçi komponent
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // İkon üçün YALNIZ UNİKAL MƏHSUL NÖVLƏRİNİN SAYI:
  const uniqueCartCount = cartItems.length;

  // Səbətə məhsul əlavə etmək
  const handleAddToCart = (newItem) => {
    setCartItems((prev) => {
      // Unikal ID və seçilmiş rəngə görə mövcud məhsulu tapırıq
      const existingIndex = prev.findIndex(
        (item) => item.id === newItem.id && item.selectedColor === newItem.selectedColor
      );

      if (existingIndex > -1) {
        // Mövcud məhsuldursa, səbətin daxilindəki sayı (quantity) 1 vahid artırırıq
        return prev.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Yeni növ məhsuldursa, massivə yeni element kimi əlavə edirik
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  // Miqdarı dəyişmək (+/-)
  const handleUpdateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  // Məhsulu silmək
  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Səbəti tamamilə təmizləmək (Checkout zamanı)
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      {/* ScrollToTop mütləq BrowserRouter daxilində olmalıdır */}
      <ScrollToTop />
      <DataProvider>
        <Router 
          cartCount={uniqueCartCount} 
          onOpenCart={() => setIsCartOpen(true)}
          onAddToCart={handleAddToCart}
        />
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;