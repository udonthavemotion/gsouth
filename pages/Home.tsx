import React, { useEffect, useRef } from 'react';
import { COMPANY_INFO, MOCK_HOMES, TESTIMONIALS } from '../constants';
import Button from '../components/Button';
import HomeCard from '../components/HomeCard';
import {
  Award,
  Truck,
  Wrench,
  DollarSign,
  Star,
  ArrowRight,
  ChevronRight,
  Home as HomeIcon,
  Building,
  MapPin,
  ShieldCheck,
  Users,
  Settings,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  DoorOpen,
  Footprints,
  Wind,
  Droplets,
  Zap,
  LandPlot
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredHomes = MOCK_HOMES.filter(h => h.isFeatured).slice(0, 3);
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* 1. Hero Banner - Universal Responsive Pattern */}
      <section ref={heroRef} className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/video/mainhero.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Manufactured & Modular Homes
            </span>
            <span className="block mt-2">in Southeast Louisiana</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4 mb-8">
            Fast Delivery • Full Setup • In-House Financing & Insurance
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-8 justify-center">
            <Button variant="primary" to="/catalog" size="lg">
              View Homes For Sale
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button variant="outline" to="/contact" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Request a Call Back
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Quick Inventory Links - 4 Large Buttons */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <Link
              to="/single-wide"
              className="group p-8 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-2xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <HomeIcon size={40} className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-stone-900 mb-2">Single Wide Homes</h3>
              <p className="text-stone-600 text-sm">Affordable & efficient</p>
            </Link>

            <Link
              to="/double-wide"
              className="group p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 rounded-2xl border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Building size={40} className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-stone-900 mb-2">Double Wide Homes</h3>
              <p className="text-stone-600 text-sm">Spacious family living</p>
            </Link>

            <Link
              to="/catalog?type=Modular"
              className="group p-8 bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 rounded-2xl border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <HomeIcon size={40} className="text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-stone-900 mb-2">Modular Homes</h3>
              <p className="text-stone-600 text-sm">Premium construction</p>
            </Link>

            <Link
              to="/manufacturers"
              className="group p-8 bg-gradient-to-br from-violet-50 to-violet-100 hover:from-violet-100 hover:to-violet-200 rounded-2xl border-2 border-violet-200 hover:border-violet-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Award size={40} className="text-violet-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-stone-900 mb-2">View by Manufacturer</h3>
              <p className="text-stone-600 text-sm">Champion, Franklin & more</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Homes */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Featured Homes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Find Your Perfect Home
            </h2>
            <p className="text-stone-600 text-lg max-w-xl mx-auto">
              Explore our most popular models, ready for delivery across Southeast Louisiana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredHomes.map((home, idx) => (
              <div key={home.id} className="scroll-animate" style={{ transitionDelay: `${idx * 100}ms` }}>
                <HomeCard home={home} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center scroll-animate">
            <Button to="/catalog" size="lg">
              View All Homes
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Current Deals & Programs */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Special Offers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Current Deals & Programs
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Take advantage of our limited-time offers and special programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {/* Deal 1 */}
            <div className="scroll-animate group p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border-2 border-emerald-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <DollarSign size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Free Slab or Free Utilities</h3>
              <p className="text-stone-600">
                Choose between a free concrete slab foundation or free utility hookup on select in-stock homes.
              </p>
            </div>

            {/* Deal 2 */}
            <div className="scroll-animate group p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '100ms' }}>
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Free Site Prep on In-Stock Franklin Homes</h3>
              <p className="text-stone-600">
                Get free site preparation when you purchase an in-stock Franklin home model.
              </p>
            </div>

            {/* Deal 3 */}
            <div className="scroll-animate group p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border-2 border-amber-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '200ms' }}>
              <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Restore Louisiana Grants Accepted</h3>
              <p className="text-stone-600">
                We accept all Restore Louisiana grants and help you through the entire application process.
              </p>
            </div>
          </div>

          <div className="text-center scroll-animate">
            <Button to="/services" variant="outline" size="lg">
              View All Deals
              <ChevronRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us - EXACT 6 items from spec */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Why Gulf South Homes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              We're more than just a dealer—we're your partner in homeownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: <HomeIcon size={28} />, title: "Huge Stock Inventory", desc: "Largest selection in South Louisiana, ready for delivery", color: "bg-blue-600" },
              { icon: <Wrench size={28} />, title: "On-Site Parts Department", desc: "Full-service parts store and repair team", color: "bg-emerald-600" },
              { icon: <CheckCircle size={28} />, title: "One-Stop Shop: Permits, Setup, Delivery", desc: "We handle everything from permits to final setup", color: "bg-violet-600" },
              { icon: <DollarSign size={28} />, title: "In-House Financing & Insurance", desc: "Easy approval with our in-house financing team", color: "bg-amber-600" },
              { icon: <Users size={28} />, title: "Family-Owned & Local", desc: "Trusted Louisiana business since 1995", color: "bg-rose-600" },
              { icon: <Settings size={28} />, title: "Custom Order Options", desc: "Customize your home to fit your needs", color: "bg-cyan-600" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="scroll-animate group p-6 lg:p-8 bg-white rounded-lg border border-stone-100 hover:border-stone-200 hover:shadow-md transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-stone-900 text-xl mb-2">{feature.title}</h3>
                <p className="text-stone-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How It Works - 4 Steps */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              How It Works
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Four simple steps to your new home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { num: "01", icon: <HomeIcon size={32} />, title: "Choose Your Home", desc: "Browse our inventory and select the perfect floor plan" },
              { num: "02", icon: <DollarSign size={32} />, title: "Purchase Options", desc: "Get pre-approved with our financing partners" },
              { num: "03", icon: <LandPlot size={32} />, title: "Land & Permits", desc: "We handle site prep, permits, and all paperwork" },
              { num: "04", icon: <Truck size={32} />, title: "Delivery & Setup", desc: "Professional delivery and complete installation" },
            ].map((step, idx) => (
              <div key={idx} className="scroll-animate text-center" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.num}
                  </div>
                </div>
                <h3 className="font-bold text-xl text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center scroll-animate">
            <Button to="/services" size="lg">
              See Full Buying Process
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Reviews Preview */}
      <section className="py-20 sm:py-28 bg-stone-900 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-stone-800 text-white text-sm font-semibold rounded-md mb-4">
              Customer Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              What Our Neighbors Say
            </h2>
            <p className="text-stone-400 text-lg max-w-xl mx-auto">
              Trusted by families across South Louisiana for over 30 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="scroll-animate bg-stone-800 p-8 rounded-lg border border-stone-700 hover:bg-stone-750 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, r) => (
                    <Star key={r} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/90 text-lg leading-relaxed mb-8 font-light">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-stone-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. About Preview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6">
              Family-Owned Since 1995
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Gulf South Homes has been serving Southeast Louisiana families for over 30 years.
              As a family-owned business, we understand the importance of finding the perfect home for your loved ones.
              Our commitment to quality, service, and community has made us one of the most trusted manufactured and modular home dealers in the region.
              From our family to yours, we're here to help you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/about" size="lg">
                About Us
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button to="/about#team" variant="outline" size="lg">
                Meet the Team
                <Users size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Parts Store Preview */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Parts & Service
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              On-Site Parts Store
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Everything you need to maintain and upgrade your manufactured home.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-10">
            {[
              { icon: <DoorOpen size={32} />, label: "Doors", color: "from-blue-500 to-blue-600" },
              { icon: <Footprints size={32} />, label: "Steps", color: "from-emerald-500 to-emerald-600" },
              { icon: <HomeIcon size={32} />, label: "Skirting", color: "from-violet-500 to-violet-600" },
              { icon: <Wind size={32} />, label: "Windows", color: "from-amber-500 to-amber-600" },
              { icon: <Droplets size={32} />, label: "Plumbing", color: "from-cyan-500 to-cyan-600" },
              { icon: <Zap size={32} />, label: "Electrical", color: "from-rose-500 to-rose-600" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="scroll-animate group p-6 bg-white rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-stone-900">{item.label}</h3>
              </div>
            ))}
          </div>

          <div className="text-center scroll-animate">
            <Button to="/parts" size="lg">
              Visit Parts Store
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Contact Form - Moved above footer */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-stone-600 text-lg">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form className="scroll-animate bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-stone-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-stone-900 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="(985) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="helpType" className="block text-sm font-semibold text-stone-900 mb-2">
                    How Can We Help You? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="helpType"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select an option...</option>
                    <option value="viewing">Schedule a Home Viewing</option>
                    <option value="financing">Financing Information</option>
                    <option value="land-home">Land & Home Package</option>
                    <option value="parts">Parts & Service</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Submit
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
      </section>
    </div>
  );
};

export default Home;
