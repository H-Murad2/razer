import React, { useState } from 'react';
import consoleGamingBanner from '/src/assets/consoleHeroimg.png'; 
import ps1 from '/src/assets/raiju-v3-pro-550x650.webp'; 
import ps2 from '/src/assets/wolverine-v3-pro.webp'; 
import ps3 from '/src/assets/wv3te-8k-pc-cat-page-card_550x650.webp'; 
import ps4 from '/src/assets/razer-kitsune-chroma_550x650.webp'; 
import ps5 from '/src/assets/razer-kitsune-sf6-ryu_550x650.webp'; 
import ps6 from '/src/assets/blackshark-v3-pro-xbox.webp'; 
import ps7 from '/src/assets/blackshark-v3-xbox.webp'; 
import ps8 from '/src/assets/blackshark-v3-x-xbox.webp'; 
import ps9 from '/src/assets/blackshark-v3-pro-ps.webp'; 
import ps10 from '/src/assets/blackshark-v3-ps.webp'; 
import ps11 from '/src/assets/blackshark-v3-x-ps.webp'; 
import ps12 from '/src/assets/hammerhead-hyperspeed-v3x-xbox.webp'; 
import ps13 from '/src/assets/hammerhead-hyperspeed-v3x-ps.webp'; 

function Console() {
  const [activeTab, setActiveTab] = useState('PLAYSTATION');
  const [activeHeadsetTab, setActiveHeadsetTab] = useState('XBOX');

  const controllersData = {
    PLAYSTATION: [
      {
        id: 1,
        isNew: true,
        title: 'RAZER RAIJU V3 PRO',
        description: 'Wireless Esports Controller for PlayStation 5 & PC',
        image: ps1,
      },
    ],
    XBOX: [
      {
        id: 2,
        isNew: true,
        title: 'RAZER WOLVERINE V3 PRO',
        description: 'Wireless Esports Controller for Xbox & PC',
        image: ps2,
      },
    ],
    PC: [
      {
        id: 3,
        isNew: true,
        title: 'RAZER WOLVERINE V3 PRO 8K PC',
        description: 'Wireless Esports Controller for PC',
        image: ps3,
      },
    ],
  };

  const fgcData = [
    {
      id: 1,
      isNew: false,
      title: 'RAZER KITSUNE',
      description: 'All-Button Optical Arcade Controller for PS5™ and PC',
      image: ps4,
    },
    {
      id: 2,
      isNew: true,
      title: 'RAZER KITSUNE – RYU EDITION',
      description: 'All-Button Optical Arcade Controller for PS5™ and PC',
      image: ps5,
    },
  ];

  const headsetsData = {
    XBOX: [
      {
        id: 1,
        isNew: true,
        title: 'RAZER BLACKSHARK V3 PRO FOR XBOX',
        description: 'Wireless ANC Esports Headset',
        image: ps6,
      },
      {
        id: 2,
        isNew: true,
        title: 'RAZER BLACKSHARK V3 FOR XBOX',
        description: 'Wireless Esports Headset',
        image: ps7,
      },
      {
        id: 3,
        isNew: true,
        title: 'RAZER BLACKSHARK V3 X HYPERSPEED FOR XBOX',
        description: 'Wireless Esports Headset',
        image: ps8,
      },
    ],
    PLAYSTATION: [
      {
        id: 4,
        isNew: true,
        title: 'RAZER BLACKSHARK V3 PRO FOR PLAYSTATION',
        description: 'Wireless ANC Esports Headset',
        image: ps9,
      },
      {
        id: 5,
        isNew: true,
        title: 'RAZER BLACKSHARK V3 FOR PLAYSTATION',
        description: 'Wireless Esports Headset',
        image: ps10,
      },
      {
        id: 6,
        isNew: true,
        title: 'RAZER BLACKSHARK V3 X HYPERSPEED FOR PLAYSTATION',
        description: 'Wireless Esports Headset',
        image: ps11,
      },
    ],
  };

  const earbudsData = [
    {
      id: 1,
      isNew: true,
      title: 'RAZER HAMMERHEAD V3 X HYPERSPEED FOR XBOX',
      description: 'Ultra-Low Latency, Multi-Platform Wireless Earbuds',
      image: ps12,
    },
    {
      id: 2,
      isNew: true,
      title: 'RAZER HAMMERHEAD V3 X HYPERSPEED FOR PLAYSTATION',
      description: 'Ultra-Low Latency, Multi-Platform Wireless Earbuds',
      image: ps13,
    },
  ];

  const tabs = ['PLAYSTATION', 'XBOX', 'PC'];
  const headsetTabs = ['XBOX', 'PLAYSTATION'];

  return (
    <div className="bg-black text-white font-sans select-none">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-black text-white overflow-hidden pt-12 md:pt-16">
        <div className="max-w-4xl mx-auto px-4 text-center z-10 relative space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide uppercase text-[#44d62c]">
            CONSOLE GAMING
          </h1>

          <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            Whatever gaming console you own, make your setup truly next-gen with our expansive arsenal of high-performance hardware. From immersive audio gear and essential accessories to multi-platform PC gaming controllers, secure the upgrades you need to achieve your perfect PlayStation 5 or Xbox Series X|S loadout.
          </p>
        </div>

        <div className="w-full max-w-[1400px] mx-auto mt-6 md:mt-8 flex justify-center">
          <img
            src={consoleGamingBanner}
            alt="Console Gaming Hardware"
            className="w-full h-auto object-cover object-bottom"
          />
        </div>
      </section>

      {/* 2. CONTROLLERS SECTION */}
      <section className="bg-black py-16 px-4 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-center uppercase mb-3">
            CONTROLLERS
          </h2>
          <p className="text-gray-400 text-sm md:text-base text-center max-w-2xl mb-8 font-normal">
            High-performance esports controllers designed for top-tier speed, control, and accuracy.
          </p>

          <div className="flex items-center gap-4 md:gap-6 border-b border-gray-800 pb-2 mb-10">
            {tabs.map((tab, idx) => (
              <React.Fragment key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs md:text-sm font-medium tracking-wider transition-colors duration-200 uppercase ${
                    activeTab === tab
                      ? 'text-[#44d62c] border-b-2 border-[#44d62c] pb-1'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
                {idx < tabs.length - 1 && <span className="text-gray-600">|</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="w-full max-w-xl">
            {controllersData[activeTab]?.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-[#333] h-[480px] justify-between overflow-hidden"
              >
                <div className="flex flex-col items-center space-y-2 z-10 w-full min-h-[90px]">
                  {item.isNew && (
                    <span className="bg-[#44d62c] text-black text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                      NEW
                    </span>
                  )}
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide uppercase pt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-normal max-w-sm">
                    {item.description}
                  </p>
                </div>

                <div className="my-auto flex items-center justify-center w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[300px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FGC CONTROLLER SECTION */}
      <section className="bg-black py-16 px-4 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-center uppercase mb-3">
            FGC CONTROLLER
          </h2>
          <p className="text-gray-400 text-sm md:text-base text-center max-w-2xl mb-12 font-normal">
            Optical leverless controller engineered for ultra-precise, lightning-fast inputs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {fgcData.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-[#333] h-[520px] justify-between overflow-hidden"
              >
                <div className="flex flex-col items-center space-y-2 z-10 w-full min-h-[90px]">
                  {item.isNew ? (
                    <span className="bg-[#44d62c] text-black text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                      NEW
                    </span>
                  ) : (
                    <div className="h-[21px]" />
                  )}
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide uppercase pt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-normal max-w-sm">
                    {item.description}
                  </p>
                </div>

                <div className="my-auto flex items-center justify-center w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[340px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HEADSETS SECTION */}
      <section className="bg-black py-16 px-4 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-center uppercase mb-3">
            HEADSETS
          </h2>
          <p className="text-gray-400 text-sm md:text-base text-center max-w-2xl mb-8 font-normal">
            Acclaimed esports headsets that deliver best-in-class clarity, comfort, and audio precision.
          </p>

          <div className="flex items-center gap-4 md:gap-6 border-b border-gray-800 pb-2 mb-10">
            {headsetTabs.map((tab, idx) => (
              <React.Fragment key={tab}>
                <button
                  onClick={() => setActiveHeadsetTab(tab)}
                  className={`text-xs md:text-sm font-medium tracking-wider transition-colors duration-200 uppercase ${
                    activeHeadsetTab === tab
                      ? 'text-[#44d62c] border-b-2 border-[#44d62c] pb-1'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
                {idx < headsetTabs.length - 1 && <span className="text-gray-600">|</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {headsetsData[activeHeadsetTab]?.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-[#333] h-[480px] justify-between overflow-hidden"
              >
                <div className="flex flex-col items-center space-y-2 z-10 w-full min-h-[90px]">
                  {item.isNew && (
                    <span className="bg-[#44d62c] text-black text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                      NEW
                    </span>
                  )}
                  <h3 className="text-base md:text-lg font-semibold text-white tracking-wide uppercase pt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-normal max-w-xs">
                    {item.description}
                  </p>
                </div>

                <div className="my-auto flex items-center justify-center w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[260px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EARBUDS SECTION */}
      <section className="bg-black py-16 px-4 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-center uppercase mb-3">
            EARBUDS
          </h2>
          <p className="text-gray-400 text-sm md:text-base text-center max-w-2xl font-normal mb-10">
            Versatile ergonomic earbuds made for immersive audio and seamless comfort.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {earbudsData.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-[#333] h-[500px] justify-between overflow-hidden"
              >
                <div className="flex flex-col items-center space-y-2 z-10 w-full min-h-[90px]">
                  {item.isNew && (
                    <span className="bg-[#44d62c] text-black text-[10px] font-semibold tracking-widest uppercase px-2 py-[#0.5] rounded-sm">
                      NEW
                    </span>
                  )}
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide uppercase pt-1 max-w-xs">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-normal max-w-sm">
                    {item.description}
                  </p>
                </div>

                <div className="my-auto flex items-center justify-center w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[280px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Console;