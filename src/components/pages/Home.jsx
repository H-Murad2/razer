import React, { useEffect, useState } from "react";
import HeroVid from '/src/assets/huntsman-v3-pro-low-profile-tkl-8khz-animated-homepage-banner-1920-x-700-web.mp4';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = "https://razer-api-88py.vercel.app";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  const endpoints = [
    `${API_BASE_URL}/api/laptop`,
    `${API_BASE_URL}/api/mice`,
    `${API_BASE_URL}/api/keyboards`,
    `${API_BASE_URL}/api/audio`,
    `${API_BASE_URL}/api/chairs`,
    `${API_BASE_URL}/api/controllers`,
    `${API_BASE_URL}/api/mouse-mats`,
    `${API_BASE_URL}/api/content-creation`,
    `${API_BASE_URL}/api/game-room`,
  ];

  // Şəkil yolunu tənzimləyən köməkçi funksiya
  const getProductImage = (product) => {
    let imgPath = product.image || "";

    if (!imgPath) return "";

    if (imgPath.startsWith("/api/images")) {
      imgPath = imgPath.replace("/api/images", "/images");
    }

    if (imgPath.startsWith("http")) return imgPath;

    if (!imgPath.startsWith("/")) {
      imgPath = "/" + imgPath;
    }

    return `${API_BASE_URL}${imgPath}`;
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const responses = await Promise.all(
          endpoints.map((url) =>
            fetch(url)
              .then((res) => (res.ok ? res.json() : []))
              .catch(() => [])
          )
        );

        let selectedProducts = [];

        responses.forEach((products) => {
          if (Array.isArray(products)) {
            const simpleProducts = products.filter(
              (product) => !product.variants || product.variants.length === 0
            );

            selectedProducts.push(...simpleProducts.slice(0, 2));
          }
        });

        setBestSellers(selectedProducts);
      } catch (error) {
        console.error("Error fetching best sellers:", error);
      } font-medium {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  const handleBuyClick = (product, imageUrl) => {
    const productId = product.id || product._uniqueKey || `${product.category || 'item'}-${Math.random().toString(36).substring(2, 7)}`;
    const productData = {
      ...product,
      image: imageUrl,
      name: product.name,
      price: product.price || 0
    };

    navigate(`/product/${productId}`, { state: { product: productData, from: 'home' } });
  };

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold animate-pulse text-[#00FF00]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* --- HERO VIDEO BANNER --- */}
      <section className="relative w-full h-[85vh] min-h-[550px] bg-black overflow-hidden flex flex-col justify-start items-center text-center p-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src={HeroVid}/>
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 pointer-events-none" />

        <div className="relative z-20 max-w-4xl mt-10 flex flex-col items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-wider text-white uppercase leading-tight font-sans font-semibold">
            RAZER HUNTSMAN V3 PRO LOW-PROFILE TENKEYLESS 8KHZ
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-semibold uppercase tracking-widest mt-2">
            FOR THE PRO
          </p>
        </div>
      </section>

      {/* --- BEST SELLERS HİSSƏSİ --- */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-semibold tracking-wide uppercase text-white">
            ON FIRE
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Explore our most popular high-performance gaming gear.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, idx) => {
            const price = product.price || 0;
            const imageUrl = getProductImage(product);
            const badge = product.badge;

            return (
              <div
                key={`${product.category || "item"}-${product.id || idx}`}
                className="bg-[#121212] border border-[#222] hover:border-[#333] transition rounded-sm overflow-hidden flex flex-col justify-between"
              >
                <div className="relative bg-[#1a1a1a] p-6 flex items-center justify-center min-h-[240px]">
                  {badge && (
                    <span className="absolute top-0 left-0 bg-[#FFD100] text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                      {badge}
                    </span>
                  )}

                  <img
                    src={imageUrl}
                    alt={product.name}
                    className="max-h-[300px] object-contain"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-base leading-snug line-clamp-2 text-gray-100">
                      {product.name}
                    </h2>
                    <p className="text-xs text-gray-400 mt-2">
                      {product.category || "Gaming Gear"}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-sm font-semibold text-gray-200">
                      US$
                      {Number(price).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </span>

                    <button 
                      onClick={() => handleBuyClick(product, imageUrl)}
                      className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold py-2.5 uppercase text-xs tracking-wider rounded-xs transition-colors cursor-pointer"
                    >
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;