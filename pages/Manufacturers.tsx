import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MANUFACTURERS } from '../data/manufacturers';
import { COMPANY_INFO } from '../constants';
import Button from '../components/Button';
import { ArrowRight, MapPin, Phone, Clock, Building } from 'lucide-react';

const Manufacturers: React.FC = () => {
  // Scroll animations
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
    <div className="bg-stone-50 min-h-screen">
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
          <source src="/assets/video/about-hero.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Our Manufacturers
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4">
            We partner with the industry's leading manufacturers to bring you quality homes built to last. 
            Explore our trusted brands and find the perfect home for your family.
          </p>
        </div>
      </section>

      {/* Manufacturers Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="space-y-16 md:space-y-20">
            {MANUFACTURERS.map((manufacturer, idx) => (
              <div
                key={manufacturer.slug}
                className={`scroll-animate grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Logo Section */}
                <div className={`${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-stone-50 rounded-2xl p-8 lg:p-12 border-2 border-stone-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                    <img
                      src={manufacturer.logoPath}
                      alt={manufacturer.logoAlt}
                      className="w-full h-auto max-h-32 object-contain mx-auto"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/images/logo/logo.png';
                        target.alt = `${manufacturer.displayName} logo placeholder`;
                      }}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Manufacturer Name & Tagline */}
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 mb-2">
                        {manufacturer.displayName}
                      </h2>
                      {manufacturer.shortTagline && (
                        <p className="text-lg text-primary font-semibold">
                          {manufacturer.shortTagline}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-stone-600 text-lg leading-relaxed">
                      {manufacturer.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        variant="primary"
                        to={manufacturer.singlesRoute}
                        className="flex items-center justify-center"
                      >
                        View {manufacturer.displayName} Singles
                        <ArrowRight size={18} className="ml-2" />
                      </Button>
                      <Button
                        variant="outline"
                        to={manufacturer.doublesRoute}
                        className="flex items-center justify-center"
                      >
                        View {manufacturer.displayName} Doubles
                        <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area & Contact Info */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto scroll-animate">
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-stone-200 shadow-lg">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  Service Area
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 mb-4">
                  Serving Southeast Louisiana
                </h2>
                <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                  We deliver and set up homes throughout Southeast Louisiana, including Houma, Thibodaux, 
                  Morgan City, and surrounding areas. Contact us to learn more about our service area.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2 text-lg">Visit Our Showroom</h3>
                    <p className="text-stone-600 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2 text-lg">Call Us</h3>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-primary font-semibold text-lg hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-xl md:col-span-2">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-900 mb-3 text-lg">Business Hours</h3>
                    <div className="space-y-2 text-stone-600">
                      <p>{COMPANY_INFO.hours.weekdays}</p>
                      <p>{COMPANY_INFO.hours.saturday}</p>
                      <p>{COMPANY_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 text-center">
                <Button variant="primary" to="/contact" size="lg">
                  Get In Touch
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Manufacturers */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Why Our Manufacturers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              We carefully select manufacturers who share our commitment to quality, durability, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Building size={28} />,
                title: 'Industry Leaders',
                description: 'We partner with established manufacturers known for quality construction and innovation.'
              },
              {
                icon: <Building size={28} />,
                title: 'Storm-Ready Construction',
                description: 'Many of our manufacturers build homes that meet or exceed Wind Zone III standards for Louisiana\'s climate.'
              },
              {
                icon: <Building size={28} />,
                title: 'Warranty Protection',
                description: 'All manufacturers provide comprehensive warranties, giving you peace of mind for years to come.'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="scroll-animate p-6 lg:p-8 bg-stone-50 rounded-xl border border-stone-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-stone-900 text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturers;
