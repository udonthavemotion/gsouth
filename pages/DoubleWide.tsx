import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DOUBLE_WIDE_HOMES } from '../data/double-wide-homes';
import HomeCard from '../components/HomeCard';
import { SlidersHorizontal, X, ArrowRight } from 'lucide-react';

const DoubleWide: React.FC = () => {
  const [searchParams] = useSearchParams();
  const manufacturerParam = searchParams.get('manufacturer');

  const [selectedManufacturer, setSelectedManufacturer] = useState<string>(manufacturerParam || 'All');
  const [selectedBeds, setSelectedBeds] = useState<string>('All');
  const [selectedBaths, setSelectedBaths] = useState<string>('All');
  const [selectedSqft, setSelectedSqft] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);

  // Update manufacturer filter when URL param changes
  useEffect(() => {
    if (manufacturerParam) {
      setSelectedManufacturer(manufacturerParam);
    }
  }, [manufacturerParam]);

  // Extract unique values for filters
  const manufacturers = ['All', ...Array.from(new Set(DOUBLE_WIDE_HOMES.map(h => h.manufacturer)))];
  const bedOptions = ['All', '3', '4', '5'];
  const bathOptions = ['All', '2', '2.5', '3'];
  const sqftOptions = ['All', 'Under 1,500', '1,500-2,000', 'Over 2,000'];

  // Filter homes based on selections
  const filteredHomes = useMemo(() => {
    return DOUBLE_WIDE_HOMES.filter(home => {
      const matchManuf = selectedManufacturer === 'All' || home.manufacturer === selectedManufacturer;
      const matchBeds = selectedBeds === 'All' || home.beds === parseInt(selectedBeds);
      const matchBaths = selectedBaths === 'All' || home.baths === parseFloat(selectedBaths);

      let matchSqft = true;
      if (selectedSqft === 'Under 1,500') {
        matchSqft = home.sqft < 1500;
      } else if (selectedSqft === '1,500-2,000') {
        matchSqft = home.sqft >= 1500 && home.sqft <= 2000;
      } else if (selectedSqft === 'Over 2,000') {
        matchSqft = home.sqft > 2000;
      }

      return matchManuf && matchBeds && matchBaths && matchSqft;
    });
  }, [selectedManufacturer, selectedBeds, selectedBaths, selectedSqft]);

  // Count active filters
  const activeFiltersCount =
    (selectedManufacturer !== 'All' ? 1 : 0) +
    (selectedBeds !== 'All' ? 1 : 0) +
    (selectedBaths !== 'All' ? 1 : 0) +
    (selectedSqft !== 'All' ? 1 : 0);

  // Clear all filters
  const clearFilters = () => {
    setSelectedManufacturer('All');
    setSelectedBeds('All');
    setSelectedBaths('All');
    setSelectedSqft('All');
  };

  // Scroll animations
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

  // Scroll to grid smoothly
  const scrollToGrid = () => {
    const grid = document.getElementById('homes-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
          <source src="/assets/video/mainhero.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            <span className="block">Spacious.</span>
            <span className="block mt-2">Customizable.</span>
            <span className="block mt-2 bg-gradient-to-r from-emerald-300 via-primary to-emerald-400 bg-clip-text text-transparent">
              Built to Last.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4 mb-8">
            Browse our full line of modern double-wide homes designed for comfort, style, and long-term value.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-8 justify-center">
            <button
              onClick={scrollToGrid}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-emerald-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              View Inventory
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Homes Grid Section */}
      <div id="homes-grid" className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 scroll-animate">
        {/* Header with Filters Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display mb-2">
              Available Models
            </h2>
            <p className="text-stone-600 text-lg">
              Browsing <span className="font-semibold text-primary">{filteredHomes.length}</span> double-wide homes
            </p>
          </div>

          <div className="flex items-center gap-3">
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-stone-500 hover:text-stone-700 underline transition-colors"
                aria-label="Clear all active filters"
              >
                Clear filters
              </button>
            )}
            <button
              className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-stone-300 rounded-xl text-stone-700 hover:bg-stone-50 hover:border-primary/50 transition-all shadow-sm hover:shadow-md font-semibold"
              onClick={() => setShowFilters(true)}
              aria-label={`Open filters${activeFiltersCount > 0 ? ` (${activeFiltersCount} active)` : ''}`}
            >
              <SlidersHorizontal size={20} aria-hidden="true" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full min-w-[24px] text-center" aria-label={`${activeFiltersCount} active filter${activeFiltersCount !== 1 ? 's' : ''}`}>
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Active Filter Pills */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {selectedManufacturer !== 'All' && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                {selectedManufacturer}
                <button onClick={() => setSelectedManufacturer('All')} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
                  <X size={14} />
                </button>
              </span>
            )}
            {selectedBeds !== 'All' && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                {selectedBeds} Beds
                <button onClick={() => setSelectedBeds('All')} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
                  <X size={14} />
                </button>
              </span>
            )}
            {selectedBaths !== 'All' && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                {selectedBaths} Baths
                <button onClick={() => setSelectedBaths('All')} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
                  <X size={14} />
                </button>
              </span>
            )}
            {selectedSqft !== 'All' && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                {selectedSqft} sq ft
                <button onClick={() => setSelectedSqft('All')} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
                  <X size={14} />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Homes Grid or Empty State */}
        {filteredHomes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredHomes.map((home, idx) => (
              <div
                key={home.id}
                className="scroll-animate"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <HomeCard home={home} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-stone-200 border-dashed">
            <div className="max-w-md mx-auto px-4">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SlidersHorizontal size={32} className="text-stone-400" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">No homes match your filters</h3>
              <p className="text-stone-600 mb-6">Try adjusting your filter selections to see more results.</p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                aria-label="Clear all filters"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Filter Drawer - Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          showFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowFilters(false)}
      />

      {/* Filter Drawer - Panel */}
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
              aria-label="Close filters"
            >
              <X size={22} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {/* Manufacturer Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Manufacturer</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by manufacturer">
                {manufacturers.map(manuf => (
                  <label key={manuf} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="manufacturer"
                      checked={selectedManufacturer === manuf}
                      onChange={() => setSelectedManufacturer(manuf)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${manuf === 'All' ? 'all brands' : manuf} manufacturer`}
                    />
                    <span className={`${selectedManufacturer === manuf ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {manuf === 'All' ? 'All Brands' : manuf}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bedrooms Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Bedrooms</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by number of bedrooms">
                {bedOptions.map(beds => (
                  <label key={beds} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="beds"
                      checked={selectedBeds === beds}
                      onChange={() => setSelectedBeds(beds)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${beds === 'All' ? 'any number of' : beds} bedroom${beds !== '1' && beds !== 'All' ? 's' : ''}`}
                    />
                    <span className={`${selectedBeds === beds ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {beds === 'All' ? 'Any' : `${beds} Bed${beds !== '1' ? 's' : ''}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bathrooms Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Bathrooms</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by number of bathrooms">
                {bathOptions.map(baths => (
                  <label key={baths} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="baths"
                      checked={selectedBaths === baths}
                      onChange={() => setSelectedBaths(baths)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${baths === 'All' ? 'any number of' : baths} bathroom${baths !== '1' && baths !== 'All' ? 's' : ''}`}
                    />
                    <span className={`${selectedBaths === baths ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {baths === 'All' ? 'Any' : `${baths} Bath${baths !== '1' ? 's' : ''}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Square Footage Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Square Footage</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by square footage">
                {sqftOptions.map(sqft => (
                  <label key={sqft} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="sqft"
                      checked={selectedSqft === sqft}
                      onChange={() => setSelectedSqft(sqft)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by square footage: ${sqft === 'All' ? 'all sizes' : sqft}`}
                    />
                    <span className={`${selectedSqft === sqft ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {sqft === 'All' ? 'All Sizes' : `${sqft} sq ft`}
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
              aria-label={`View ${filteredHomes.length} filtered homes`}
            >
              View {filteredHomes.length} Homes
            </button>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="w-full py-3 text-stone-600 font-medium hover:text-stone-900 transition-colors"
                aria-label="Clear all filters"
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

export default DoubleWide;
