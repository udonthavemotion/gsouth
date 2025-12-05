import React from 'react';
import { Wrench, TreePine, Banknote, Check } from 'lucide-react';
import Button from '../components/Button';

const Services: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-white border-b border-stone-200 py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-stone-900 mb-4">Complete Home Solutions</h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Beyond selling homes, we provide the financing, land, and service you need to make homeownership easy.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">

        {/* Land & Home */}
        <div id="land-home" className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <div className="bg-emerald-100 inline-flex p-3 rounded-full text-primary mb-4">
                    <TreePine size={32} />
                </div>
                <h2 className="text-3xl font-bold text-stone-900 mb-4">Land & Home Packages</h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                    Don't have land yet? No problem. Our turnkey Land & Home packages simplify the process. 
                    We help you find the perfect property, handle the site preparation (including septic, water, and electric), 
                    and bundle it all into one easy mortgage payment.
                </p>
                <ul className="space-y-3 mb-8">
                    {['Site evaluation & preparation', 'Septic & utility installation', 'Combined financing', 'Parish permitting assistance'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-stone-700">
                            <Check size={18} className="text-primary" /> {item}
                        </li>
                    ))}
                </ul>
                <Button variant="primary" to="/contact">Inquire About Land</Button>
            </div>
            <div className="order-1 md:order-2 h-80 bg-stone-200 rounded-2xl overflow-hidden shadow-lg">
                <img src="/Modular Homes Page/Land and home packages/gulf-south-homes-LA-BELLE-MAISON-subdivision-map.jpg" alt="La Belle Maison Subdivision Map" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Financing */}
        <div id="financing" className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-80 bg-stone-200 rounded-2xl overflow-hidden shadow-lg">
                <img src="/Modular Homes Page/Financing made simple/gulf-south-homes-content-01-901h.webp" alt="Financing made simple" className="w-full h-full object-cover" />
            </div>
            <div>
                <div className="bg-amber-100 inline-flex p-3 rounded-full text-amber-600 mb-4">
                    <Banknote size={32} />
                </div>
                <h2 className="text-3xl font-bold text-stone-900 mb-4">Financing Made Simple</h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                    We work with top lenders specializing in manufactured and modular homes to get you the best rates possible. 
                    Whether you have perfect credit or are working to rebuild it, we have options for FHA, VA, USDA, and Chattel loans.
                </p>
                <div className="bg-white p-6 rounded-xl border border-stone-200 mb-8">
                    <h4 className="font-bold text-stone-900 mb-2">What you need to get started:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-600">
                        <li>• Proof of Income</li>
                        <li>• Employment History</li>
                        <li>• Identification</li>
                        <li>• Down Payment Sourcing</li>
                    </ul>
                </div>
                <Button variant="secondary" to="/contact">Get Pre-Approved</Button>
            </div>
        </div>

        {/* Parts & Service */}
        <div id="service" className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <div className="bg-stone-200 inline-flex p-3 rounded-full text-stone-700 mb-4">
                    <Wrench size={32} />
                </div>
                <h2 className="text-3xl font-bold text-stone-900 mb-4">Parts & Service Department</h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                    We don't disappear after the sale. Our dedicated in-house service department ensures your home stays in top condition. 
                    We also stock a large inventory of parts for DIY repairs or upgrades.
                </p>
                 <ul className="space-y-3 mb-8">
                    {['Warranty repairs', 'AC & Heating service', 'Skirting & steps', 'Plumbing & electrical parts'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-stone-700">
                            <Check size={18} className="text-primary" /> {item}
                        </li>
                    ))}
                </ul>
                <Button variant="outline" to="/contact">Schedule Service</Button>
            </div>
            <div className="order-1 md:order-2 h-80 bg-stone-200 rounded-2xl overflow-hidden shadow-lg">
                <img src="/Modular Homes Page/Financing made simple/gulf-south-homes-gallery-08-1920w.webp" alt="Parts & Service Department" className="w-full h-full object-cover" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
