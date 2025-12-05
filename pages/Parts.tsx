import React, { useEffect, useState } from 'react';
import {
  Wrench,
  Phone,
  Clock,
  MapPin,
  Award,
  Shield,
  Star,
  Check,
  DoorOpen,
  Wind,
  Droplets,
  Zap,
  Box,
  Home as HomeIcon
} from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';

const Parts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const partsCategories = [
    {
      icon: <DoorOpen size={32} />,
      title: "Doors & Windows",
      description: "Interior and exterior doors, windows, screens, and hardware",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <HomeIcon size={32} />,
      title: "Skirting & Anchors",
      description: "Vinyl skirting, anchors, tie-downs, and installation supplies",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Wind size={32} />,
      title: "HVAC & Vents",
      description: "AC units, vents, ductwork, thermostats, and filters",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Droplets size={32} />,
      title: "Plumbing Parts",
      description: "Faucets, sinks, water heaters, pipes, and fixtures",
      color: "from-sky-500 to-blue-600"
    },
    {
      icon: <Zap size={32} />,
      title: "Electrical Parts",
      description: "Outlets, switches, breaker panels, and wiring supplies",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Box size={32} />,
      title: "Setup Equipment",
      description: "Steps, railings, entry systems, and installation equipment",
      color: "from-violet-500 to-purple-600"
    }
  ];

  const trustBadges = [
    {
      icon: <Award size={24} />,
      label: "30+ Years",
      sublabel: "Serving Louisiana"
    },
    {
      icon: <Shield size={24} />,
      label: "Licensed Pros",
      sublabel: "Expert Staff"
    },
    {
      icon: <Clock size={24} />,
      label: "Same-Day",
      sublabel: "Pickup Available"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* Hero Section - Universal Responsive Pattern */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/images/parts store/hero headerpartstore.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-6">
            <Wrench size={16} />
            On-Site Parts Department
          </div>

          {/* Main Headline */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Everything You Need to
            <span className="block mt-2 bg-gradient-to-r from-emerald-300 via-primary to-emerald-400 bg-clip-text text-transparent">
              Repair, Upgrade & Maintain
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4 mb-8">
            Your one-stop shop for manufactured home parts and professional service in South Louisiana.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-8 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone size={20} />
              Call {COMPANY_INFO.phone}
            </a>
            <Button
              variant="white"
              size="lg"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Part Info
            </Button>
          </div>

          {/* Hours */}
          <p className="mt-4 text-emerald-200/80 text-sm">
            <Clock size={16} className="inline mr-2" />
            Mon-Fri 8am-5pm | Sat 9am-3pm
          </p>
        </div>
      </section>

      {/* Store Overview - 2 Column */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-50 to-transparent pointer-events-none"></div>

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="scroll-animate">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Trusted Since {COMPANY_INFO.founded}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6 leading-tight">
                More Than Just a Parts Store
              </h2>
              <div className="space-y-4 text-stone-600 text-lg leading-relaxed mb-8">
                <p>
                  At Gulf South Homes, we understand that your manufactured home is an investment that deserves expert care.
                  That's why we maintain an extensive on-site parts department stocked with everything you need to keep your home in top condition.
                </p>
                <p>
                  Our knowledgeable team has decades of combined experience and can help you identify the right parts for your specific home model.
                  Whether you're a DIY homeowner or a professional contractor, we've got you covered.
                </p>
                <p>
                  <strong className="text-stone-900">Can't find what you need?</strong> We work with a network of trusted suppliers and can special-order hard-to-find parts, often with same-week delivery.
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {[
                  'Extensive inventory of common parts in stock',
                  'Expert staff to help identify what you need',
                  'Special-order service for hard-to-find items',
                  'Competitive pricing and contractor discounts',
                  'Professional installation services available'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-700">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone size={18} />
                  Call for Pricing
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-stone-300 text-stone-700 rounded-xl font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right: Images */}
            <div className="scroll-animate">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/assets/images/parts store/gulf-south-homes-gallery-02-600h.jpeg"
                      alt="Parts inventory"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/assets/images/parts store/gulf-south-homes-gallery-03-600h.jpeg"
                      alt="Store interior"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/assets/images/parts store/gulf-south-homes-gallery-04-600h.jpeg"
                      alt="Parts display"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/assets/images/parts store/gulf-south-homes-gallery-05-600h.jpeg"
                      alt="Equipment"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parts & Services Grid */}
      <section className="py-20 sm:py-28 bg-stone-50 relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              What We Stock
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Parts & Service Categories
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              From routine maintenance to major repairs, we have the parts and expertise you need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {partsCategories.map((category, idx) => (
              <div
                key={idx}
                className="scroll-animate group p-8 bg-white rounded-2xl border border-stone-100 hover:border-stone-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-stone-900 text-xl mb-3">{category.title}</h3>
                <p className="text-stone-600 leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Services Notice */}
          <div className="scroll-animate max-w-4xl mx-auto bg-gradient-to-br from-primary to-emerald-700 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <Wrench size={48} className="mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Professional Installation Available</h3>
            <p className="text-emerald-100 text-lg mb-6 max-w-2xl mx-auto">
              Not comfortable installing parts yourself? Our licensed technicians can handle everything from simple repairs to complete system installations.
            </p>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-stone-50 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone size={20} />
              Schedule Service Call
            </a>
          </div>
        </div>
      </section>

      {/* Trust Banner - Stats Row */}
      <section className="py-16 bg-stone-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-[150px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="scroll-animate flex flex-col items-center text-center p-6"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-4">
                  {badge.icon}
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {badge.label}
                </div>
                <div className="text-stone-400 text-lg">
                  {badge.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-12 text-center max-w-3xl mx-auto scroll-animate">
            <div className="inline-block p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <Star size={32} className="text-amber-400 fill-amber-400 mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-4">
                "Gulf South Homes has been our go-to for parts and repairs for over a decade. Their team knows manufactured homes inside and out."
              </blockquote>
              <cite className="text-stone-400 not-italic">
                — Michael B., Contractor, Thibodaux LA
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Form */}
      <section id="contact-form" className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left: Contact Info */}
              <div className="scroll-animate">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                  Have questions about a specific part? Need help identifying what you need?
                  Fill out the form or give us a call. Our parts team is ready to help.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900 mb-1">Phone</div>
                      <div className="text-stone-600">{COMPANY_INFO.phone}</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900 mb-1">Hours</div>
                      <div className="text-stone-600 text-sm space-y-1">
                        <div>{COMPANY_INFO.hours.weekdays}</div>
                        <div>{COMPANY_INFO.hours.saturday}</div>
                        <div>{COMPANY_INFO.hours.sunday}</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900 mb-1">Location</div>
                      <div className="text-stone-600">{COMPANY_INFO.address}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="scroll-animate">
                <form onSubmit={handleSubmit} className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-stone-900 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-stone-900 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="(985) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-stone-900 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-stone-900 mb-2">
                        What part are you looking for? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about the part you need, your home model, or describe the issue you're experiencing..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Send Inquiry
                    </button>

                    <p className="text-stone-500 text-sm text-center">
                      Or call us directly at{' '}
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary font-semibold hover:underline">
                        {COMPANY_INFO.phone}
                      </a>
                    </p>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Phone CTA */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-primary text-white rounded-full font-bold shadow-2xl hover:bg-primary-dark hover:shadow-glow-lg transition-all duration-300 animate-float"
        aria-label="Call Gulf South Homes"
      >
        <Phone size={20} />
        <span>Call Now</span>
      </a>
    </div>
  );
};

export default Parts;
