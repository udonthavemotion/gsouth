import React, { useEffect } from 'react';
import { ShieldCheck, CheckCircle, Phone, FileText, Home as HomeIcon, Users } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';

const LARestore: React.FC = () => {
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
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden pt-[calc(80px+env(safe-area-inset-top))] sm:pt-[calc(96px+env(safe-area-inset-top))] pb-12">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
              <ShieldCheck size={18} />
              Grant Approved Dealer
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              Restore Louisiana Program
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8">
              We Accept Every LA Restore Grant
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-animate text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
                Recovery Support
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6">
                Your Partner in Recovery
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Gulf South Homes is proud to work with Restore Louisiana grant recipients.
                We understand the challenges of recovering from natural disasters, and we're here
                to make the process of getting into your new home as smooth and stress-free as possible.
              </p>
            </div>

            {/* Grant Acceptance Badge */}
            <div className="scroll-animate bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-10 mb-16 text-center border-2 border-blue-200">
              <ShieldCheck size={64} className="text-blue-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-stone-900 mb-4">
                We Accept ALL Restore Louisiana Grants
              </h3>
              <p className="text-stone-700 text-lg max-w-2xl mx-auto">
                No matter which grant program you qualify for, we're equipped to work with you
                and help you navigate the requirements.
              </p>
            </div>

            {/* What We Do for LA Restore Customers */}
            <div className="scroll-animate mb-16">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mb-8 text-center">
                What We Do for LA Restore Customers
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FileText size={28} />,
                    title: "Application Assistance",
                    desc: "Help with paperwork, documentation, and navigating the grant process"
                  },
                  {
                    icon: <Users size={28} />,
                    title: "Dedicated Grant Team",
                    desc: "Experienced staff who understand Restore Louisiana requirements"
                  },
                  {
                    icon: <CheckCircle size={28} />,
                    title: "Compliance Support",
                    desc: "Ensure your home meets all program specifications and standards"
                  },
                  {
                    icon: <HomeIcon size={28} />,
                    title: "Eligible Home Selection",
                    desc: "Guide you to models that qualify under your grant program"
                  },
                  {
                    icon: <ShieldCheck size={28} />,
                    title: "Direct Grant Coordination",
                    desc: "Work directly with the Restore Louisiana office on your behalf"
                  },
                  {
                    icon: <Phone size={28} />,
                    title: "Ongoing Communication",
                    desc: "Keep you informed every step of the way through closing"
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

            {/* Why Choose Gulf South for Your Grant */}
            <div className="scroll-animate bg-stone-50 rounded-2xl p-8 md:p-12 mb-16">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mb-6">
                Why Choose Gulf South Homes for Your Restore Louisiana Grant?
              </h3>
              <div className="space-y-4 text-stone-700 text-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <p>
                    <strong className="text-stone-900">Proven Experience:</strong> We've successfully helped dozens of Restore Louisiana recipients get into quality manufactured homes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <p>
                    <strong className="text-stone-900">Local Expertise:</strong> As a Louisiana-based, family-owned business, we understand the local recovery process.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <p>
                    <strong className="text-stone-900">One-Stop Solution:</strong> From selecting your home to final setup, we handle everything including permits and site prep.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <p>
                    <strong className="text-stone-900">Quality Homes:</strong> All our homes meet or exceed Restore Louisiana program standards and building codes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <p>
                    <strong className="text-stone-900">Fast Delivery:</strong> Get into your new home quickly with our large in-stock inventory.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="scroll-animate text-center">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mb-6">
                Ready to Start Your Recovery?
              </h3>
              <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
                Contact our Restore Louisiana team today. We'll answer your questions, help with your application,
                and get you on the path to your new home.
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
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center scroll-animate">
            <ShieldCheck size={48} className="text-white/90 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Approved Restore Louisiana Partner
            </h3>
            <p className="text-blue-100 text-lg">
              Gulf South Homes is an experienced partner in the Restore Louisiana program,
              committed to helping Louisiana families recover and rebuild.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LARestore;
