import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Palette,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  Shield,
  Clock,
  Award,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const currentYear = new Date().getFullYear();

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = {
    services: [
      { name: 'Visiting Cards', path: '/services#visiting-cards' },
      { name: 'Flex Banners', path: '/services#flex-banners' },
      { name: 'Posters & Pamphlets', path: '/services#posters' },
      { name: 'Social Media Creatives', path: '/services#social-media' },
      { name: 'Logo Design', path: '/services#logo' }
    ],
    company: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Contact', path: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Refund Policy', path: '/refund' },
      { name: 'Disclaimer', path: '/disclaimer' }
    ]
  };

  const teal = '#009688';
  const tealDark = '#00695C';
  const tealLight = '#80CBC4';

  return (
    <footer className="text-gray-400 border-t" style={{ backgroundColor: '#003D35', borderColor: 'rgba(128,203,196,0.15)' }}>
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">

          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${tealLight}, ${teal})` }}>
                <Palette className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">
                  DEVBHOOMI<span style={{ color: tealLight }}>.</span>
                </h3>
                <p className="text-xs text-teal-300 uppercase tracking-[0.3em]">CREATIONS</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional graphic design for businesses — visiting cards, flex banners, posters, pamphlets & social media creatives.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: tealLight }} />
              <div>
                <p className="text-sm text-gray-300">9720582484 / 8218755922</p>
                <p className="text-xs text-gray-500">Mon–Sat, 9AM–7PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: tealLight }} />
              <div>
                <p className="text-sm text-gray-300">ashishbsht402@gmail.com</p>
                <p className="text-xs text-gray-500">Quick turnaround</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: tealLight }} />
              <p className="text-sm text-gray-300">173, Lakhibagh, Dehradun, Uttarakhand – 248001</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-teal-300 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Follow Our Creative Work</p>
          </div>
        </div>

        {/* COLLAPSIBLE SECTIONS - Mobile Only */}
        <div className="lg:hidden space-y-4 mb-6">
          {['services', 'company', 'legal'].map((section) => (
            <div key={section} className="border-b pb-4" style={{ borderColor: 'rgba(128,203,196,0.1)' }}>
              <button
                onClick={() => toggleSection(section)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-semibold text-white text-sm uppercase tracking-widest capitalize">{section}</span>
                {openSection === section ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openSection === section && (
                <div className="mt-3 space-y-2 pl-2">
                  {footerSections[section].map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block text-sm text-gray-400 hover:text-teal-300 transition-colors py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-6">
          {['services', 'company', 'legal'].map((section) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 capitalize">{section}</h4>
              <div className="space-y-2">
                {footerSections[section].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block text-sm text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* TRUST BADGES */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6 pt-4 border-t" style={{ borderColor: 'rgba(128,203,196,0.1)' }}>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4" style={{ color: tealLight }} />
            <span className="text-xs text-gray-400">Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" style={{ color: tealLight }} />
            <span className="text-xs text-gray-400">100% Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" style={{ color: tealLight }} />
            <span className="text-xs text-gray-400">Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">500+ Happy Clients</span>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-4 border-t" style={{ borderColor: 'rgba(128,203,196,0.1)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
            <div className="order-2 md:order-1">
              <p className="text-xs text-gray-500">
                © {currentYear} Devbhoomi Creations. All rights reserved.
              </p>
            </div>
            <div className="order-1 md:order-2 mb-2 md:mb-0">
              <div className="flex items-center gap-1">
                <Palette className="w-3 h-3" style={{ color: tealLight }} />
                <span className="text-xs text-gray-400">Crafting Visual Excellence</span>
              </div>
            </div>
            <div className="order-3">
              <p className="text-xs text-gray-600">DEHRADUN, UTTARAKHAND</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;