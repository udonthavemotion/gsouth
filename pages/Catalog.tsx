import React, { useState, useMemo } from 'react';
import { MOCK_HOMES } from '../constants';
import HomeCard from '../components/HomeCard';
import { SlidersHorizontal, X } from 'lucide-react';

const Catalog: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedManuf, setSelectedManuf] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique values for filters
  const types = ['All', ...Array.from(new Set(MOCK_HOMES.map(h => h.type)))];
  const manufacturers = ['All', ...Array.from(new Set(MOCK_HOMES.map(h => h.manufacturer)))];

  const filteredHomes = useMemo(() => {
    return MOCK_HOMES.filter(home => {
      const matchType = selectedType === 'All' || home.type === selectedType;
      const matchManuf = selectedManuf === 'All' || home.manufacturer === selectedManuf;
      return matchType && matchManuf;
    });
  }, [selectedType, selectedManuf]);

  const activeFiltersCount = (selectedType !== 'All' ? 1 : 0) + (selectedManuf !== 'All' ? 1 : 0);

  const clearFilters = () => {
    setSelectedType('All');
    setSelectedManuf('All');
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
          <source src="/assets/video/hero.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Find Your Perfect Home
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4">
            Browse our collection of quality manufactured and modular homes. From cozy single-wides to spacious family models.
          </p>
        </div>
      </section>

      {/* Catalog Content */}
      <div className="container py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">Available Models</h2>
            <p className="text-stone-600 mt-1">Browsing {filteredHomes.length} homes</p>
          </div>
          
          <div className="flex items-center gap-3">
            {activeFiltersCount > 0 && (
              <button 
                onClick={clearFilters}
                className="text-sm text-stone-500 hover:text-stone-700 underline"
              >
                Clear filters
              </button>
            )}
            <button 
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-50 hover:border-stone-400 transition-colors shadow-sm"
              onClick={() => setShowFilters(true)}
            >
              <SlidersHorizontal size={18} />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Active Filter Pills */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedType !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {selectedType}
                <button onClick={() => setSelectedType('All')} className="hover:bg-primary/20 rounded-full p-0.5">
                  <X size={14} />
                </button>
              </span>
            )}
            {selectedManuf !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {selectedManuf}
                <button onClick={() => setSelectedManuf('All')} className="hover:bg-primary/20 rounded-full p-0.5">
                  <X size={14} />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Homes Grid - Full Width */}
        {filteredHomes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredHomes.map(home => (
              <HomeCard key={home.id} home={home} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-stone-200 border-dashed">
            <p className="text-stone-500 text-lg">No homes found matching your criteria.</p>
            <button 
              onClick={clearFilters}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Slide-out Filter Drawer */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          showFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowFilters(false)}
      />
      
      {/* Drawer Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          showFilters ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-5 border-b border-stone-200">
            <h2 className="text-xl font-bold text-stone-900">Filters</h2>
            <button 
              onClick={() => setShowFilters(false)}
              className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {/* Home Type Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Home Type</h3>
              <div className="space-y-3">
                {types.map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="type" 
                      checked={selectedType === type}
                      onChange={() => setSelectedType(type)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                    />
                    <span className={`${selectedType === type ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Manufacturer Filter */}
            <div>
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Manufacturer</h3>
              <div className="space-y-3">
                {manufacturers.map(m => (
                  <label key={m} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="manufacturer" 
                      checked={selectedManuf === m}
                      onChange={() => setSelectedManuf(m)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                    />
                    <span className={`${selectedManuf === m ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {m}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-5 border-t border-stone-200 space-y-3">
            <button 
              onClick={() => setShowFilters(false)}
              className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View {filteredHomes.length} Homes
            </button>
            {activeFiltersCount > 0 && (
              <button 
                onClick={clearFilters}
                className="w-full py-3 text-stone-600 font-medium hover:text-stone-900 transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
