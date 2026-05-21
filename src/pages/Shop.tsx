import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data';
import { ProductCard } from '../components/ProductCard';

export function Shop() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.short_desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 pb-12">
      {/* Sidebar Filters */}
      <div className="w-full lg:w-64 shrink-0 space-y-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-lg mb-4">
            <Filter size={20} />
            Categories
          </div>
          <div className="space-y-1">
            <button
              onClick={() => setActiveCategory('All')}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                activeCategory === 'All' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              All Medicines
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                  activeCategory === category ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
          <h3 className="font-bold text-emerald-900 mb-2">Can't find it?</h3>
          <p className="text-sm text-emerald-800 mb-4">Message us directly. We restock regularly and can source specific medications.</p>
          <a
            href="https://wa.me/252618857272?text=Hello%20DurDur,%20I%20am%20looking%20for%20a%20specific%20medicine."
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Chat with Pharmacist
          </a>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Our Pharmacy</h1>
            <p className="text-slate-500">Showing {filteredProducts.length} results</p>
          </div>
          
          <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all shadow-sm bg-white"
            />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-700 mb-2">No medicines found</h3>
            <p className="text-slate-500 mb-6">We couldn't find anything matching your criteria.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="px-6 py-2 bg-emerald-100 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-200 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
