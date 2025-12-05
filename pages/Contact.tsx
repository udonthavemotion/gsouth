import React from 'react';
import { COMPANY_INFO } from '../constants';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
       <div className="bg-stone-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-stone-300">We are here to help you find your way home.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Visit Our Sales Center</h2>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-stone-900">Address</h4>
                            <p className="text-stone-600">{COMPANY_INFO.address}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-stone-900">Phone</h4>
                            <p className="text-stone-600">{COMPANY_INFO.phone}</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Clock className="text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-stone-900">Hours</h4>
                            <p className="text-stone-600">Mon-Fri: {COMPANY_INFO.hours.weekdays}</p>
                            <p className="text-stone-600">Sat: {COMPANY_INFO.hours.saturday}</p>
                            <p className="text-stone-600">Sun: {COMPANY_INFO.hours.sunday}</p>
                        </div>
                    </div>
                </div>
             </div>

             {/* Mock Map */}
             <div className="bg-stone-200 h-64 rounded-xl w-full flex items-center justify-center text-stone-500 font-medium">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?q=1986%20Highway%20182%2C%20Houma%2C%20LA%2070364&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="rounded-xl grayscale opacity-80"
                ></iframe>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-stone-200">
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Send us a Message</h2>
            <p className="text-stone-600 mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                        <input required type="text" className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                        <input required type="text" className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Phone</label>
                        <input required type="tel" className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Interested In</label>
                    <select className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                        <option>Buying a Home</option>
                        <option>Land & Home Package</option>
                        <option>Financing</option>
                        <option>Parts & Service</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"></textarea>
                </div>

                <Button fullWidth className="text-lg py-4">Send Message</Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
