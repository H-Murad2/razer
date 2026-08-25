import React from 'react';

// Video və şəkillər
import videoSrc from '/src/assets/mobile-audio-category-hero-video_1920x700.mp4';
import kishiProXlImg from '/src/assets/kishi-v3-pro-xl.webp';
import kishiProImg from '/src/assets/kishi-v3-pro.webp';
import kishiV3Img from '/src/assets/kishi-v3.webp';
import mobileAccessoriesImg from '/src/assets/kishi-v3-line-1920x700.webp';

// Çatışmayan SVG faylları xətası verməməsi üçün Inline İkonlar
const ControllerIcon = () => (
  <svg className="w-10 h-10 text-gray-300 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="12" x2="10" y2="12" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <circle cx="15" cy="13" r="1" fill="currentColor" />
    <circle cx="18" cy="11" r="1" fill="currentColor" />
    <rect x="2" y="6" width="20" height="12" rx="6" />
  </svg>
);

const HandheldIcon = () => (
  <svg className="w-10 h-10 text-gray-300 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <line x1="6" y1="10" x2="6" y2="14" />
    <line x1="4" y1="12" x2="8" y2="12" />
    <circle cx="16" cy="11" r="1" fill="currentColor" />
    <circle cx="18" cy="13" r="1" fill="currentColor" />
  </svg>
);

const AudioIcon = () => (
  <svg className="w-10 h-10 text-gray-300 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const PhoneCaseIcon = () => (
  <svg className="w-10 h-10 text-gray-300 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

function Mobile() {
  const products = [
    {
      title: 'RAZER KISHI V3 PRO XL',
      description: 'USB C Gaming Controller for Full-Sized Tablets',
      image: kishiProXlImg,
    },
    {
      title: 'RAZER KISHI V3 PRO',
      description: 'Pro Controller for Phones, Mini Tablets, and PC',
      image: kishiProImg,
    },
    {
      title: 'RAZER KISHI V3',
      description: 'Full-Sized Controller for iPhone & Android',
      image: kishiV3Img,
    },
  ];

  const features = [
    {
      icon: <ControllerIcon />,
      text: (
        <>
          If you're looking to improve your play when it comes to your favorite mobile games, then our{' '}
          <a href="#" className="text-[#44d62c] underline hover:text-[#38b323]">
            mobile controllers
          </a>{' '}
          are designed to offer a greater level of precision and control that rivals
        </>
      ),
    },
    {
      icon: <HandheldIcon />,
      text: "Interested in taking your cloud or mobile gaming to the next level? We've got you covered with powerful handhelds optimized for that very purpose.",
    },
    {
      icon: <AudioIcon />,
      text: (
        <>
          For those seeking a greater audio experience while on the go, our combination of{' '}
          <a href="#" className="text-[#44d62c] underline hover:text-[#38b323]">
            wireless headphones and earbuds
          </a>{' '}
          will ensure seamless, immersive gaming free from distractions
        </>
      ),
    },
    {
      icon: <PhoneCaseIcon />,
      text: "Lastly, when it comes to protecting your phone, our tough, durable phone cases will allow you to game with complete peace of mind and express your own personal style at the",
    },
  ];

  return (
    <div className="bg-black text-white font-['Inter'] antialiased select-none min-h-screen">
      {/* 1. HERO / VIDEO SECTION */}
      <section className="relative w-full bg-black min-h-[500px] flex flex-col items-center justify-start pt-28 pb-8 overflow-hidden">
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl mx-auto space-y-3 mb-6">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-wider uppercase text-[#44d62c] leading-tight">
            ENGINEERED FOR THE GAME,<br className="hidden sm:inline" /> DESIGNED FOR LIFE
          </h1>

          <p className="text-gray-300 text-xs md:text-sm font-normal max-w-xl mx-auto leading-relaxed">
            This is freedom of play, redefined. Our mobile gaming and lifestyle audio products are crafted to seamlessly integrate gaming into every aspect of your life.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-4 z-10">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      {/* 2. RAZER KISHI V3 LINE SECTION */}
      <section className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider uppercase">
              RAZER KISHI V3 LINE
            </h2>
            <p className="text-gray-300 text-xs md:text-sm font-normal leading-relaxed">
              Experience the god-tier of mobile gaming with the most advanced mobile controllers designed for full-sized tablets, mini-tablets, and phones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-[#0e0e0e] border border-neutral-900 rounded-xl p-5 flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:-translate-y-2 hover:border-neutral-800 hover:shadow-lg hover:shadow-green-950/20"
              >
                <div className="text-center space-y-1.5 mb-4">
                  <h3 className="text-base md:text-lg font-bold tracking-wide uppercase text-white">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-normal max-w-xs mx-auto">
                    {product.description}
                  </p>
                </div>

                <div className="flex-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto max-h-[240px] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MOBILE ACCESSORIES SECTION */}
      <section className="bg-black pt-12 pb-0">
        <div className="w-full flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider uppercase text-white">
              MOBILE ACCESSORIES
            </h2>
            <p className="text-gray-300 text-xs md:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
              When you're filling those few minutes in line at the coffee shop or commuting to work with a quick game of LoL: WR or listening to that banger on repeat, Razer has the accessory that lets fellow gamers know they're among their own.
            </p>
          </div>

          <div className="w-full">
            <img
              src={mobileAccessoriesImg}
              alt="Mobile Accessories"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. REDEFINING THE GAMING EXPERIENCE SECTION */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider uppercase leading-snug">
            RAZER MOBILE GAMING ACCESSORIES: REDEFINING THE GAMING EXPERIENCE
          </h2>
          <p className="text-gray-300 text-xs md:text-sm font-normal leading-relaxed max-w-3xl mx-auto">
            Razer is a name synonymous with high-quality gaming peripherals and accessories, and our mobile gaming accessories are no exception. These accessories are specifically designed to enhance the gaming experience on your mobile device, making it more immersive, comfortable, and enjoyable.
          </p>
        </div>
      </section>

      {/* 5. A MOBILE GAMING ACCESSORY FOR EVERY NEED SECTION */}
      <section className="bg-black pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider uppercase">
              A MOBILE GAMING ACCESSORY FOR EVERY NEED
            </h2>
            <p className="text-gray-300 text-xs md:text-sm font-normal leading-relaxed">
              Choose from an extensive collection of mobile gaming accessories that cater to your needs, from handhelds, controllers, headphones, to phone cases that provide high-performance, quality, and portability. With our mobile gaming accessories, you can enjoy a more immersive and tactile gaming experience on the go.
            </p>
          </div>

          {/* 4 İkonlu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full border border-gray-600 flex items-center justify-center p-4">
                  {feature.icon}
                </div>
                <p className="text-gray-300 text-xs md:text-sm font-normal leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mobile;