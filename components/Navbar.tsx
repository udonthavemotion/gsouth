import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Button from './Button';
import { useScrollLock } from '../hooks/useScrollLock';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useClickOutside } from '../hooks/useClickOutside';
import { useEscapeKey } from '../hooks/useEscapeKey';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(80);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Lock body scroll when mobile menu is open
  useScrollLock(isOpen);

  // Trap focus within mobile menu when open
  useFocusTrap(isOpen, menuRef);

  // Close menu when clicking outside
  useClickOutside(menuRef, () => setIsOpen(false), isOpen);

  // Close menu on Escape key
  useEscapeKey(() => setIsOpen(false), isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate navbar height dynamically
  useEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Return focus to menu button when menu closes
  useEffect(() => {
    if (!isOpen && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Homes For Sale', path: '/catalog', sublinks: [
      { name: 'Single Wide Homes', path: '/single-wide' },
      { name: 'Double Wide Homes', path: '/double-wide' },
      { name: 'Modular Homes', path: '/modular-homes' },
    ]},
    { name: 'Manufacturers', path: '/manufacturers' },
    { name: 'Deals', path: '/deals' },
    { name: 'Financing', path: '/financing' },
    { name: 'Parts Store', path: '/parts' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-lg'
          : 'bg-white shadow-md'
      }`}
    >
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-stone-900 text-stone-300">
        <div className="container mx-auto px-6 xl:px-8">
          <div className="flex justify-between items-center py-2.5 text-xs font-medium tracking-wide">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary animate-pulse"></span>
              {COMPANY_INFO.address}
            </span>
            <div className="flex items-center space-x-6">
              <span className="text-stone-400">Mon-Fri: 8am - 5pm</span>
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="flex items-center gap-2 text-white hover:text-primary transition-colors font-semibold"
              >
                <Phone size={14} className="text-primary" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav ref={navRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 lg:h-24 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="relative">
              <img 
                src="/assets/images/logo/logo.png" 
                alt="Gulf South Homes Logo" 
                className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-stone-900 leading-none font-display tracking-tight">
                GULF SOUTH
              </span>
              <span className="text-xs lg:text-sm font-semibold text-primary leading-none tracking-[0.2em] mt-0.5">
                HOMES INC
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.sublinks ? (
                // Dropdown for links with sublinks
                <div key={link.path} className="relative group">
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg flex items-center gap-1 ${
                      isActive(link.path)
                        ? 'text-primary'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                    }`}
                  >
                    {link.name}
                    <ChevronRight size={14} className="transform -rotate-90 transition-transform group-hover:rotate-0" />
                    {isActive(link.path) && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary"></span>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-stone-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.path}
                          to={sublink.path}
                          className={`block px-4 py-3 text-sm font-medium transition-colors ${
                            isActive(sublink.path)
                              ? 'bg-primary/10 text-primary font-semibold'
                              : 'text-stone-700 hover:bg-primary/5 hover:text-primary'
                          }`}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Regular link without dropdown
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary"></span>
                  )}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact" 
              className={`text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'text-primary' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Contact
            </Link>
            <Button variant="primary" to="/catalog" className="px-6 py-2.5 text-sm shadow-lg shadow-primary/20">
              Browse Homes
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className={`p-2.5 rounded-md transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                isOpen
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen 
            ? 'opacity-100' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        className={`lg:hidden fixed inset-x-0 bg-white shadow-2xl transition-all duration-500 ease-out z-50 overflow-y-auto ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ 
          top: `${navbarHeight}px`,
          bottom: 0,
          height: `calc(100vh - ${navbarHeight}px)`,
          minHeight: `calc(100vh - ${navbarHeight}px)`,
          maxHeight: `calc(100vh - ${navbarHeight}px)`,
          paddingBottom: 'max(env(safe-area-inset-bottom), 0px)'
        }}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col min-h-full">
          <h2 id="mobile-menu-title" className="sr-only">Navigation Menu</h2>
          <div className="space-y-1">
            {navLinks.map((link, idx) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className={`mobile-menu-item flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-semibold transition-all duration-300 min-h-[44px] ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-stone-700 hover:bg-stone-100 active:bg-stone-200'
                  } ${isOpen ? 'animate-fade-in-up' : ''}`}
                  style={{
                    animationDelay: `${idx * 50}ms`
                  }}
                >
                  {link.name}
                  <ChevronRight size={18} className={isActive(link.path) ? 'text-primary' : 'text-stone-400'} aria-hidden="true" />
                </Link>

                {/* Mobile Sublinks */}
                {link.sublinks && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.sublinks.map((sublink) => (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        onClick={closeMenu}
                        className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 min-h-[44px] ${
                          isActive(sublink.path)
                            ? 'bg-primary/10 text-primary font-semibold'
                            : 'text-stone-600 hover:bg-stone-100 hover:text-primary'
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`mobile-menu-item flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-semibold transition-all duration-300 min-h-[44px] ${
                isActive('/contact')
                  ? 'text-primary bg-primary/10'
                  : 'text-stone-700 hover:bg-stone-100 active:bg-stone-200'
              } ${isOpen ? 'animate-fade-in-up' : ''}`}
              style={{ 
                animationDelay: `${navLinks.length * 50}ms`
              }}
            >
              Contact Us
              <ChevronRight size={18} className={isActive('/contact') ? 'text-primary' : 'text-stone-400'} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-auto pt-6 border-t border-stone-200 space-y-4">
            <Button 
              to="/catalog" 
              fullWidth 
              onClick={closeMenu} 
              className="py-4 text-base min-h-[44px]"
            >
              Browse All Homes
            </Button>
            
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-3 py-4 bg-stone-100 rounded-lg text-stone-900 font-semibold hover:bg-stone-200 active:bg-stone-300 transition-colors min-h-[44px]"
            >
              <Phone size={20} className="text-primary" aria-hidden="true" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
