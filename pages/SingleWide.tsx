import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HOMES } from '../data/homes';
import { SlidersHorizontal, X, Phone, MapPin } from 'lucide-react';
import Button from '../components/Button';
import HomeCard from '../components/HomeCard';

const SingleWide: React.FC = () => {
  const [searchParams] = useSearchParams();
  const manufacturerParam = searchParams.get('manufacturer');

  // Filter state
  const [selectedBeds, setSelectedBeds] = useState<string>('All');
  const [selectedBaths, setSelectedBaths] = useState<string>('All');
  const [selectedManuf, setSelectedManuf] = useState<string>(manufacturerParam || 'All');
  const [selectedSizeRange, setSelectedSizeRange] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);

  // Update manufacturer filter when URL param changes
  useEffect(() => {
    if (manufacturerParam) {
      setSelectedManuf(manufacturerParam);
    }
  }, [manufacturerParam]);

  // Get only single-wide homes
  const singleWideHomes = HOMES.filter(h => h.type === 'Single Wide');

  // Extract unique filter values
  const bedOptions = ['All', ...Array.from(new Set(singleWideHomes.map(h => h.beds))).sort()];
  const bathOptions = ['All', ...Array.from(new Set(singleWideHomes.map(h => h.baths))).sort()];
  const manufacturers = ['All', ...Array.from(new Set(singleWideHomes.map(h => h.manufacturer)))];

  // Size range options
  const sizeRanges = [
    { label: 'All Sizes', value: 'All' },
    { label: 'Under 1,000 sq ft', value: '0-1000' },
    { label: '1,000 - 1,200 sq ft', value: '1000-1200' },
    { label: '1,200+ sq ft', value: '1200+' },
  ];

  // Filter homes
  const filteredHomes = useMemo(() => {
    return singleWideHomes.filter(home => {
      const matchBeds = selectedBeds === 'All' || home.beds === Number(selectedBeds);
      const matchBaths = selectedBaths === 'All' || home.baths === Number(selectedBaths);
      const matchManuf = selectedManuf === 'All' || home.manufacturer === selectedManuf;

      // Size range filter
      let matchSize = true;
      if (selectedSizeRange !== 'All') {
        if (selectedSizeRange === '0-1000') matchSize = home.sqft < 1000;
        else if (selectedSizeRange === '1000-1200') matchSize = home.sqft >= 1000 && home.sqft <= 1200;
        else if (selectedSizeRange === '1200+') matchSize = home.sqft > 1200;
      }

      return matchBeds && matchBaths && matchManuf && matchSize;
    });
  }, [selectedBeds, selectedBaths, selectedManuf, selectedSizeRange, singleWideHomes]);

  const activeFiltersCount = 
    (selectedBeds !== 'All' ? 1 : 0) + 
    (selectedBaths !== 'All' ? 1 : 0) + 
    (selectedManuf !== 'All' ? 1 : 0) + 
    (selectedSizeRange !== 'All' ? 1 : 0);

  const clearFilters = () => {
    setSelectedBeds('All');
    setSelectedBaths('All');
    setSelectedManuf('All');
    setSelectedSizeRange('All');
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
          <source src="/assets/video/single-wide-hero.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Single-Wide Homes
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4">
            Compact, efficient, and fully customizable — designed for your lifestyle.
          </p>
        </div>
      </section>

      {/* Catalog Content */}
      <div className="container py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">Available Models</h2>
            <p className="text-stone-600 mt-1">Browsing {filteredHomes.length} of {singleWideHomes.length} homes</p>
          </div>
          
          <div className="flex items-center gap-3">
            {activeFiltersCount > 0 && (
              <button 
                onClick={clearFilters}
                className="text-sm text-stone-500 hover:text-stone-700 underline"
                aria-label="Clear all active filters"
              >
                Clear filters
              </button>
            )}
            <button 
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-50 hover:border-stone-400 transition-colors shadow-sm"
              onClick={() => setShowFilters(true)}
              aria-label={`Open filters${activeFiltersCount > 0 ? ` (${activeFiltersCount} active)` : ''}`}
            >
              <SlidersHorizontal size={18} aria-hidden="true" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full" aria-label={`${activeFiltersCount} active filter${activeFiltersCount !== 1 ? 's' : ''}`}>
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Active Filter Pills */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedBeds !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {selectedBeds} Bed{selectedBeds !== '1' ? 's' : ''}
                <button onClick={() => setSelectedBeds('All')} className="hover:bg-primary/20 rounded-full p-0.5">
                  <X size={14} />
                </button>
              </span>
            )}
            {selectedBaths !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {selectedBaths} Bath{selectedBaths !== '1' ? 's' : ''}
                <button onClick={() => setSelectedBaths('All')} className="hover:bg-primary/20 rounded-full p-0.5">
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
            {selectedSizeRange !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {sizeRanges.find(r => r.value === selectedSizeRange)?.label}
                <button onClick={() => setSelectedSizeRange('All')} className="hover:bg-primary/20 rounded-full p-0.5">
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-emerald-700 text-white py-12">
        <div className="container text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">
            Found the Perfect Home?
          </h3>
          <p className="text-emerald-50 text-lg mb-6 max-w-2xl mx-auto">
            Let's schedule a visit or answer any questions about our single-wide homes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+19858760222"
              className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-stone-50 transition-all shadow-lg"
            >
              <Phone size={20} /> (985) 876-0222
            </a>
            <Button variant="secondary" to="/contact">
              Schedule a Visit
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-emerald-100">
            <MapPin size={16} />
            <span className="text-sm">1986 Highway 182, Houma, LA 70364</span>
          </div>
        </div>
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
              aria-label="Close filters"
            >
              <X size={22} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {/* Bedrooms Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Bedrooms</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by number of bedrooms">
                {bedOptions.map(beds => (
                  <label key={beds} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="beds" 
                      checked={selectedBeds === String(beds)}
                      onChange={() => setSelectedBeds(String(beds))}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${beds === 'All' ? 'any number of' : beds} bedroom${beds !== '1' && beds !== 'All' ? 's' : ''}`}
                    />
                    <span className={`${selectedBeds === String(beds) ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
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
                      checked={selectedBaths === String(baths)}
                      onChange={() => setSelectedBaths(String(baths))}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${baths === 'All' ? 'any number of' : baths} bathroom${baths !== '1' && baths !== 'All' ? 's' : ''}`}
                    />
                    <span className={`${selectedBaths === String(baths) ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {baths === 'All' ? 'Any' : `${baths} Bath${baths !== '1' ? 's' : ''}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Manufacturer Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Manufacturer</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by manufacturer">
                {manufacturers.map(m => (
                  <label key={m} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="manufacturer" 
                      checked={selectedManuf === m}
                      onChange={() => setSelectedManuf(m)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${m === 'All' ? 'all brands' : m} manufacturer`}
                    />
                    <span className={`${selectedManuf === m ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {m === 'All' ? 'All Brands' : m}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Range Filter */}
            <div>
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Square Footage</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by square footage">
                {sizeRanges.map(range => (
                  <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="sizeRange" 
                      checked={selectedSizeRange === range.value}
                      onChange={() => setSelectedSizeRange(range.value)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by square footage: ${range.label.toLowerCase()}`}
                    />
                    <span className={`${selectedSizeRange === range.value ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {range.label}
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

export default SingleWide;
