import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CartModal({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const navigate = useNavigate();
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Inter fontunu dynamic olaraq yükləyirik
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  // Checkout düyməsinə kliklədikdə
  const handleCheckout = () => {
    setOrderSuccess(true);
    if (onClearCart) {
      onClearCart();
    }
  };

  // OK düyməsinə kliklədikdə
  const handleOrderConfirm = () => {
    setOrderSuccess(false);
    onClose();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto overflow-x-hidden font-['Inter'] antialiased">
      
      {/* Sifariş Uğurla Qeydə Alındı Modalı (Overlay) */}
      {orderSuccess ? (
        <div className="bg-[#121212] border border-[#1f1f1f] text-white rounded-lg w-full max-w-md p-6 text-center shadow-2xl space-y-4 animate-fade-in">
          <div className="w-12 h-12 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white tracking-tight">Sifarişiniz qeydə alındı!</h3>
            <p className="text-xs text-gray-400 mt-1 font-normal">Təşəkkür edirik. Sifarişiniz uğurla icra olundu.</p>
          </div>
          <button
            onClick={handleOrderConfirm}
            className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold py-2.5 rounded text-xs uppercase tracking-wider transition cursor-pointer active:scale-[0.99]"
          >
            OK
          </button>
        </div>
      ) : (
        <div className="bg-[#121212] border border-[#1f1f1f] text-white rounded-lg w-full max-w-4xl p-5 sm:p-6 md:p-8 relative shadow-2xl overflow-x-hidden">
          
          {/* Bağlamaq düyməsi */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-normal cursor-pointer transition-colors z-10"
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold mb-6 text-white border-b border-[#1f1f1f] pb-4 tracking-tight">
            Shopping Cart ({cartItems.length})
          </h2>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-sm font-normal mb-4">Your cart is empty.</p>
              <button
                onClick={onClose}
                className="bg-[#22c55e] text-black font-semibold text-xs uppercase tracking-wider px-6 py-2.5 rounded hover:bg-[#16a34a] transition cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Sol Tərəf: Məhsulların Siyahısı */}
              <div className="lg:col-span-2 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.selectedColor || index}`}
                    className="flex items-center gap-4 border-b border-[#1f1f1f] pb-6"
                  >
                    {/* Məhsulun Şəkli */}
                    <div className="bg-[#181818] border border-[#262626] rounded p-2 w-20 h-20 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>

                    {/* Məhsul Məlumatı (min-w-0 əlavə olundu ki, daşma etməsin) */}
                    <div className="flex-1 space-y-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm tracking-tight leading-snug truncate">
                        {item.name}
                      </h3>

                      {item.selectedColor && (
                        <span className="inline-block text-[11px] bg-[#1a1a1a] text-gray-300 px-2 py-0.5 rounded border border-[#2a2a2a] capitalize font-normal">
                          {item.selectedColor}
                        </span>
                      )}

                      <div>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-[11px] text-red-500 hover:text-red-400 font-medium flex items-center gap-1 mt-2 cursor-pointer uppercase tracking-wider transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Qiymət və Artırıb-Azaltmaq Düymələri */}
                    <div className="flex flex-col items-end gap-3 flex-shrink-0">
                      <span className="font-semibold text-white text-base tracking-tight">
                        ${(Number(item.price) * item.quantity).toFixed(2)}
                      </span>

                      <div className="flex items-center border border-[#2a2a2a] rounded bg-[#181818]">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2.5 py-1 text-gray-300 hover:text-white hover:bg-[#252525] transition cursor-pointer text-xs"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 text-xs font-semibold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2.5 py-1 text-gray-300 hover:text-white hover:bg-[#252525] transition cursor-pointer text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sağ Tərəf: Order Details */}
              <div className="bg-[#181818] border border-[#1f1f1f] rounded-lg p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white mb-6 border-b border-[#262626] pb-3 tracking-tight">
                    Order details
                  </h3>

                  <div className="flex justify-between items-center text-sm font-medium border-b border-[#262626] pb-4 mb-6">
                    <span className="text-gray-400 font-normal">Total</span>
                    <span className="text-[#22c55e] text-lg font-semibold tracking-tight">
                      ${total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={handleCheckout}
                    className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold py-3 rounded text-xs uppercase tracking-wider transition cursor-pointer active:scale-[0.99]"
                  >
                    Checkout
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full bg-transparent hover:bg-[#222] text-gray-300 hover:text-white border border-[#2a2a2a] font-medium py-3 rounded text-xs transition cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartModal;