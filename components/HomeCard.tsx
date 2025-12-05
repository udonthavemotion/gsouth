import React, { useState } from 'react';
import { HomeModel } from '../types';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, ArrowRight, Images, Sparkles } from 'lucide-react';
import ImageGallery from './ImageGallery';

interface HomeCardProps {
  home: HomeModel;
}

const HomeCard: React.FC<HomeCardProps> = ({ home }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-stone-900/15">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={home.imageUrl} 
            alt={home.name}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>
          
          {/* Featured Badge */}
          {home.isFeatured && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md">
              <Sparkles size={12} />
              Featured
            </div>
          )}

          {/* Gallery Button */}
          {home.gallery && home.gallery.length > 0 && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setGalleryOpen(true);
              }}
              className="absolute top-4 right-4 flex items-center gap-1.5 bg-white text-stone-900 px-3 py-1.5 rounded-md text-xs font-bold shadow-md transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-stone-50"
            >
              <Images size={14} />
              {home.gallery.length} Photos
            </button>
          )}

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-5">
            <div className="flex items-end justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 bg-stone-900 text-white text-xs font-medium rounded-md mb-2">
                  {home.manufacturer === 'BG' ? 'BG Manufacturing' : home.manufacturer}
                </span>
                <h3 className="text-xl font-bold text-white font-display leading-tight">
                  {home.name}
                </h3>
                <p className="text-white/70 text-sm mt-0.5">{home.type}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Stats Row */}
          <div className="flex justify-between items-center py-4 px-2 bg-stone-50 rounded-lg mb-4">
            <div className="flex flex-col items-center flex-1">
              <div className="flex items-center gap-1.5 text-primary mb-0.5">
                <Bed size={16} />
                <span className="text-lg font-bold text-stone-900">{home.beds}</span>
              </div>
              <span className="text-xs text-stone-500 font-medium">Beds</span>
            </div>
            <div className="w-px h-8 bg-stone-200"></div>
            <div className="flex flex-col items-center flex-1">
              <div className="flex items-center gap-1.5 text-primary mb-0.5">
                <Bath size={16} />
                <span className="text-lg font-bold text-stone-900">{home.baths}</span>
              </div>
              <span className="text-xs text-stone-500 font-medium">Baths</span>
            </div>
            <div className="w-px h-8 bg-stone-200"></div>
            <div className="flex flex-col items-center flex-1">
              <div className="flex items-center gap-1.5 text-primary mb-0.5">
                <Maximize size={16} />
                <span className="text-lg font-bold text-stone-900">{home.sqft.toLocaleString()}</span>
              </div>
              <span className="text-xs text-stone-500 font-medium">Sq Ft</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 mb-5">
            {home.description}
          </p>

          {/* CTA Button */}
          <Link
            to={
              home.type === 'Double Wide' 
                ? `/double-wide/${home.id}` 
                : home.type === 'Modular'
                ? `/modular-homes/${home.id}`
                : `/catalog/${home.id}`
            }
            className="flex items-center justify-center gap-2 w-full py-3 bg-stone-900 text-white rounded-md text-sm font-semibold transition-all duration-300 hover:bg-primary group/btn"
          >
            View Details 
            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
        
        {/* Hover border glow effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-primary/20 pointer-events-none"></div>
      </div>

      {/* Image Gallery Modal */}
      {home.gallery && home.gallery.length > 0 && (
        <ImageGallery
          images={home.gallery}
          homeModel={home.name}
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
};

export default HomeCard;
