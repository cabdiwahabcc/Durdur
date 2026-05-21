import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Clock, MessageCircle, ArrowRight, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data';
import { ProductCard } from '../components/ProductCard';
import { createWhatsAppLink } from '../utils';

export function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-12">
      {/* Hero Section */}
      <section className="bg-emerald-50 rounded-2xl sm:rounded-[2rem] overflow-hidden grid lg:grid-cols-2 lg:min-h-[540px] items-center text-center lg:text-left px-4 sm:px-12 py-12 lg:py-0">
        <div className="space-y-6 lg:pr-8 lg:py-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-3 py-1.5 rounded-full text-sm font-semibold mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            Open today until 12:00 AM
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Your Trusted Pharmacy in <span className="text-emerald-600">Mogadishu</span>
          </h1>
          <p className="text-lg sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Fast service, genuine medicines, and professional pharmacists. Order directly via WhatsApp and get it delivered anywhere in the city.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a 
              href={createWhatsAppLink("Hello! I want to order some medicines.")}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-bold text-base flex justify-center items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
            <Link 
              to="/shop" 
              className="bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 px-8 py-3.5 rounded-xl font-bold text-base flex justify-center items-center transition-all shadow-sm"
            >
              Browse Medicines
            </Link>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 pt-2 font-medium">
            <span className="flex items-center gap-1"><CheckCircle2 className="text-emerald-500" size={16} /> Licensed</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="text-emerald-500" size={16} /> Genuine Rx</span>
          </div>
        </div>
        
        <div className="hidden lg:block h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1200" 
            alt="Pharmacy professional" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent"></div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
          <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
            <ShieldCheck size={28} />
          </div>
          <h3 className="font-bold text-slate-800 text-lg mb-2">100% Genuine Medicine</h3>
          <p className="text-slate-500 text-sm">We strictly source from authorized distributors to guarantee quality and safety.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
          <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
            <Truck size={28} />
          </div>
          <h3 className="font-bold text-slate-800 text-lg mb-2">Fast Local Delivery</h3>
          <p className="text-slate-500 text-sm">Send your location via WhatsApp, and we'll deliver straight to your door.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
          <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
            <Clock size={28} />
          </div>
          <h3 className="font-bold text-slate-800 text-lg mb-2">Expert Consultation</h3>
          <p className="text-slate-500 text-sm">Our licensed pharmacists are ready to answer your questions and provide dosage advice.</p>
        </div>
      </section>

      {/* Categories Fast Links */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Browse by Category</h2>
          <Link to="/shop" className="text-emerald-600 font-semibold text-sm hover:underline flex items-center">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((category, i) => (
            <Link 
              key={category} 
              to={`/shop?category=${encodeURIComponent(category)}`}
              className="bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all p-4 rounded-xl text-center flex flex-col items-center justify-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold mb-1">
                {i + 1}
              </div>
              <span className="font-semibold text-slate-700 text-sm sm:text-base group-hover:text-emerald-700">{category}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Frequently Needed</h2>
          <p className="text-slate-500 mt-1">Commonly requested medicines readily available.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            See All Options <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* WhatsApp Call to Action Banner */}
      <section className="bg-emerald-600 rounded-2xl sm:rounded-[2rem] overflow-hidden relative text-white py-12 px-6 sm:px-12 text-center lg:text-left">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Need a specific prescription?</h2>
            <p className="text-emerald-100 text-lg">Send us a photo of your prescription on WhatsApp. We will check availability and prepare your order immediately.</p>
          </div>
          <div className="shrink-0 flex flex-col items-center gap-3">
             <a
              href={createWhatsAppLink("Hello! I want to send a prescription to order medicine.")}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 transition-all shadow-lg hover:-translate-y-1"
            >
              <MessageCircle size={24} className="text-[#25D366]" />
              Send Prescription
            </a>
            <span className="text-emerald-200 text-sm font-medium">Fast & confidential</span>
          </div>
        </div>
      </section>

      {/* Testimonial snippet */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={24} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <blockquote className="text-2xl font-medium text-slate-800 leading-relaxed mb-6">
            "DurDur Pharmacy has been a lifesaver for my family. Finding genuine medicine used to be a worry, but now I just message them on WhatsApp and get it delivered quickly. Their service is truly exceptional."
          </blockquote>
          <div className="font-bold text-slate-800">Aisha M.</div>
          <div className="text-slate-500 text-sm">Customer since 2022 • Mogadishu</div>
        </div>
      </section>
    </div>
  );
}
