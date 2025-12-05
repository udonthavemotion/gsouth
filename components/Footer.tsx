import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Clock, Facebook, ArrowRight, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-emerald-400 to-primary"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column - Takes more space */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <img 
                src="/assets/images/logo/logo.png" 
                alt="Gulf South Homes Logo" 
                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none font-display tracking-tight">
                  GULF SOUTH
                </span>
                <span className="text-xs font-semibold text-primary leading-none tracking-[0.2em] mt-0.5">
                  HOMES INC
                </span>
              </div>
            </Link>
            
            <p className="text-stone-400 mb-6 leading-relaxed max-w-sm">
              Louisiana's trusted source for quality manufactured and modular homes. 
              Family-owned and operated since {COMPANY_INFO.founded}.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center text-stone-400 hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-semibold text-lg mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Homes', path: '/catalog' },
                { name: 'Single-Wide', path: '/single-wide' },
                { name: 'Double-Wide', path: '/double-wide' },
                { name: 'Land & Home', path: '/land-home' },
                { name: 'About Us', path: '/about' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-stone-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Financing', path: '/financing' },
                { name: 'Parts & Service', path: '/services' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-stone-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-display font-semibold text-lg mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Phone size={18} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-sm text-stone-500">Call Us</span>
                    <p className="text-white font-semibold group-hover:text-primary transition-colors">{COMPANY_INFO.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-stone-500">Visit Us</span>
                    <p className="text-white">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-stone-500">Hours</span>
                    <p className="text-white">Mon-Fri: 8am - 5pm</p>
                    <p className="text-stone-400 text-sm">Sat: 9am - 3pm</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-stone-500">
            <span>BBB Accredited</span>
            <span>•</span>
            <span>LHMA Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
