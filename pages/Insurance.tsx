import React, { useEffect } from 'react';
import { Shield, CheckCircle, Phone, FileText, DollarSign, Home as HomeIcon } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';

const Insurance: React.FC = () => {
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
          <source src="/assets/video/financingpage.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
            <Shield size={18} />
            Protect Your Investment
          </div>

          {/* Heading */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            In-House Insurance Agents
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4">
            Comprehensive coverage for your manufactured home
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-animate text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
                Insurance Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6">
                Convenient In-House Insurance
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Protect your investment with comprehensive insurance coverage arranged right here at Gulf South Homes.
                Our in-house insurance agents make it easy to get the protection you need without shopping around.
              </p>
            </div>

            {/* Why Choose Our Insurance */}
            <div className="scroll-animate mb-16">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mb-8">
                Why Get Insurance Through Gulf South Homes?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <HomeIcon size={28} />,
                    title: "One-Stop Convenience",
                    desc: "Handle financing, purchase, and insurance all in one place"
                  },
                  {
                    icon: <Shield size={28} />,
                    title: "Manufactured Home Specialists",
                    desc: "Policies designed specifically for manufactured and modular homes"
                  },
                  {
                    icon: <DollarSign size={28} />,
                    title: "Competitive Rates",
                    desc: "Access to multiple carriers to find you the best coverage at the best price"
                  },
                  {
                    icon: <CheckCircle size={28} />,
                    title: "Fast Approval",
                    desc: "Quick quotes and same-day coverage available in most cases"
                  },
                  {
                    icon: <FileText size={28} />,
                    title: "Bundling Options",
                    desc: "Bundle home and auto insurance for additional savings"
                  },
                  {
                    icon: <Phone size={28} />,
                    title: "Local Support",
                    desc: "Our team is here to help with claims and questions"
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group p-6 bg-stone-50 rounded-xl border border-stone-200 hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-lg text-stone-900 mb-2">{item.title}</h4>
                    <p className="text-stone-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Options */}
            <div className="scroll-animate bg-gradient-to-br from-indigo-50 to-violet-100 rounded-2xl p-8 md:p-12 mb-16 border-2 border-indigo-200">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mb-6">
                What's Covered?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg text-stone-900 mb-3">Standard Coverage:</h4>
                  <ul className="space-y-2 text-stone-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Fire and smoke damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Wind and hail damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Lightning strikes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Vandalism and theft</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Personal liability protection</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-stone-900 mb-3">Optional Add-Ons:</h4>
                  <ul className="space-y-2 text-stone-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Flood insurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Extended replacement cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Personal property coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Loss of use coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Additional structures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Louisiana Specific */}
            <div className="scroll-animate bg-stone-50 rounded-2xl p-8 md:p-10 mb-16">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Insurance for Louisiana Homes
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Living in South Louisiana comes with unique challenges—hurricanes, flooding, and high humidity.
                Our insurance agents understand these risks and can help you get the right coverage for our climate.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <Shield size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Wind Zone III Coverage</h4>
                    <p className="text-stone-600 text-sm">Required for coastal Louisiana homes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <Shield size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Flood Policy Options</h4>
                    <p className="text-stone-600 text-sm">FEMA flood insurance available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="scroll-animate text-center">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mb-6">
                Get a Free Insurance Quote
              </h3>
              <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
                Speak with one of our in-house insurance agents to get a custom quote
                tailored to your new home and coverage needs.
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
                  to="/contact"
                  variant="outline"
                  size="lg"
                >
                  Request Quote Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-violet-700">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center scroll-animate">
            <Shield size={48} className="text-white/90 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Protect Your Investment with Confidence
            </h3>
            <p className="text-indigo-100 text-lg">
              Let our experienced in-house insurance team help you find the right coverage for your new manufactured home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
