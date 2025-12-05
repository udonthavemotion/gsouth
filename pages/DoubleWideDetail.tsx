import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DOUBLE_WIDE_HOMES } from '../data/double-wide-homes';
import Button from '../components/Button';
import ImageGallery from '../components/ImageGallery';
import { Bed, Bath, Maximize, CheckCircle, ArrowLeft } from 'lucide-react';

const DoubleWideDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const home = DOUBLE_WIDE_HOMES.find(h => h.id === id);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!home) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Home Not Found</h2>
        <p className="text-stone-600 mb-4">The home model you're looking for doesn't exist.</p>
        <Button to="/double-wide">Back to Double-Wide Homes</Button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb / Back */}
      <div className="bg-stone-100 py-4 border-b border-stone-200">
        <div className="container mx-auto px-4">
           <Link to="/double-wide" className="text-stone-500 hover:text-stone-900 flex items-center text-sm">
             <ArrowLeft size={16} className="mr-1" /> Back to Double-Wide Homes
           </Link>
        </div>
      </div>

      {/* Hero Image Area */}
      <div className="h-64 md:h-96 w-full overflow-hidden relative bg-stone-900">
        <img 
          src={home.imageUrl} 
          alt={home.name}
          width={1200}
          height={600}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover opacity-90" 
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 md:p-12">
            <div className="container mx-auto">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2 inline-block">
                    {home.manufacturer}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-white">{home.name}</h1>
                <p className="text-stone-300 mt-2 text-lg">{home.type}</p>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                {/* Stats Bar */}
                <div className="bg-white rounded-xl shadow-lg border border-stone-200 p-6 flex flex-wrap justify-around items-center gap-4 text-center">
                    <div className="flex flex-col items-center">
                        <span className="text-stone-400 text-sm uppercase tracking-wider font-semibold mb-1">Bedrooms</span>
                        <div className="flex items-center gap-2 text-2xl font-bold text-stone-800">
                            <Bed className="text-primary" /> {home.beds}
                        </div>
                    </div>
                    <div className="w-px h-12 bg-stone-200 hidden sm:block"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-stone-400 text-sm uppercase tracking-wider font-semibold mb-1">Bathrooms</span>
                        <div className="flex items-center gap-2 text-2xl font-bold text-stone-800">
                            <Bath className="text-primary" /> {home.baths}
                        </div>
                    </div>
                    <div className="w-px h-12 bg-stone-200 hidden sm:block"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-stone-400 text-sm uppercase tracking-wider font-semibold mb-1">Size</span>
                        <div className="flex items-center gap-2 text-2xl font-bold text-stone-800">
                            <Maximize className="text-primary" /> {home.sqft.toLocaleString()} <span className="text-base font-normal text-stone-500">sqft</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">About This Home</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        {home.description} This model represents the finest in {home.manufacturer} craftsmanship. 
                        Designed for modern living, it incorporates energy-efficient materials and thoughtful layout 
                        design to maximize comfort and utility.
                    </p>
                </div>

                {/* Image Gallery */}
                {home.gallery && home.gallery.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">Photo Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {home.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedImageIndex(idx);
                            setGalleryOpen(true);
                          }}
                          className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          aria-label={`View ${home.name} image ${idx + 1} in gallery`}
                        >
                          <img
                            src={img}
                            alt={`${home.name} - Image ${idx + 1}`}
                            width={600}
                            height={450}
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            loading={idx < 6 ? "eager" : "lazy"}
                            onError={(e) => {
                              // Hide broken images
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors"></div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features Grid */}
                <div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {home.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-100">
                                <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                                <span className="font-medium text-stone-700">{feature}</span>
                            </div>
                        ))}
                        <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-100">
                                <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                                <span className="font-medium text-stone-700">Thermal Windows</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-100">
                                <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                                <span className="font-medium text-stone-700">High Insulation</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg border border-stone-200 p-6 sticky top-24">
                    <h3 className="text-xl font-bold text-stone-900 mb-2">Interested in {home.name}?</h3>
                    <p className="text-stone-500 mb-6 text-sm">Fill out the form below to get pricing, floor plans, or schedule a tour.</p>
                    
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                            <input type="tel" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="(555) 555-5555" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">Message (Optional)</label>
                            <textarea className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none" rows={3} placeholder="I'd like to see a floor plan..."></textarea>
                        </div>
                        <Button fullWidth onClick={() => alert("Request sent! One of our agents will contact you shortly.")}>Request Information</Button>
                    </form>
                    
                    <div className="mt-6 pt-6 border-t border-stone-100 text-center">
                        <p className="text-sm text-stone-500 mb-2">Prefer to call?</p>
                        <a href="tel:9858760222" className="text-lg font-bold text-primary hover:text-emerald-800 transition-colors">
                            (985) 876-0222
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* Image Gallery Modal */}
      {home.gallery && home.gallery.length > 0 && (
        <ImageGallery
          images={home.gallery}
          homeModel={home.name}
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          initialIndex={selectedImageIndex}
        />
      )}
    </div>
  );
};

export default DoubleWideDetail;

