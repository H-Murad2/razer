import React from 'react';
import chairsImage from '/src/assets/chair-family-450x480.jpg';
import collabsImage from '/src/assets/collabs-category-1920x700-desktop.webp';
import customsImage from '/src/assets/1920x700-desktop-cat-customs.webp';
import bagsImage from '/src/assets/lifestyle-category-bags-1920x700-desktop-cat-banner.webp';
import apparelImage from '/src/assets/team-razer-jersey-category-1920x700-desktop.webp'; // Fayl yolunuza uyğunlaşdırın
import gearImage from '/src/assets/lifestyle-gear.webp'; // Fayl yolunuza uyğunlaşdırın
import snekiBg from '/src/assets/sneki-snek-s2-desktop-cat-banner.jpg'; // Fayl yolunuza uyğunlaşdırın

function Lifestyle() {
  return (
    <div className="bg-black text-white font-sans select-none min-h-screen">
      {/* LIFESTYLE INTRO SECTION */}
      <section className="bg-black pt-20 pb-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  tracking-wider uppercase text-[#44d62c]">
            Lifestyle
          </h1>

          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            Living the gamer life is more than just an activity—it's an identity.
            From your home to your look, our lifestyle products provide the
            ultimate outlet to express your passion every day. Whether you're
            looking to find the perfect gamer gift for yourself or your
            friends, we've got something for casual players and professional
            gamers alike.
          </p>
        </div>
      </section>

      {/* CHAIRS SECTION */}
      <section className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-between pt-10 pb-6 min-h-[480px] md:min-h-[580px] lg:min-h-[680px]">
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase mb-2 text-white">
            CHAIRS
          </h2>

          <p className="text-gray-300 text-xs md:text-sm lg:text-base font-light mb-3">
            Discover the support you need to power through gaming marathons.
          </p>
        </div>

        <div className="relative w-full flex justify-center items-center my-auto z-0 px-4">
          <img
            src={chairsImage}
            alt="Razer Gaming Chairs"
            className="w-full max-w-[950px] object-contain relative z-0"
          />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.85)_75%,_#000000_100%)] pointer-events-none z-10" />
        </div>
      </section>

      {/* COLLABS SECTION */}
      <section className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-start pt-10 pb-16 mb-20 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={collabsImage}
            alt="Razer Collabs"
            className="w-full h-full object-cover object-top relative z-0"
          />
        </div>

        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase mb-2 text-white">
            COLLABS
          </h2>

          <p className="text-gray-300 text-xs md:text-sm lg:text-base font-light mb-3 leading-relaxed">
            We're always looking to keep our gear fresh, and it doesn't get any better than working with other brands that we as gamers love and get hype for.
          </p>
        </div>
      </section>

      {/* RAZER CUSTOMS SECTION */}
      <section className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-start pt-10 pb-16 mb-20 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={customsImage}
            alt="Razer Customs"
            className="w-full h-full object-cover object-center relative z-0"
          />
        </div>

        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/85 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl  tracking-widest uppercase mb-2 text-white">
            RAZER CUSTOMS
          </h2>

          <p className="text-gray-300 text-xs md:text-sm lg:text-base font-light mb-3 leading-relaxed">
            Create personalized gaming gear from a huge collection of collab and original designs.
          </p>
        </div>
      </section>

      {/* BAGS SECTION */}
      <section className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-start pt-10 pb-16 mb-20 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={bagsImage}
            alt="Razer Bags"
            className="w-full h-full object-cover object-center relative z-0"
          />
        </div>

        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/85 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase mb-2 text-white">
            BAGS
          </h2>

          <p className="text-gray-300 text-xs md:text-sm lg:text-base font-light mb-3 leading-relaxed">
            Built for those who carry hard at work and play. Keep your gear secure and protected, and always be ready to perform at your best no matter where you're headed.
          </p>
        </div>
      </section>

      {/* APPAREL SECTION (DÜZƏLDİLMİŞ FULL-WIDTH DİZAYN) */}
      <section className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-start pt-10 pb-16 mb-20 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        {/* Arxa Fon Banner Şəkli (Tam Əhatə Edən) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={apparelImage}
            alt="Razer Apparel"
            className="w-full h-full object-cover object-center relative z-0"
          />
        </div>

        {/* Yuxarı Tünd Qradiyent */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/85 to-transparent pointer-events-none z-10" />

        {/* Yan Kölgələr */}
        <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none z-10" />

        {/* Mətnlər */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl  tracking-widest uppercase mb-2 text-white">
            APPAREL
          </h2>

          <p className="text-gray-300 text-xs md:text-sm lg:text-base font-light mb-3 leading-relaxed">
            Made for the mavericks, rebels, and iconoclasts. When no-nonsense functionality meets design that speaks for itself, you'll have no trouble making a statement.
          </p>
        </div>
      </section>

      {/* SNEKI SNEK ANIMATION SERIES SECTION */}
      <section className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-start pt-10 pb-16 mb-20 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        {/* Arxa Fon Banner Şəkli */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={snekiBg}
            alt="Sneki Snek Animation Series"
            className="w-full h-full object-cover object-center relative z-0"
          />
        </div>

        {/* Yuxarı Tünd Qradiyent */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />

        {/* Yan Kölgələr */}
        <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none z-10" />

        {/* Mətnlər */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl  tracking-widest pt-20 uppercase mb-2 text-white">
            SNEKI SNEK ANIMATION SERIES
          </h2>

          <p className="text-gray-300 text-xs md:text-sm lg:text-base font-light mb-3 leading-relaxed">
            Can't get enough of our adorable cutie? Catch Sneki Snek and friends in an all-new season as they continue to show why sustainability is important!
          </p>
        </div>
      </section>

      {/* GEAR SECTION (mb-20 silindi, ağ zolaq aradan qalxdı) */}
      <section className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-start pt-10 pb-16 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        {/* Arxa Fon Banner Şəkli */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={gearImage}
            alt="Razer Gear"
            className="w-full h-full object-cover object-center relative z-0"
          />
        </div>

        {/* Yuxarı Tünd Qradiyent */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/85 to-transparent pointer-events-none z-10" />

        {/* Yan Kölgələr */}
        <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none z-10" />

        {/* Mətnlər */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl  tracking-widest uppercase mb-2 text-white">
            GEAR
          </h2>

          <p className="text-gray-300 text-xs md:text-sm lg:text-base font-light mb-3 leading-relaxed">
            While others see gaming as a hobby, for us, it's an entire way of life. If you share the same sentiments, then our assortment of add-ons will help you express that in every facet of your everyday routine.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Lifestyle;