import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const getColorHex = (colorName) => {
  if (!colorName) return "#222222";
  const name = colorName.toLowerCase();
  if (name.includes("black") || name.includes("classic")) return "#000000";
  if (name.includes("white") || name.includes("mercury")) return "#ffffff";
  if (name.includes("green") || name.includes("esports")) return "#22c55e";
  if (name.includes("pink") || name.includes("quartz")) return "#ec4899";
  if (name.includes("silver") || name.includes("chroma")) return "#e5e7eb";
  if (name.includes("gray") || name.includes("gunmetal")) return "#6b7280";
  if (name.includes("red")) return "#ef4444";
  return name;
};

const formatImagePath = (path) => {
  if (!path) return "";
  let imgPath = path;
  if (imgPath.startsWith("/api/images")) imgPath = imgPath.replace("/api/images", "/images");
  if (imgPath.startsWith("http")) return imgPath;
  if (!imgPath.startsWith("/")) imgPath = "/" + imgPath;
  return `http://localhost:3000${imgPath}`;
};

function ProductDetail({ onAddToCart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  // İstifadəçinin Home səhifəsindən gəlib-gəlmədiyini yoxlayırıq
  const isFromHome = location.state?.from === 'home';
  const backPath = isFromHome ? '/' : '/store';
  const backText = isFromHome ? 'Back to Home' : 'Back to Store';

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.state?.product) {
      const stateProduct = location.state.product;
      setProduct(stateProduct);
      setSelectedVariant(
        stateProduct.selectedVariant ||
        (stateProduct.variants && stateProduct.variants.length > 0 ? stateProduct.variants[0] : null)
      );
      setLoading(false);
      return;
    }

    if (id) {
      setLoading(true);
      fetch(`http://localhost:3000/api/products/${id}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data) {
            setProduct(data);
            setSelectedVariant(data.variants && data.variants.length > 0 ? data.variants[0] : null);
          } else {
            setProduct(null);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Məhsul yüklənərkən xəta baş verdi:", err);
          setProduct(null);
          setLoading(false);
        });
    }
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center font-['Inter']">
        <p className="text-[#22c55e] text-xs uppercase tracking-widest font-medium animate-pulse">
          Məhsul yüklənir...
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-[#0a0a0a] text-white min-h-screen flex flex-col items-center justify-center p-6 text-center font-['Inter']">
        <p className="text-gray-400 text-sm font-medium mb-5">Məhsul tapılmadı.</p>
        <button
          onClick={() => navigate(backPath)}
          className="bg-[#22c55e] text-black font-semibold text-xs tracking-wider uppercase px-6 py-2.5 rounded-md hover:bg-[#16a34a] transition-all duration-200 cursor-pointer"
        >
          {backText}
        </button>
      </div>
    );
  }

  const hasVariants = product.variants && product.variants.length > 0;

  const currentImage = selectedVariant
    ? formatImagePath(selectedVariant.image || selectedVariant.img || selectedVariant.picture || selectedVariant.imageUrl || product.image)
    : formatImagePath(product.image);

  const currentPrice = selectedVariant?.price || product.price || 0;
  const colorLabel = selectedVariant?.color || selectedVariant?.name || "";

  const handleAddToCartClick = () => {
    if (onAddToCart) {
      onAddToCart({
        id: product.id || product.name,
        name: product.name,
        price: currentPrice,
        image: currentImage,
        selectedColor: colorLabel,
        quantity: 1
      });
    }

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative font-['Inter'] selection:bg-[#22c55e] selection:text-black antialiased">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#141414] border border-[#22c55e]/50 text-white px-5 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-fade-in">
          <span className="w-2 h-2 bg-[#22c55e] rounded-full"></span>
          <span className="text-xs font-medium tracking-wide">Added to cart successfully!</span>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        {/* Dynamic Back Button */}
        <button
          onClick={() => navigate(backPath)}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#22c55e] text-xs font-medium transition-colors cursor-pointer mb-8 group"
        >
          <svg className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {backText}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image Box */}
          <div className="bg-[#121212] border border-[#1f1f1f] rounded-lg p-6 flex items-center justify-center min-h-[380px] transition-all duration-300">
            <img 
              src={currentImage} 
              alt={product.name} 
              className="max-h-[320px] w-auto object-contain transition-transform duration-300" 
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-[#22c55e] text-[11px] font-medium uppercase tracking-widest block mb-1">
                {product.category || "Gaming Gear"}
              </span>
              <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                {product.name}
              </h1>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed font-normal">
              {product.description || "High-performance gaming gear designed for competitive play and ultimate durability."}
            </p>

            {/* Variants */}
            {hasVariants && (
              <div className="space-y-3 border-y border-[#1a1a1a] py-4 my-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-gray-400 font-normal">Color:</span>
                  <span className="text-white font-medium capitalize">{colorLabel || "Default"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {product.variants.map((variant, index) => {
                    const variantColorName = variant.color || variant.name || `Option ${index + 1}`;
                    const isSelected = selectedVariant === variant || selectedVariant?.color === variant.color;
                    return (
                      <button
                        key={`detail-var-${index}`}
                        onClick={() => setSelectedVariant(variant)}
                        className={`w-6 h-6 rounded-full border transition-all cursor-pointer ${
                          isSelected 
                            ? "ring-2 ring-[#22c55e] ring-offset-2 ring-offset-[#0a0a0a] border-white scale-105" 
                            : "border-gray-700 opacity-50 hover:opacity-100"
                        }`}
                        style={{ backgroundColor: getColorHex(variantColorName) }}
                        title={variantColorName}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Price & Cart */}
            <div className="space-y-4 pt-1">
              <div>
                <span className="block text-[11px] text-gray-400 uppercase tracking-wider font-normal mb-1">Price</span>
                <span className="text-2xl font-semibold text-white tracking-tight">
                  ${Number(currentPrice).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </div>

              <button
                onClick={handleAddToCartClick}
                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold py-3.5 uppercase text-xs tracking-wider rounded transition-colors cursor-pointer active:scale-[0.99]"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;