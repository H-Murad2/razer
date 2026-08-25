import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaTwitch, 
  FaDiscord, 
  FaXTwitter, 
  FaChevronUp 
} from 'react-icons/fa6';
import { TbBrandThreads, TbBrandTiktok } from 'react-icons/tb';

function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="bg-[#111111] text-[#999999] text-md pt-12 pb-8 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 pb-10">
          
          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold mb-1">Shop</h3>
            <Link to="#" className="hover:text-white transition-colors">RazerStores</Link>
            <Link to="#" className="hover:text-white transition-colors">RazerCafe</Link>
            <Link to="#" className="hover:text-white transition-colors">Store Locator</Link>
            <Link to="#" className="hover:text-white transition-colors">Purchase Programs</Link>
            <Link to="#" className="hover:text-white transition-colors">Bulk Order Program</Link>
            <Link to="#" className="hover:text-white transition-colors">Education</Link>
            <Link to="#" className="hover:text-white transition-colors">Only at Razer</Link>
            <Link to="#" className="hover:text-white transition-colors">Razer Silver</Link>
            <Link to="#" className="hover:text-white transition-colors">Affiliate</Link>
            <Link to="#" className="hover:text-white transition-colors">Newsletter</Link>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold mb-1">Explore</h3>
            <Link to="#" className="hover:text-white transition-colors">Technology</Link>
            <Link to="#" className="hover:text-white transition-colors">Chroma RGB</Link>
            <Link to="#" className="hover:text-white transition-colors">Concepts</Link>
            <Link to="#" className="hover:text-white transition-colors">Esports</Link>
            <Link to="#" className="hover:text-white transition-colors">Collabs</Link>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold mb-1">Support</h3>
            <Link to="#" className="hover:text-white transition-colors">Get Help</Link>
            <Link to="#" className="hover:text-white transition-colors">Registration & Warranty</Link>
            <Link to="#" className="hover:text-white transition-colors">RazerStore Support</Link>
            <Link to="#" className="hover:text-white transition-colors">RazerCare</Link>
            <Link to="#" className="hover:text-white transition-colors">Manage Razer ID</Link>
            <Link to="#" className="hover:text-white transition-colors">Support Videos</Link>
            <Link to="#" className="hover:text-white transition-colors">Recycling Program</Link>
            <Link to="#" className="hover:text-white transition-colors">Accessibility Statement</Link>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold mb-1">Company</h3>
            <Link to="#" className="hover:text-white transition-colors">About Us</Link>
            <Link to="#" className="hover:text-white transition-colors">Careers</Link>
            <Link to="#" className="hover:text-white transition-colors">Newsroom</Link>
            <Link to="#" className="hover:text-white transition-colors">zVentures</Link>
            <Link to="#" className="hover:text-white transition-colors">Contact Us</Link>
            <Link to="#" className="hover:text-white transition-colors">AI Gaming Newsletter</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-semibold mb-1">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="p-2 border border-gray-700 rounded-full w-fit hover:border-[#00FF00] hover:text-[#00FF00] transition-colors"><FaFacebookF className="w-3.5 h-3.5" /></a>
              <a href="#" className="p-2 border border-gray-700 rounded-full w-fit hover:border-[#00FF00] hover:text-[#00FF00] transition-colors"><FaInstagram className="w-3.5 h-3.5" /></a>
              <a href="#" className="p-2 border border-gray-700 rounded-full w-fit hover:border-[#00FF00] hover:text-[#00FF00] transition-colors"><TbBrandThreads className="w-3.5 h-3.5" /></a>
              <a href="#" className="p-2 border border-gray-700 rounded-full w-fit hover:border-[#00FF00] hover:text-[#00FF00] transition-colors"><FaXTwitter className="w-3.5 h-3.5" /></a>
              <a href="#" className="p-2 border border-gray-700 rounded-full w-fit hover:border-[#00FF00] hover:text-[#00FF00] transition-colors"><FaYoutube className="w-3.5 h-3.5" /></a>
              <a href="#" className="p-2 border border-gray-700 rounded-full w-fit hover:border-[#00FF00] hover:text-[#00FF00] transition-colors"><TbBrandTiktok className="w-3.5 h-3.5" /></a>
              <a href="#" className="p-2 border border-gray-700 rounded-full w-fit hover:border-[#00FF00] hover:text-[#00FF00] transition-colors"><FaTwitch className="w-3.5 h-3.5" /></a>
              <a href="#" className="p-2 border border-gray-700 rounded-full w-fit hover:border-[#00FF00] hover:text-[#00FF00] transition-colors"><FaDiscord className="w-3.5 h-3.5" /></a>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <span className="text-[#00FF00] font-bold tracking-widest text-sm">FOR GAMERS. BY GAMERS.™</span>
          </div>

        </div>

        <div className="pt-6 border-t border-[#222222] flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-2 text-gray-400">
            <span>Copyright © 2026 Razer Inc. All rights reserved.</span>
            <span className="mx-1">|</span>
            <Link to="#" className="hover:text-white transition-colors">Site Map</Link>
            <span className="mx-1">|</span>
            <Link to="#" className="hover:text-white transition-colors">Legal Terms</Link>
            <span className="mx-1">|</span>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="mx-1">|</span>
            <Link to="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-gray-300">
              <span className="text-white font-semibold">United States</span>
              <span className="mx-1"></span>
              
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;