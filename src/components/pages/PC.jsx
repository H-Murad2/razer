import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// Birinci bölmənin şəkilləri
import laptopsImg from '/src/assets/catpg-500x500-blade-16-2025.webp';
import pcAccessoriesImg from '/src/assets/desktops-and-components-category-500x500.webp';
import gamerRoomImg from '/src/assets/razer-gamer-room-line-500x500.webp';
import accessoriesImg from '/src/assets/accessories-category-500x500.webp';
import razerSkinsImg from '/src/assets/skins-500x500.webp';
import chairsImg from '/src/assets/chairs-category-500x500.webp';

// İkinci bölmənin şəkilləri
import miceImg from '/src/assets/mice-category-500x500.webp';
import mouseMatsImg from '/src/assets/mousemats-category-500x500.webp';
import keyboardsImg from '/src/assets/500x500-keyboards.webp';
import headsetsImg from '/src/assets/pc-category-headset-kraken-v4-pro-500x500.webp';
import speakersImg from '/src/assets/speakers-category-500x500.webp';
import controllersImg from '/src/assets/wolverline-v3-8k-pc-500x500.webp';

// Üçüncü bölmənin şəkilləri
import webcamsImg from '/src/assets/webcams-category-500x500.webp';
import microphonesImg from '/src/assets/500x50-microphones--seirenv3pro.webp';
import captureCardsImg from '/src/assets/razer-ripsaw-x-category-500x500.webp';

import hybridGearImg from '/src/assets/pc-category-hybridgear.webp';
import setupImg from '/src/assets/700x400.webp';
import playtimeImg from '/src/assets/carousel-windows-blade.webp';

function PC() {
  const battlestationCards = [
    {
      title: 'LAPTOPS',
      description: 'Sleek high-performance gaming laptops',
      image: laptopsImg,
      link: '#',
    },
    {
      title: 'PC ACCESSORIES',
      description: 'Engineered for enthusiasts and designed for performance',
      image: pcAccessoriesImg,
      link: '#',
    },
    {
      title: 'GAMER ROOM',
      description: 'Take Razer Chroma RGB beyond your PC with our light bulbs, light strips, and lamps',
      image: gamerRoomImg,
      link: '#',
    },
    {
      title: 'ACCESSORIES',
      description: 'Crafting the perfect gaming experience',
      image: accessoriesImg,
      link: '#',
    },
    {
      title: 'RAZER SKINS',
      description: 'Custom designs for laptops, mobile controllers, and handhelds',
      image: razerSkinsImg,
      link: '#',
    },
    {
      title: 'CHAIRS',
      description: 'Perfecting the science of comfort and support',
      image: chairsImg,
      link: '#',
    },
  ];

  const peripheralsCards = [
    {
      title: 'MICE',
      description: 'Pixel-perfect precision for any hand size and grip style',
      image: miceImg,
      link: '#',
    },
    {
      title: 'MOUSE MATS',
      description: 'Soft, hard, and hybrid designs to enhance your control',
      image: mouseMatsImg,
      link: '#',
    },
    {
      title: 'KEYBOARDS',
      description: 'Optical, mechanical, and every type in between',
      image: keyboardsImg,
      link: '#',
    },
    {
      title: 'HEADSETS',
      description: 'Tuned for gaming, lifestyle, or a perfect mix of both',
      image: headsetsImg,
      link: '#',
    },
    {
      title: 'SPEAKERS',
      description: 'Set the soundstage for full-range immersion',
      image: speakersImg,
      link: '#',
    },
    {
      title: 'CONTROLLERS',
      description: 'Seize victory with next-gen control and response.',
      image: controllersImg,
      link: '#',
    },
  ];

  const streamingCards = [
    {
      title: 'WEBCAMS',
      description: 'Stunning visual fidelity for streaming and productivity',
      image: webcamsImg,
      link: '#',
    },
    {
      title: 'MICROPHONES',
      description: 'Engineered for crystal-clear voice pickup',
      image: microphonesImg,
      link: '#',
    },
    {
      title: 'CAPTURE CARD & OTHERS',
      description: 'For a professional streaming advantage',
      image: captureCardsImg,
      link: '#',
    },
  ];

  const sliderCards = [
    {
      title: 'RAZER HYBRID GEAR',
      description: 'Win at Work & Play',
      image: hybridGearImg,
    },
    {
      title: 'COMPLETE YOUR SETUP',
      description: 'A Color for Every Style',
      image: setupImg,
    },
    {
      title: 'PLAYTIME. REDEFINED.',
      description: 'Play the latest games with graphics that rival reality.',
      image: playtimeImg,
    },
    
  ];

  return (
    <div className="bg-black text-white font-sans select-none space-y-16 py-16 px-4">
      {/* SECTION 1: LAPTOPS & BATTLESTATION */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider uppercase">
            LAPTOPS & BATTLESTATION
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            From cutting-edge gaming and creator laptops to intelligent lighting, world-class gaming chairs, and more, we've got you covered when it comes to your dream gaming or work setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {battlestationCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-700 hover:shadow-lg hover:shadow-green-950/20 group"
            >
              <div className="w-full h-100 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-wide uppercase text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: PC & LAPTOP PERIPHERALS */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider uppercase">
            PC & LAPTOP PERIPHERALS
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            The most powerful rigs mean nothing without the best gear to match. Gain a competitive edge with PC and laptop peripherals armed with our latest technology. From award-winning mice and keyboards to industry-leading headsets and monitors, deck out your setup with our comprehensive selection of peripherals for gaming and work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {peripheralsCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-700 hover:shadow-lg hover:shadow-green-950/20 group"
            >
              <div className="w-full h-100 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-wide uppercase text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CONTENT CREATION & STREAMING */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider uppercase">
            CONTENT CREATION & STREAMING
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Producing quality content requires quality hardware. From high-fidelity webcams to professional-grade microphones, deliver the best possible streaming experience with our range of content creation gear. Whether you're streaming from your gaming desktop or laptop, we've got everything you need to create content that stands out from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {streamingCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-700 hover:shadow-lg hover:shadow-green-950/20 group"
            >
              <div className="w-full h-100 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-wide uppercase text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: SLIDER */}
      <section className="max-w-6xl mx-auto pt-8">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.3 },
          }}
          className="w-full"
        >
          {sliderCards.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#111111] border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:border-neutral-700">
                <div className="w-full h-72 overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col space-y-2">
                  <h3 className="text-lg font-semibold tracking-wide uppercase text-white">
                    {slide.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Ox Düymələri */}
        <div className="flex items-center justify-end space-x-3 mt-6">
          <button className="swiper-button-prev-custom w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-gray-300 flex items-center justify-center transition-colors">
            &#10094;
          </button>
          <button className="swiper-button-next-custom w-10 h-10 rounded-full bg-[#44d62c] hover:bg-[#38b323] text-black font-bold flex items-center justify-center transition-colors">
            &#10095;
          </button>
        </div>
      </section>
    </div>
  );
}

export default PC;