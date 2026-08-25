import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import logo from '../../assets/razer-logo.svg';

const categoryEndpoints = [
  { categoryId: 'laptop', url: '/api/laptop' },
  { categoryId: 'mice', url: '/api/mice' },
  { categoryId: 'keyboards', url: '/api/keyboards' },
  { categoryId: 'audio', url: '/api/audio' },
  { categoryId: 'chairs', url: '/api/chairs' },
  { categoryId: 'controllers', url: '/api/controllers' },
  { categoryId: 'mouse-mats', url: '/api/mouse-mats' },
  { categoryId: 'content-creation', url: '/api/content-creation' },
  { categoryId: 'game-room', url: '/api/game-room' },
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
  return `http://localhost:3000${imgPath}`;
};

function Header({ cartCount = 0, onOpenCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();
  const searchRef = useRef(null);

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
              id: item.id || `${categoryId}-${itemIdx}`,
              _uniqueKey: `${endpointIdx}-${item.id || itemIdx}`
            }));
            allFetched.push(...preparedData);
          }
        });

        if (allFetched.length === 0) {
          const mainRes = await fetch('/api/products').catch(() => null);
          if (mainRes && mainRes.ok) {
            const mainData = await mainRes.json();
            if (Array.isArray(mainData)) allFetched = mainData;
          }
        }

        setProducts(allFetched);
      } catch (error) {
        console.error("Axtarış üçün məhsullar yüklənərkən xəta:", error);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim() || !Array.isArray(products)) {
      setSearchResults([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchTerm, products]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectProduct = (product) => {
    setSearchTerm('');
    setIsSearchOpen(false);
    setIsOpen(false);

    const targetId = product.id || product._uniqueKey;
    const selectedVar = product.variants && product.variants.length > 0 ? product.variants[0] : null;

    const productData = {
      ...product,
      image: formatImagePath(selectedVar?.image || product.image),
      name: selectedVar?.name || product.name,
      price: selectedVar?.price || product.price || 0,
      selectedVariant: selectedVar
    };

    // Səhifəyə keçid edirik
    navigate(`/product/${targetId}`, { state: { product: productData } });
  };

  const navLinkStyle = ({ isActive }) =>
    `text-sm font-medium tracking-wider transition-all duration-200 py-1 ${
      isActive
        ? 'text-[#00FF00] border-b-2 border-[#00FF00]'
        : 'text-gray-300 hover:text-[#00FF00]'
    }`;

  const mobileNavLinkStyle = ({ isActive }) =>
    `block text-base font-medium py-2 transition-colors ${
      isActive
        ? 'text-[#00FF00] font-semibold pl-2 border-l-2 border-[#00FF00]'
        : 'text-gray-300 hover:text-[#00FF00]'
    }`;

  return (
    <header className="bg-[#111111] border-b border-[#222222] sticky top-0 z-50 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src={logo} 
                alt="Razer Logo" 
                className="h-8 w-auto hover:brightness-125 transition duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <NavLink to="/" end className={navLinkStyle}>HOME</NavLink>
            <NavLink to="/store" className={navLinkStyle}>STORE</NavLink>
            <NavLink to="/pc" className={navLinkStyle}>PC</NavLink>
            <NavLink to="/console" className={navLinkStyle}>CONSOLE</NavLink>
            <NavLink to="/mobile" className={navLinkStyle}>MOBILE</NavLink>
            <NavLink to="/lifestyle" className={navLinkStyle}>LIFESTYLE</NavLink>
            <NavLink to="/community" className={navLinkStyle}>COMMUNITY</NavLink>
            <NavLink to="/support" className={navLinkStyle}>SUPPORT</NavLink>
          </nav>

          {/* Icons & Search (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 text-gray-300">
            
            <div className="relative w-64 lg:w-80" ref={searchRef}>
              <div className="flex items-center bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-1.5 focus-within:border-[#00FF00] transition w-full">
                <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onFocus={() => setIsSearchOpen(true)}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  className="bg-transparent text-sm text-white focus:outline-none w-full placeholder-gray-500 font-normal"
                />
              </div>

              {isSearchOpen && searchTerm.trim() !== '' && (
                <div className="absolute left-0 right-0 top-full mt-2 w-full bg-[#181818] border border-[#333] rounded-md shadow-2xl overflow-y-auto max-h-80 no-scrollbar z-50">
                  {searchResults.length > 0 ? (
                    searchResults.map((item) => {
                      const img = item.variants?.[0]?.image || item.image;
                      const price = item.variants?.[0]?.price || item.price || 0;

                      return (
                        <div
                          key={item._uniqueKey || item.id}
                          onMouseDown={(e) => {
                            e.preventDefault(); // Click-in vaxtından əvvəl itməsinin qarşısını alır
                            handleSelectProduct(item);
                          }}
                          className="flex items-center gap-3 p-3 hover:bg-[#252525] cursor-pointer transition border-b border-[#222] last:border-b-0"
                        >
                          <img
                            src={formatImagePath(img)}
                            alt={item.name}
                            className="w-10 h-10 object-contain bg-black p-1 rounded flex-shrink-0"
                          />
                          <div className="overflow-hidden">
                            <p className="text-xs font-medium text-white truncate">{item.name}</p>
                            <p className="text-xs text-[#00FF00] font-semibold mt-0.5">
                              US ${Number(price).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-4 text-center text-xs text-gray-400 font-normal">
                      No products found
                    </div>
                  )}
                </div>
              )}
            </div>

            <button 
              onClick={onOpenCart} 
              className="hover:text-[#00FF00] transition-colors relative cursor-pointer p-1"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#00FF00] text-black font-semibold text-xs rounded-full h-4 w-4 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={onOpenCart} 
              className="text-gray-300 hover:text-[#00FF00] relative cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#00FF00] text-black font-semibold text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-[#333] hover:text-[#00FF00] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#222222] px-4 pt-3 pb-6 space-y-3">
          <div className="relative mb-3">
            <div className="flex items-center bg-[#1a1a1a] border border-[#333] rounded-md px-3 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent text-sm text-white focus:outline-none w-full font-normal"
              />
            </div>

            {searchTerm.trim() !== '' && (
              <div className="bg-[#181818] border border-[#333] rounded-md mt-2 overflow-y-auto max-h-60 no-scrollbar">
                {searchResults.length > 0 ? (
                  searchResults.map((item) => {
                    const img = item.variants?.[0]?.image || item.image;
                    const price = item.variants?.[0]?.price || item.price || 0;

                    return (
                      <div
                        key={item._uniqueKey || item.id}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleSelectProduct(item);
                        }}
                        className="flex items-center gap-3 p-2.5 hover:bg-[#252525] cursor-pointer border-b border-[#222] last:border-b-0"
                      >
                        <img
                          src={formatImagePath(img)}
                          alt={item.name}
                          className="w-8 h-8 object-contain bg-black p-1 rounded flex-shrink-0"
                        />
                        <div className="overflow-hidden">
                          <p className="text-xs font-medium text-white truncate">{item.name}</p>
                          <p className="text-xs text-[#00FF00] font-semibold">
                            US$ {Number(price).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-3 text-center text-xs text-gray-400 font-normal">No products found</div>
                )}
              </div>
            )}
          </div>

          <NavLink to="/" end onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>HOME</NavLink>
          <NavLink to="/store" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>STORE</NavLink>
          <NavLink to="/pc" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>PC</NavLink>
          <NavLink to="/console" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>CONSOLE</NavLink>
          <NavLink to="/mobile" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>MOBILE</NavLink>
          <NavLink to="/lifestyle" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>LIFESTYLE</NavLink>
          <NavLink to="/community" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>COMMUNITY</NavLink>
          <NavLink to="/support" onClick={() => setIsOpen(false)} className={mobileNavLinkStyle}>SUPPORT</NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;