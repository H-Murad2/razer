import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react>router-dom';

import laptopsImg from '/src/assets/storeCat/laptop.webp';
import miceImg from '/src/assets/storeCat/mice.webp';
import mouseMatsImg from '/src/assets/storeCat/mouse-mats.webp';
import keyboardsImg from '/src/assets/storeCat/keyboards.webp';
import controllersImg from '/src/assets/storeCat/controller.webp';
import audioImg from '/src/assets/storeCat/audio.webp';
import chairsImg from '/src/assets/storeCat/chairs.webp';
import contentCreationImg from '/src/assets/storeCat/content-creation.webp';
import gamerRoomImg from '/src/assets/storeCat/game-room.webp';

// Live Vercel API Base URL
const API_BASE_URL = "https://razer-api-88py.vercel.app";

const categories = [
  { id: 'laptop', name: 'Laptops', image: laptopsImg },
  { id: 'mice', name: 'Mice', image: miceImg },
  { id: 'mouse-mats', name: 'Mouse Mats', image: mouseMatsImg },
  { id: 'keyboards', name: 'Keyboards', image: keyboardsImg },
  { id: 'controllers', name: 'Controllers', image: controllersImg },
  { id: 'audio', name: 'Audio', image: audioImg },
  { id: 'chairs', name: 'Chairs', image: chairsImg },
  { id: 'content-creation', name: 'Content Creation', image: contentCreationImg },
  { id: 'game-room', name: 'Gamer Room', image: gamerRoomImg },
];

const categoryEndpoints = [
  { categoryId: 'laptop', url: `${API_BASE_URL}/api/laptop` },
  { categoryId: 'mice', url: `${API_BASE_URL}/api/mice` },
  { categoryId: 'keyboards', url: `${API_BASE_URL}/api/keyboards` },
  { categoryId: 'audio', url: `${API_BASE_URL}/api/audio` },
  { categoryId: 'chairs', url: `${API_BASE_URL}/api/chairs` },
  { categoryId: 'controllers', url: `${API_BASE_URL}/api/controllers` },
  { categoryId: 'mouse-mats', url: `${API_BASE_URL}/api/mouse-mats` },
  { categoryId: 'content-creation', url: `${API_BASE_URL}/api/content-creation` },
  { categoryId: 'game-room', url: `${API_BASE_URL}/api/game-room` },
];

const formatImagePath = (path) => {
  if (!path) return "";
  let imgPath = path;
  
  if (imgPath.startsWith("/api/images")) {
    imgPath = imgPath.replace("/api/images", "/images");
  }
  
  if (imgPath.startsWith("http")) return imgPath;
  
  if (!imgPath.startsWith("/")) {
    imgPath = "/" + imgPath;
  }
  
  return `${API_BASE_URL}${imgPath}`;
};

const getColorHex = (colorName) => {
  if (!colorName) return "#222222";
  const name = colorName.toLowerCase();
  
  if (name.includes("black") || name.includes("classic")) return "#000000";
  if (name.includes("white") || name.includes("mercury")) return "#ffffff";
  if (name.includes("green") || name.includes("esports")) return "#22c55e";
  if (name.includes("pink") || name.includes("quartz")) return "#ec4899";
  if (name.includes("silver") || name.includes("chroma") || name.includes("light gray")) return "#e5e7eb";
  if (name.includes("gray") || name.includes("gunmetal")) return "#6b7280";
  if (name.includes("red")) return "#ef4444";
  
  return name;
};

function ProductSkeleton() {
  return (
    <div className="bg-[#181818] border border-[#222222] rounded-md overflow-hidden flex flex-col justify-between animate-pulse h-[450px]">
      <div className="bg-[#222222] min-h-[260px] flex items-center justify-center relative">
        <div className="w-32 h-32 bg-[#2a2a2a] rounded-md" />
      </div>
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-3">
          <div className="h-5 bg-[#2a2a2a] rounded w-3/4" />
          <div className="h-3 bg-[#2a2a2a] rounded w-1/2" />
          <div className="h-8 bg-[#2a2a2a] rounded w-full" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="h-6 bg-[#2a2a2a] rounded w-1/3" />
          <div className="h-10 bg-[#2a2a2a] rounded w-full" />
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const navigate = useNavigate();
  const hasVariants = product.variants && product.variants.length > 0;
  
  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? product.variants[0] : null
  );
  const [imgLoading, setImgLoading] = useState(true);

  const getRawImage = () => {
    if (selectedVariant) {
      return (
        selectedVariant.image ||
        selectedVariant.img ||
        selectedVariant.picture ||
        selectedVariant.imageUrl ||
        product.image
      );
    }
    return product.image;
  };

  const currentImage = formatImagePath(getRawImage());
  const currentName = selectedVariant?.name || product.name;
  const price = selectedVariant?.price || product.price || 0;
  const badge = product.badge || "ONLY AT RAZER";

  const handleBuyClick = (e) => {
    e.stopPropagation();
    const productId = product.id || product._uniqueKey;
    const productData = {
      ...product,
      image: currentImage,
      name: currentName,
      price: price,
      selectedVariant: selectedVariant
    };
    
    navigate(`/product/${productId}`, { state: { product: productData } });
  };

  return (
    <div className="bg-[#181818] border border-[#222222] rounded-md overflow-hidden flex flex-col justify-between group">
      <div className="relative bg-[#222222] p-6 flex items-center justify-center min-h-[260px]">
        {badge && (
          <span className="absolute top-0 left-0 bg-[#FFB800] text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
            {badge}
          </span>
        )}

        {imgLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#222222] z-20">
            <div className="w-8 h-8 border-4 border-[#00FF00] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <img
          src={currentImage}
          alt={currentName}
          onLoad={() => setImgLoading(false)}
          onError={() => setImgLoading(false)}
          className={`max-h-[200px] object-contain group-hover:scale-105 transition-all duration-300 ${
            imgLoading ? "opacity-0" : "opacity-100"
          }`}
        />

        {hasVariants && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 p-1.5 rounded-full backdrop-blur-sm z-10">
            {product.variants.map((variant, i) => {
              const colorLabel = variant.color || variant.name || variant.title || `Option ${i + 1}`;
              
              const isSelected =
                selectedVariant === variant ||
                selectedVariant?.color === variant.color ||
                selectedVariant?.id === variant.id;

              const hexColor = getColorHex(colorLabel);

              return (
                <button
                  key={`var-${i}-${colorLabel}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (selectedVariant !== variant) {
                      setImgLoading(true);
                      setSelectedVariant(variant);
                    }
                  }}
                  title={colorLabel}
                  className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                    isSelected
                      ? "ring-2 ring-[#22c55e] scale-110 border-white"
                      : "border-gray-500 hover:scale-105 opacity-70"
                  }`}
                  style={{ backgroundColor: hexColor }}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-3">
          <h2 className="font-semibold text-lg leading-tight text-white line-clamp-2">
            {currentName}
          </h2>

          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span>Key Features</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <p className="text-xs text-gray-300 leading-snug line-clamp-2">
            {product.description ||
              "High-performance gaming gear designed for competitive play."}
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <div>
            <span className="block text-[11px] text-gray-400 font-medium">
              From
            </span>
            <span className="text-base font-semibold text-white">
              US$
              {Number(price).toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>

          <button 
            onClick={handleBuyClick}
            className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold py-3 uppercase text-sm tracking-wider rounded-md transition-colors cursor-pointer"
          >
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}

function Store() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const responses = await Promise.all(
          categoryEndpoints.map(({ categoryId, url }) =>
            fetch(url)
              .then((res) => (res.ok ? res.json() : []))
              .then((data) => ({ categoryId, data }))
              .catch(() => ({ categoryId, data: [] }))
          )
        );

        let allFetched = [];
        responses.forEach(({ categoryId, data }, endpointIdx) => {
          if (Array.isArray(data)) {
            const preparedData = data.map((item, itemIdx) => ({
              ...item,
              categoryId,
              _uniqueKey: `${endpointIdx}-${item.id || itemIdx}-${Math.random().toString(36).substring(2, 9)}`
            }));
            allFetched.push(...preparedData);
          }
        });

        const shuffledProducts = allFetched.sort(() => 0.5 - Math.random());
        setProducts(shuffledProducts);
      } catch (error) {
        console.error("Error fetching store products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  const handleCategoryChange = (catId) => {
    if (selectedCategory === catId) return;
    setCategoryLoading(true);
    setSelectedCategory(catId);
    
    setTimeout(() => {
      setCategoryLoading(false);
    }, 300);
  };

  const filteredProducts = selectedCategory
    ? products.filter(item => item.categoryId === selectedCategory)
    : products;

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold animate-pulse text-[#00FF00]">Loading Store...</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-wrap items-center justify-center gap-6 text-center">
          {categories.map((item) => {
            const isSelected = selectedCategory === item.id;

            return (
              <div
                key={item.id}
                onClick={() => handleCategoryChange(item.id)}
                className="flex flex-col items-center group cursor-pointer w-24"
              >
                <div className="h-20 w-20 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span
                  className={`text-xs font-medium transition-colors ${
                    isSelected
                      ? "text-[#00FF00] font-bold"
                      : "text-gray-300 group-hover:text-[#00FF00]"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="border-t border-[#222222] pt-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-wider text-[#00FF00]">
            DISCOVER GEAR FOR GAMERS. BY GAMERS.
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Razer mice, keyboards, headsets, laptops & more
          </p>
        </div>

        {categoryLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <ProductSkeleton key={idx} />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No products found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product._uniqueKey} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Store;