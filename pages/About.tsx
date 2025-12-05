import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';
import { Shield, Users, Clock, Award, ChevronDown, Heart, MapPin, Phone, Star, Home as HomeIcon, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  since?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const About: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: 'Tim Duplantis',
      role: 'Owner/General Manager',
      image: '/assets/images/Meet the team/tim duplantis.webp',
    },
    {
      name: 'Stephanie Duplantis',
      role: 'Owner/Sales Manager',
      image: '/assets/images/Meet the team/stephanie duplantis.webp',
    },
    {
      name: 'Nancy Aponte',
      role: 'Administrative Assistant',
      image: '/assets/images/Meet the team/Nancy Aponte.webp',
      since: '2012',
    },
    {
      name: 'Jamie Hermecz',
      role: 'Operations Manager',
      image: '/assets/images/Meet the team/Jamie Hermecz.webp',
      since: '2023',
    },
    {
      name: 'Amber Verdin',
      role: 'Parts Manager',
      image: '/assets/images/Meet the team/Amber Verdin.jpg',
      since: '2025',
    },
    {
      name: 'Makayla Dehart',
      role: 'Sales',
      image: '/assets/images/Meet the team/Makayla Dehart.webp',
      since: '2025',
    },
    {
      name: 'Ronne Schwartz',
      role: 'Service Coordinator',
      image: '/assets/images/Meet the team/Ronne Schwartz.webp',
      since: '2022',
    },
    {
      name: 'Britney Barrios',
      role: 'Sales',
      image: '/assets/images/Meet the team/Britney Barrios.jpg',
      since: '2025',
    },
    {
      name: 'Shawna Leonard',
      role: 'Receptionist',
      image: '/assets/images/Meet the team/Shawna Leonard.png',
      since: '2025',
    },
  ];

  const galleryImages = [
    '/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-01-600h.jpg',
    '/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-02-890719f9-600h.jpeg',
    '/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-03-600h.jpg',
    '/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-04-600h.jpg',
    '/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-05-600h.jpg',
    '/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-06-600h.jpg',
    '/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-07-v1-600h.jpeg',
    '/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-10-fbba6293-600h.jpg',
    '/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-15-600h.jpg',
    '/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-16-600h.jpg',
  ];

  const faqs: FAQ[] = [
    {
      question: 'Do you carry repo houses?',
      answer: 'We occasionally have pre-owned or repo homes available. Inventory changes quickly, so we recommend giving us a call or stopping by to ask about current availability. If you\'re looking for a great deal, we\'ll help you explore all the options.',
    },
    {
      question: 'Do you have modulars?',
      answer: 'Yes, we offer modular homes through trusted builders like Sunshine, Franklin, and Champion. These homes are built to state code and placed on permanent foundations, making them comparable to traditional site-built homes in quality, financing, and long-term value.',
    },
    {
      question: 'What does my credit score have to be?',
      answer: 'We work with multiple lenders who specialize in manufactured home loans, including options for low or challenged credit. There\'s no set minimum, many buyers qualify with scores in the 500s and up, depending on the loan type and down payment.',
    },
    {
      question: 'How much is a down payment?',
      answer: 'Down payments vary based on your credit, the type of loan, and whether you\'re using land. Some programs allow for as little as $0 down, especially if you\'re using land in lieu or qualifying for a government-backed loan. Our team will help find the lowest down payment possible for your situation.',
    },
    {
      question: 'What does the price include?',
      answer: 'Every home includes: Delivery and setup, Air conditioning unit, Skirting, Stairs, and is Built to Wind Zone 3 standards (with Wind Zone 2 and 1 available upon request). We aim to make your home truly move-in ready with no surprise costs.',
    },
    {
      question: 'Are there any warranties?',
      answer: 'Yes, our manufacturers provide warranties on their homes. That includes warranties on the structure, major systems, and appliances that come with your home. We\'ll go over all warranty coverage with you during the buying process.',
    },
    {
      question: 'What will my note be?',
      answer: 'Monthly notes depend on your loan type, interest rate, down payment, and the home and land you\'re financing. Our team can give you a quick estimate based on lender tools and help you compare options side by side.',
    },
    {
      question: 'How can I find out if I qualify?',
      answer: 'Getting pre-qualified is easier than most people think. Just give us a call or stop in, and we\'ll walk you through a quick application process with no pressure and no commitment.',
    },
    {
      question: 'Do I have to have land/how do I get land?',
      answer: 'No, you don\'t need to already have land. We offer land and home packages and can also help you find land through our available lots or trusted real estate partners. You can also use land you already own or land given to you by family.',
    },
    {
      question: 'Do you take trade-ins for a down payment?',
      answer: 'Yes. If you already own a home or manufactured home, we may be able to use it as a trade-in to help cover your down payment or reduce your overall costs.',
    },
    {
      question: 'How long does the process take from start to finish?',
      answer: 'If the home is in stock, the process can take as little as a few weeks after financing and site prep. Custom orders typically take 6–12 weeks plus time for delivery and setup. We\'ll keep you updated every step of the way.',
    },
    {
      question: 'Do you handle permits, utilities, and setup?',
      answer: 'Yes. We help coordinate permits, utilities, foundation work, and full home setup with trusted local contractors. We handle as much of the process as possible so you don\'t have to.',
    },
    {
      question: 'Can I customize the floor plan or features?',
      answer: 'Yes, many of our homes offer customizable options including layout changes, upgraded finishes, and exterior features. We\'ll guide you through what\'s available based on your chosen home and builder.',
    },
    {
      question: 'What\'s the difference between manufactured and modular homes?',
      answer: 'Manufactured homes are built to HUD code and can go on private land or in a park. Modular homes are built to state code and installed on a permanent foundation. Modulars often qualify for more financing and appraise like traditional homes.',
    },
    {
      question: 'Do you deliver homes outside of Houma?',
      answer: 'Yes, we serve most of southeast Louisiana and beyond. Just give us a call with your location and we\'ll let you know if we can deliver and set up your home there.',
    },
    {
      question: 'Can I use land that\'s in my family\'s name?',
      answer: 'Yes. If your family owns land, you may be able to use it in place of a cash down payment. We\'ll help you with the paperwork to make sure it qualifies with the lender.',
    },
    {
      question: 'Do you help with insurance or homeowner setup?',
      answer: 'Yes. We have an insurance agent on staff who specializes in manufactured and modular homes. We also help make sure all utilities and setup tasks are coordinated before move-in.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
            Building Homes,<br />Building Community
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4 mb-8">
            For over three decades, Gulf South Homes has been Southeast Louisiana's trusted partner in quality manufactured and modular housing.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-8 justify-center">
            <Button variant="primary" to="/catalog" className="px-8 py-4">
              Browse Our Homes
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button variant="outline" to="/contact" className="px-8 py-4 border-white text-white hover:bg-white/10 hover:border-white">
              Schedule a Visit
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm mt-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Shield size={16} className="text-primary" />
              </div>
              <span className="text-white/80">BBB Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <HomeIcon size={16} className="text-primary" />
              </div>
              <span className="text-white/80">Local Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section - Enhanced */}
      <section className="py-24 md:py-32 relative overflow-hidden scroll-animate">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <Clock size={14} />
                <span>Established 1995</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-[1.1]">
                A Family Tradition of
                <span className="block mt-2 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                  Trust & Quality
                </span>
              </h2>

              <div className="space-y-5 mb-10">
                <p className="text-lg text-stone-600 leading-relaxed">
                  Founded in 1995 by <span className="font-semibold text-stone-900">Stephanie and Tim Duplantis</span>, Gulf South Homes began with a simple mission: to provide high-quality manufactured and modular homes to our community with transparency and integrity.
                </p>

                <p className="text-lg text-stone-600 leading-relaxed">
                  Over three decades later, we are still family-owned and operated, maintaining the same commitment to customer satisfaction that launched our business.
                </p>

                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary/5 to-emerald-50 rounded-2xl border border-primary/10">
                  <Sparkles size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-stone-700 leading-relaxed italic">
                    "We don't just sell you a home; we help you build a life. From finding land to servicing your home years down the line, we're your partner for the long haul."
                  </p>
                </div>
              </div>

              {/* Enhanced Value Props */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="group relative overflow-hidden p-5 bg-white rounded-2xl border border-stone-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="bg-gradient-to-br from-primary to-emerald-600 p-3 rounded-xl shadow-lg">
                      <Heart size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1.5">Family Values</h4>
                      <p className="text-sm text-stone-600 leading-snug">Family-owned since 1995</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden p-5 bg-white rounded-2xl border border-stone-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="bg-gradient-to-br from-primary to-emerald-600 p-3 rounded-xl shadow-lg">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1.5">Local Roots</h4>
                      <p className="text-sm text-stone-600 leading-snug">Serving Southeast Louisiana</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="primary" to="/contact" className="group shadow-lg hover:shadow-xl">
                Visit Our Showroom
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right: Enhanced Image Grid */}
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-5">
                  <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    <img
                      src="/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-03-600h.jpg"
                      alt="Modular home exterior"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative h-52 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    <img
                      src="/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-05-600h.jpg"
                      alt="Home setup process"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="space-y-5 mt-12">
                  <div className="relative h-52 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    <img
                      src="/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-04-600h.jpg"
                      alt="Quality construction"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    <img
                      src="/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-06-600h.jpg"
                      alt="Completed home"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating stat badge */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-white to-stone-50 px-10 py-6 rounded-3xl shadow-2xl border-2 border-white animate-float">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent mb-2">30+</div>
                  <div className="text-sm text-stone-600 font-semibold uppercase tracking-wide">Years of Excellence</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Badges Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-white via-stone-50 to-white scroll-animate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Shield, title: 'LHMA Members', desc: 'Louisiana Manufactured Housing Association', color: 'emerald' },
              { icon: Award, title: 'BBB Accredited', desc: 'A+ Rating for business ethics', color: 'amber' },
              { icon: Users, title: 'Local Team', desc: 'Living and working in Houma', color: 'blue' },
              { icon: Clock, title: 'Since 1995', desc: 'Three decades of expertise', color: 'stone' }
            ].map((badge, idx) => (
              <div
                key={idx}
                className="group text-center p-6 bg-white rounded-2xl border border-stone-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${badge.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <badge.icon size={32} className={badge.color === 'emerald' ? 'text-primary' : badge.color === 'amber' ? 'text-accent' : badge.color === 'blue' ? 'text-blue-600' : 'text-stone-700'} />
                </div>
                <h4 className="font-bold text-stone-900 mb-2 group-hover:text-primary transition-colors">{badge.title}</h4>
                <p className="text-sm text-stone-600 leading-snug">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section - Enhanced */}
      <section className="py-24 md:py-32 bg-stone-50 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Users size={14} />
              <span>Our Team</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-[1.1]">
              Meet the People
              <span className="block mt-2 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                Behind Your Home
              </span>
            </h2>

            <p className="text-xl text-stone-600 leading-relaxed">
              From sales to service, our dedicated team is here to guide you through every step of your homeownership journey.
            </p>
          </div>

          {/* Enhanced Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-stone-100 hover:border-primary/20"
              >
                {/* Image container */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Since badge */}
                  {member.since && (
                    <div className="absolute top-5 right-5 px-4 py-2">
                      <p className="text-xs font-bold text-white drop-shadow-lg">Since {member.since}</p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    {member.role}
                  </p>

                  {/* Decorative line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-emerald-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Hover accent */}
                <div className="absolute inset-0 border-2 border-primary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section - 2025 Redesign with Clear Hierarchy */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white scroll-animate relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Content Panel - No background, transparent text */}
          <div className="max-w-4xl mx-auto mb-20 text-center">
            {/* Overline Label - Small, grounded, non-pill */}
            <div className="inline-block mb-6">
              <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-primary/40 pb-1">
                Project Gallery
              </span>
            </div>

            {/* Headline - Unified, no competing gradients */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15] text-white">
              See Our Work{' '}
              <span className="font-extrabold text-white">
                in Action
              </span>
            </h2>

            {/* Supporting Copy - Optimal line length */}
            <p className="text-lg md:text-xl text-stone-200 leading-relaxed max-w-2xl mx-auto mb-8">
              From delivery to final setup, we handle every detail of bringing your home to life. Explore real projects and see the Gulf South difference.
            </p>

            {/* Primary CTA Button - Structural, not pill */}
            <button
              onClick={() => {
                const galleryGrid = document.querySelector('.gallery-grid');
                if (galleryGrid) {
                  galleryGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-emerald-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group text-base md:text-lg"
            >
              <span>View Gallery</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Enhanced Gallery Grid with varied heights */}
          <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                  idx === 0 || idx === 5 ? 'row-span-2 h-[500px]' : 'h-60'
                }`}
                onClick={() => setSelectedGalleryImage(idx)}
              >
                <img
                  src={image}
                  alt={`Gulf South Homes project ${idx + 1}`}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 flex items-center justify-center mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <ArrowRight size={24} className="text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Lightbox */}
          {selectedGalleryImage !== null && (
            <div
              className="fixed inset-0 bg-black/97 z-50 flex items-center justify-center p-4 animate-fade-in"
              onClick={() => setSelectedGalleryImage(null)}
            >
              <button
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
                onClick={() => setSelectedGalleryImage(null)}
              >
                ×
              </button>
              <img
                src={galleryImages[selectedGalleryImage]}
                alt={`Gallery image ${selectedGalleryImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
              {/* Image counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 text-white text-sm font-semibold border border-white/20">
                {selectedGalleryImage + 1} / {galleryImages.length}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-24 md:py-32 bg-white scroll-animate">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle2 size={14} />
              <span>FAQ</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-[1.1]">
              Questions?
              <span className="block mt-2 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                We Have Answers.
              </span>
            </h2>

            <p className="text-xl text-stone-600 leading-relaxed">
              Everything you need to know about buying a manufactured or modular home.
            </p>
          </div>

          {/* Enhanced FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`group bg-stone-50 border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openFAQ === idx
                    ? 'border-primary shadow-lg shadow-primary/10'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-7 py-6 flex items-center justify-between text-left hover:bg-stone-100/50 transition-colors duration-200"
                  aria-expanded={openFAQ === idx}
                >
                  <span className="font-bold text-stone-900 pr-6 text-lg">{faq.question}</span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFAQ === idx
                      ? 'bg-primary text-white rotate-180'
                      : 'bg-stone-200 text-stone-600 group-hover:bg-stone-300'
                  }`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    openFAQ === idx ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-7 pb-6 text-stone-600 leading-relaxed text-base border-t border-stone-200 pt-5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA after FAQ */}
          <div className="mt-16 text-center p-10 bg-gradient-to-br from-stone-50 to-white rounded-3xl border-2 border-stone-200">
            <p className="text-lg text-stone-700 mb-6 font-medium">Still have questions? We'd love to hear from you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/contact" className="shadow-lg hover:shadow-xl">
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-white hover:bg-stone-50 text-stone-900 font-semibold rounded-xl border-2 border-stone-300 hover:border-primary transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Phone size={20} className="text-primary" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-primary via-emerald-600 to-teal-700 text-white scroll-animate relative overflow-hidden">

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's find the perfect home for you and your family. Visit our showroom or give us a call today.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button variant="white" to="/catalog" className="px-10 py-5 text-lg shadow-2xl hover:shadow-white/20">
              View Available Homes
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              to="/contact"
              className="px-10 py-5 text-lg border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
