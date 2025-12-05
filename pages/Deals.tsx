import React, { useEffect } from 'react';
import { DollarSign, Truck, ShieldCheck, Gift, MapPin, Phone, Award } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';

const Deals: React.FC = () => {

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
          <source src="/assets/video/deals-hero.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
            Limited Time Offers
          </span>

          {/* Heading */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Current Deals & Programs
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4">
            Take advantage of our special offers and financing programs
          </p>
        </div>
      </section>

      {/* Main Deals Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Deal 1: Free Slab or Utilities */}
            <div className="scroll-animate group bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border-2 border-emerald-200 hover:border-emerald-300 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <DollarSign size={32} />
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Free Slab or Free Utilities</h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Choose between a free concrete slab foundation OR free utility hookup on select in-stock homes.
                This limited-time offer can save you thousands on your new home purchase.
              </p>
              <ul className="space-y-2 mb-6 text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Applies to select in-stock models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Save $3,000-$5,000 value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Limited time offer</span>
                </li>
              </ul>
              <Button to="/contact" fullWidth>
                Inquire Now
              </Button>
            </div>

            {/* Deal 2: Free Site Prep on Franklin Homes */}
            <div className="scroll-animate group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:border-blue-300 p-8 hover:shadow-2xl transition-all duration-300" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Truck size={32} />
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Free Site Prep on In-Stock Franklin Homes</h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Get free site preparation when you purchase an in-stock Franklin home model.
                We'll handle all the groundwork to get your property ready for delivery and installation.
              </p>
              <ul className="space-y-2 mb-6 text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Land clearing & grading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Foundation prep work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>In-stock Franklin models only</span>
                </li>
              </ul>
              <Button to="/contact" fullWidth>
                View Franklin Homes
              </Button>
            </div>

            {/* Deal 3: Restore Louisiana */}
            <div className="scroll-animate group bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border-2 border-amber-200 hover:border-amber-300 p-8 hover:shadow-2xl transition-all duration-300" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Restore Louisiana Grants Accepted</h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                We accept ALL Restore Louisiana grants and help you through the entire application process.
                Our team has experience working with grant recipients to make your recovery easier.
              </p>
              <ul className="space-y-2 mb-6 text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>All grant types accepted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>Application assistance provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>Experienced grant team</span>
                </li>
              </ul>
              <Button to="/contact" fullWidth>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Land & Home Deals Section */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
                Turnkey Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
                Land & Home Deals
              </h2>
              <p className="text-stone-600 text-lg">
                Don't have land yet? We offer complete Land & Home packages that bundle everything into one easy payment.
              </p>
            </div>

            <div className="scroll-animate bg-white rounded-2xl p-8 md:p-12 border border-stone-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">What's Included:</h3>
                  <ul className="space-y-3 text-stone-700">
                    <li className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Land acquisition assistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Truck size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Site preparation & grading</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Gift size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Septic system installation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Gift size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Water & electric hookup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Parish permitting handled</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <DollarSign size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Combined into one mortgage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-emerald-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-4">Why Choose a Package Deal?</h3>
                  <div className="space-y-4 text-stone-700">
                    <p>
                      <strong className="text-stone-900">One Payment:</strong> Bundle land and home into a single, easy monthly mortgage payment.
                    </p>
                    <p>
                      <strong className="text-stone-900">We Handle Everything:</strong> From finding the right property to final setup, we coordinate all the details.
                    </p>
                    <p>
                      <strong className="text-stone-900">Move-In Ready:</strong> Your home is delivered and set up on your new property, ready for move-in.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/land-home" size="lg">
                  View Land & Home Options
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Take Advantage of These Offers?
            </h2>
            <p className="text-xl text-stone-300 mb-10">
              Contact us today to learn more about our current deals and special programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <Phone size={20} />
                Call {COMPANY_INFO.phone}
              </a>
              <Button
                variant="outline"
                to="/contact"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-stone-900"
              >
                Request Information
              </Button>
            </div>

            <p className="mt-8 text-stone-400 text-sm">
              📍 {COMPANY_INFO.address}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deals;
