import React from 'react';
import { Phone, MapPin, CheckCircle, Home, Map, FileText, Hammer, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';

const LandHome: React.FC = () => {
  const benefits = [
    {
      icon: <Home size={28} />,
      title: "One Simple Process",
      description: "We handle everything — finding land, securing your home, and coordinating the setup."
    },
    {
      icon: <DollarSign size={28} />,
      title: "Combined Financing",
      description: "Finance your land and home together with one loan, one payment, one closing."
    },
    {
      icon: <Map size={28} />,
      title: "Site Evaluation",
      description: "We assess your land for utilities, drainage, and placement before you commit."
    },
    {
      icon: <FileText size={28} />,
      title: "Permit Assistance",
      description: "Navigate parish permits and regulations with our experienced team."
    },
    {
      icon: <Hammer size={28} />,
      title: "Full Setup Included",
      description: "Delivery, leveling, skirting, steps, and utility connections — all handled."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Turnkey Ready",
      description: "Move in when it's done. No contractors to chase, no loose ends."
    }
  ];

  const steps = [
    { number: "01", title: "Consultation", description: "Tell us about your land (or let us help you find some) and your dream home." },
    { number: "02", title: "Site Assessment", description: "We evaluate your property for home placement, utilities, and permits." },
    { number: "03", title: "Choose Your Home", description: "Browse our inventory and customize your floor plan and finishes." },
    { number: "04", title: "Financing", description: "We connect you with lenders who specialize in land-home packages." },
    { number: "05", title: "Delivery & Setup", description: "Your home is delivered, set, and connected — we handle it all." },
    { number: "06", title: "Move In", description: "Get your keys and start living in your new home." }
  ];

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
          <source src="/assets/video/land-home-hero.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Land & Home Packages
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4 mb-8">
            Already have land? We'll help you place your dream home on it. Need land too? We can help with that.
          </p>

          {/* Button Row */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-8 justify-center">
            <Button variant="primary" to="/contact" className="px-8 py-4">
              Start Your Project
            </Button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
            >
              <Phone size={20} /> {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">Why Choose a Land & Home Package?</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Skip the hassle of coordinating multiple contractors. We make the entire process seamless from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-stone-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-stone-900 text-lg mb-2">{benefit.title}</h3>
                <p className="text-stone-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-stone-100">
        <div className="container">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">How It Works</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              From first conversation to move-in day, here's what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl relative">
                <span className="text-5xl font-bold text-primary/10 absolute top-4 right-4">{step.number}</span>
                <div className="relative z-10">
                  <h3 className="font-bold text-stone-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-stone-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Already Have Land? Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6">Already Have Land?</h2>
              <p className="text-stone-600 mb-6 text-lg">
                If you already own property in Louisiana, we can evaluate it for manufactured home placement. Our team will assess:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Utility access (electric, water, septic/sewer)",
                  "Drainage and flood zone considerations",
                  "Parish permit requirements",
                  "Driveway and home placement options",
                  "Foundation and anchoring needs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" to="/contact">
                Schedule a Site Visit
              </Button>
            </div>
            <div className="bg-stone-100 rounded-2xl p-8 sm:p-10">
              <h3 className="font-bold text-stone-900 text-xl mb-4">Need Help Finding Land?</h3>
              <p className="text-stone-600 mb-6">
                We work with local realtors and know the parishes well. Whether you're looking in Terrebonne, Lafourche, St. Mary, or surrounding areas, we can point you in the right direction.
              </p>
              <p className="text-stone-600 mb-6">
                Many of our customers find great deals on family land, rural lots, or properties that work perfectly for manufactured homes.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-emerald-700"
              >
                <Phone size={18} /> Call us to discuss options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-emerald-700 text-white py-12 sm:py-16">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Build on Your Land?
          </h2>
          <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
            Let's talk about your property and find the perfect home to put on it. Free consultations, no pressure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-stone-50 transition-all shadow-lg"
            >
              <Phone size={20} /> {COMPANY_INFO.phone}
            </a>
            <Button variant="secondary" to="/contact" className="px-8 py-4">
              Request a Consultation
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-emerald-100">
            <MapPin size={18} />
            <span>{COMPANY_INFO.address}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandHome;

