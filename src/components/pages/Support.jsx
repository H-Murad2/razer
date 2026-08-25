import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import supportHeroBg from '/src/assets/home_search_bg.jpg';

function Support() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const videos = [
    'View the latest support videos',
    'How to detect your Razer device in Razer Synapse 4',
    'How to activate and use Razer Hypershift',
    'How to fix intermittent connection on your Razer device',
    'How to perform a clean re-installation of Razer Synapse',
  ];

  const topics = [
    'Firmware updates for Razer Systems and Peripherals',
    'How to install or upgrade Razer Synapse',
    'Mac OS support in Razer Synapse',
    'Razer BlackWidow V3 Support & FAQs',
    'Razer Basilisk V3 Pro Support & FAQs',
  ];

  const categories = [
    {
      title: 'Registration & Warranty',
      links: [
        { label: 'Warranty FAQ', href: '#' },
        { label: 'Product Registration', href: '#' },
        { label: 'RMA Status', href: '#' },
      ],
    },
    {
      title: 'Online Store',
      links: [
        { label: 'Shipping Guide', href: '#' },
        { label: 'Returns & Refunds', href: '#' },
        { label: 'Razer Advantage', href: '#' },
      ],
    },
    {
      title: 'Online Services & Resources',
      links: [
        { label: 'View/Update Support Case', href: '#' },
        { label: 'Get System Recovery Image', href: '#' },
        { label: '7.1 Surround Sound Activation Code', href: '#' },
        { label: 'Virtual Ring Light Activation Code', href: '#' },
      ],
    },
    {
      title: 'RazerCare',
      links: [
        { label: 'RazerCare Protection Plan', href: '#' },
        { label: 'Replacement Parts', href: '#' },
      ],
    },
  ];

  const reviews = [
  {
    id: 1,
    author: 'Andrei F.',
    rating: 5,
    text: 'I had a great experience with Razer Support. The representative was professional, courteous, and responded to my questions promptly.  ',
  },
  {
    id: 2,
    author: 'Sarah L.',
    rating: 5,
    text: 'Quick turnaround time and incredibly detailed instructions. My issue was resolved within an hour of opening the ticket.',
  },
  {
    id: 3,
    author: 'Michael B.',
    rating: 5,
    text: 'Super friendly team and seamless process for initiating my warranty replacement. Highly recommended service!',
  },
  {
    id: 4,
    author: 'David K.',
    rating: 5,
    text: 'The support team went above and beyond to help me set up my Razer Synapse profile. Very patient and knowledgeable staff!',
  },
  {
    id: 5,
    author: 'Elena R.',
    rating: 5,
    text: 'Extremely fast response time via live chat. Received clear step-by-step guidance that fixed my wireless headset connection in minutes.',
  },
  {
    id: 6,
    author: 'Marcus T.',
    rating: 5,
    text: 'Hassle-free replacement process for my gaming mouse. Razer Support keeps you updated at every stage of the RMA process.',
  },
  {
    id: 7,
    author: 'Jessica M.',
    rating: 5,
    text: 'Outstanding customer care! The agent was polite and stayed on the line until my keyboard firmware update was completely finished.',
  },
  {
    id: 8,
    author: 'Alex P.',
    rating: 5,
    text: 'Clear communication and genuine effort to solve the issue. They replacement parts arrived sooner than expected. Top-tier service!',
  },
  {
    id: 9,
    author: 'Daniel H.',
    rating: 5,
    text: 'I was having driver conflicts on my Blade laptop. The tech support specialist walked me through a clean install effortlessly.',
  },
  {
    id: 10,
    author: 'Sophia W.',
    rating: 5,
    text: 'Very professional handling of my account activation query. Resolved quickly with clear directions. Couldn’t ask for better support!',
  },
];

  const handlePrevReview = () => {
    setCurrentReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[450px] md:h-[550px] bg-black overflow-hidden flex items-center justify-center">
        {/* Arxa fon şəkli və Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={supportHeroBg}   
            alt="Razer Support Background" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {/* Məzmun */}
        <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            Welcome to Razer Support
          </h1>

          <p className="text-gray-300 text-base md:text-xl font-light mt-3 mb-8">
            We’re here to help
          </p>

          <div className="w-full max-w-2xl relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
              <FiSearch className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search Support"
              className="w-full pl-12 pr-4 py-3 md:py-3.5 bg-black/40 backdrop-blur-md text-white placeholder-gray-400 text-sm md:text-base rounded-sm border border-gray-600/80 focus:border-[#44d62c] focus:outline-none transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Popular Support & Links Section */}
      <section className="bg-[#121212] py-12 px-4 select-none">
        <div className="max-w-[1200px] mx-auto space-y-16">
          
          {/* Üst Qutu Bölməsi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Popular Support Videos */}
            <div className="border border-[#2a2a2a] bg-[#181818] p-6 md:p-8 rounded-sm">
              <h2 className="text-2xl md:text-3xl font-normal text-center mb-6 text-white">
                Popular Support Videos
              </h2>
              <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300">
                {videos.map((item, index) => (
                  <li key={index} className="hover:text-[#44d62c] transition-colors duration-200 cursor-pointer">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Support Topics */}
            <div className="border border-[#2a2a2a] bg-[#181818] p-6 md:p-8 rounded-sm">
              <h2 className="text-2xl md:text-3xl font-normal text-center mb-6 text-white">
                Popular Support Topics
              </h2>
              <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-gray-300">
                {topics.map((item, index) => (
                  <li key={index} className="hover:text-[#44d62c] transition-colors duration-200 cursor-pointer">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Alt Keçid Linkləri (Categories) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className={`space-y-4 ${
                  idx !== categories.length - 1 ? 'lg:border-r lg:border-[#2a2a2a] lg:pr-6' : ''
                }`}
              >
                <h3 className="text-lg font-semibold text-white tracking-wide">
                  {cat.title}
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {cat.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-[#44d62c] transition-colors duration-200 inline-flex items-center gap-1 group"
                      >
                        <span>{link.label}</span>
                        <span className="text-gray-500 group-hover:text-[#44d62c] transition-colors">&gt;</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Customer Reviews Carousel Section */}
      <section className="bg-[#111111] py-16 px-4 select-none border-t border-[#222]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-8 tracking-wide">
            What Our Customers Are Saying
          </h2>

          <div className="relative w-full flex items-center justify-between gap-4 md:gap-8 my-4">
            {/* Sol Ox (Aktiv stil: Yaşıl haşiyəli kvadrat) */}
            <button
              onClick={handlePrevReview}
              className="w-8 h-8 md:w-10 md:h-10 border border-[#44d62c] text-[#44d62c] flex items-center justify-center hover:bg-[#44d62c] hover:text-black transition-all duration-200 shrink-0 focus:outline-none"
              aria-label="Previous Review"
            >
              <FaChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>

            {/* Rəy Kontenti */}
            <div className="flex-1 max-w-2xl px-2 md:px-6">
              <div className="flex justify-center items-center gap-1.5 mb-6 text-[#00ff00]">
                {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-light">
                {reviews[currentReviewIndex].text}
              </p>

              <h3 className="text-white font-bold text-sm md:text-base tracking-wide">
                {reviews[currentReviewIndex].author}
              </h3>
            </div>

            {/* Sağ Ox */}
            <button
              onClick={handleNextReview}
              className="text-gray-500 hover:text-white transition-colors duration-200 shrink-0 p-2 focus:outline-none"
              aria-label="Next Review"
            >
              <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Karusel İndikatorları (Nöqtələr) */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReviewIndex(index % reviews.length)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentReviewIndex % reviews.length
                    ? 'bg-white w-2.5 h-2.5'
                    : 'bg-gray-600 hover:bg-gray-400 w-2 h-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;