import React, { useState, useEffect } from 'react';
import communityBanner from '/src/assets/razer-community-hero.webp';
import cSl1 from '/src/assets/IskurV2NewGen_HCDA_Header.png.webp';
import cSl2 from '/src/assets/MarvelRivals_MidSeasonFinals_Header.png.webp';
import cSl3 from '/src/assets/Untitled-design-6.png.webp';
import cSl4 from '/src/assets/HyperSpeed_Wireless_Gen-2_Header.png.webp';
import cSl5 from "/src/assets/HM-KV.png.webp";
import cSl6 from "/src/assets/1920x400-team-faker.webp";
import cSl7 from "/src/assets/1920x400-ceo-min-liang-tan.webp";

import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaTwitch, 
  FaDiscord, 
  FaXTwitter 
} from 'react-icons/fa6';
import { TbBrandThreads, TbBrandTiktok } from 'react-icons/tb';

// Alt Banner Slider Komponenti
function RazerBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'custom_gold',
      title: 'RAZER GOLD',
      socials: [
        { icon: <FaFacebookF size={18} />, href: 'https://facebook.com/RazerGold' },
        { icon: <FaInstagram size={18} />, href: 'https://instagram.com/RazerGold' },
      ],
    },
    {
      id: 2,
      type: 'image_hero',
      title: 'TEAM RAZER',
      image: cSl6,
      socials: [
        { icon: <FaFacebookF size={18} />, href: 'https://facebook.com/TeamRazer' },
        { icon: <FaInstagram size={18} />, href: 'https://instagram.com/TeamRazer' },
        { icon: <FaXTwitter size={18} />, href: 'https://x.com/TeamRazer' },
        { icon: <TbBrandThreads size={20} />, href: 'https://threads.net/@TeamRazer' },
      ],
    },
    {
      id: 3,
      type: 'image_hero',
      title: 'CEO, CHIEF GAMER, FATHER OF SNEKI',
      image: cSl7,
      socials: [
        { icon: <FaFacebookF size={18} />, href: 'https://facebook.com/minliangtan' },
        { icon: <FaInstagram size={18} />, href: 'https://instagram.com/minliangtan' },
        { icon: <FaXTwitter size={18} />, href: 'https://x.com/minliangtan' },
        { icon: <TbBrandThreads size={20} />, href: 'https://threads.net/@minliangtan' },
      ],
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="bg-black py-8 px-2 md:px-8 font-['Inter'] antialiased select-none">
      <div className="max-w-[1400px] mx-auto relative flex items-center justify-between">
        
        {/* Sol Ox */}
        <button 
          onClick={handlePrev}
          className="text-[#44d62c] hover:scale-110 transition-transform duration-200 p-2 focus:outline-none z-20 shrink-0 cursor-pointer"
        >
          <svg className="w-6 h-12 md:w-8 md:h-16" viewBox="0 0 24 48" fill="none">
            <path d="M18 6L6 24L18 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Banner Frame */}
        <div className="w-full mx-2 md:mx-4 overflow-hidden rounded-md border border-[#1a1a1a] bg-black">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div 
                key={slide.id}
                className="w-full shrink-0 h-[220px] md:h-[280px] relative flex items-center justify-between px-6 md:px-16 bg-black overflow-hidden"
              >
                {/* SLAYD 1: RAZER GOLD (Nöqtəli fon) */}
                {slide.type === 'custom_gold' && (
                  <div className="absolute inset-0 bg-[#021505] bg-[radial-gradient(#44d62c_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                )}

                {/* ARXA FON ŞƏKLİ (CEO və Team Razer üçün) */}
                {slide.type === 'image_hero' && (
                  <div className="absolute inset-0 left-0 top-0 bottom-0 w-full md:w-2/3 z-0 pointer-events-none">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="h-full w-full object-cover object-left md:object-left-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-black" />
                  </div>
                )}

                {/* SOL HİSSƏ (Yalnız Gold üçün mətn) */}
                <div className="z-10 flex items-center w-full md:w-1/2">
                  {slide.type === 'custom_gold' && (
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-400 border border-yellow-200 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                          <span className="text-black font-semibold text-lg md:text-xl">🐍</span>
                        </div>
                        <div className="text-xl md:text-3xl font-semibold tracking-tight text-white">
                          RAZER<span className="text-xs align-top">™</span> <span className="font-normal text-gray-300">GOLD</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide uppercase">
                          WHATEVER YOU PLAY
                        </h3>
                        <p className="text-[#44d62c] font-medium text-xs md:text-sm tracking-widest uppercase mt-1">
                          PAY WITH RAZER GOLD
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* SAĞ HİSSƏ: Başlıq və Sosial İkonlar */}
                <div className="z-10 flex flex-col items-center md:items-end space-y-4 w-full md:w-1/2 ml-auto">
                  <h2 className="text-white font-semibold text-lg md:text-xl lg:text-2xl tracking-tight uppercase text-center md:text-right max-w-xs md:max-w-md drop-shadow-md">
                    {slide.title}
                  </h2>
                  
                  <div className="flex items-center gap-3">
                    {slide.socials.map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.href} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#44d62c]/60 text-[#44d62c] bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-[#44d62c] hover:text-black transition-all duration-300 cursor-pointer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* AŞAĞI NÖQTƏLƏR */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === index 
                          ? 'bg-[#44d62c] w-3 h-3' 
                          : 'bg-white/50 hover:bg-white/80 w-2 h-2'
                      }`}
                    />
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Sağ Ox */}
        <button 
          onClick={handleNext}
          className="text-[#44d62c] hover:scale-110 transition-transform duration-200 p-2 focus:outline-none z-20 shrink-0 cursor-pointer"
        >
          <svg className="w-6 h-12 md:w-8 md:h-16" viewBox="0 0 24 48" fill="none">
            <path d="M6 6L18 24L6 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </section>
  );
}

// Əsas Səhifə Komponenti
function Community() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    // Inter fontunu dynamik yükləyirik
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function SocialIcon({ children, href }) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 md:w-13 md:h-13 rounded-full border border-[#44d62c]/80 text-[#44d62c] hover:bg-[#44d62c] hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      >
        {children}
      </a>
    );
  }

  const newsItems = [
    {
      id: 1,
      image: cSl1,
      category: 'COMMUNITY',
      title: 'Razer Iskur V2 NewGen Wins Gold at the Human-Centered Design Award 2026',
    },
    {
      id: 2,
      image: cSl2,
      category: 'TECHNOLOGY',
      title: 'Wireless Wins: Redefining Competitive Play with Razer HyperSpeed Wireless Gen-2',
    },
    {
      id: 3,
      image: cSl3,
      category: 'COMMUNITY',
      title: 'Mission Ready: Deploy with the Razer | Delta Force Collection',
    },
    {
      id: 4,
      image: cSl4,
      category: 'HARDWARE',
      title: 'Unmatched Precision: The All-New Razer Blade 16 Gaming Laptop',
    },
    {
      id: 5,
      image: cSl5,
      category: 'ESPORTS',
      title: 'Razer Viper V3 Pro Dominates International Esports Tournaments',
    },
  ];

  const maxIndex = newsItems.length - visibleCards;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="bg-black font-['Inter'] antialiased text-white selection:bg-[#44d62c] selection:text-black">
      <div>
        <img src={communityBanner} alt="Razer Community Hero" className="w-full object-cover" />
        
        {/* Banner Section */}
        <section className="bg-black text-white min-h-[50vh] flex flex-col items-center justify-center px-4 py-16 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase leading-tight tracking-tight text-[#44d62c]">
            WELCOME TO THE
            <br />
            RAZER COMMUNITY
          </h1>

          <div className="max-w-2xl mt-6 space-y-3">
            <p className="text-base md:text-lg text-gray-400 font-normal leading-relaxed">
              Join millions of gamers worldwide—catch the latest news, enter giveaways, or simply connect with us.
            </p>
            <p className="text-base md:text-lg text-gray-400 font-normal leading-relaxed pb-2">
              Got a setup or fanart to share? Tag us or drop us a DM for a chance to be featured and win Razer gear!
            </p>
          </div>

          <div className="mt-12 w-full max-w-4xl flex flex-col items-center">
            <h2 className="text-xl md:text-2xl font-semibold uppercase text-white tracking-wider mb-8">
              FOLLOW US!
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              <SocialIcon href="https://facebook.com/razer"><FaFacebookF size={20} /></SocialIcon>
              <SocialIcon href="https://twitter.com/razer"><FaXTwitter size={20} /></SocialIcon>
              <SocialIcon href="https://instagram.com/razer"><FaInstagram size={20} /></SocialIcon>
              <SocialIcon href="https://threads.net/@razer"><TbBrandThreads size={22} /></SocialIcon>
              <SocialIcon href="https://tiktok.com/@razer"><TbBrandTiktok size={22} /></SocialIcon>
              <SocialIcon href="https://youtube.com/razer"><FaYoutube size={20} /></SocialIcon>
              <SocialIcon href="https://twitch.tv/razer"><FaTwitch size={20} /></SocialIcon>
              <SocialIcon href="https://discord.gg/razer"><FaDiscord size={20} /></SocialIcon>
            </div>
          </div>
        </section>

        {/* Newsfeed Slider */}
        <section className="bg-black text-white py-12 px-2 md:px-8 overflow-hidden">
          <div className="max-w-[1920px] mx-auto">
            <h2 className="text-2xl md:text-4xl font-semibold uppercase text-center text-white tracking-wider mb-10 md:mb-14">
              COMMUNITY NEWSFEED
            </h2>

            <div className="flex items-center justify-center gap-1 md:gap-4 lg:gap-8">
              <button 
                onClick={handlePrev} 
                className="text-[#44d62c] hover:opacity-70 transition-opacity p-1 md:p-2 focus:outline-none shrink-0 z-10 cursor-pointer"
              >
                <svg className="w-5 h-10 md:w-6 md:h-12" viewBox="0 0 24 48" fill="none">
                  <path d="M18 6L6 24L18 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="flex-1 overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
                  style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                >
                  {newsItems.map((item) => (
                    <a 
                      href="#" 
                      key={item.id} 
                      className="w-full md:w-[calc(33.333%-16px)] shrink-0 block group bg-[#111111] border border-[#1f1f1f] hover:border-[#44d62c]/60 transition-all duration-300 transform hover:-translate-y-1.5 rounded-md overflow-hidden"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-0 left-0 bg-[#44d62c] text-black font-semibold text-[10px] px-2.5 py-1 uppercase tracking-wider rounded-tr">
                          {item.category}
                        </div>
                      </div>

                      <div className="p-4 md:p-6">
                        <h3 className="text-sm md:text-lg font-semibold leading-snug text-white group-hover:text-[#44d62c] transition-colors tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleNext} 
                className="text-[#44d62c] hover:opacity-70 transition-opacity p-1 md:p-2 focus:outline-none shrink-0 z-10 cursor-pointer"
              >
                <svg className="w-5 h-10 md:w-6 md:h-12" viewBox="0 0 24 48" fill="none">
                  <path d="M6 6L18 24L6 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Razer Banner Slider Section */}
        <RazerBannerSlider />
      </div>
    </div>
  );
}

export default Community;