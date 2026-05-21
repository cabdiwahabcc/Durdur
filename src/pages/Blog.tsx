import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../data';

export function Blog() {
  return (
    <div className="max-w-5xl mx-auto pb-16">
      <div className="mb-12 border-b border-slate-200 pb-8 text-center sm:text-left">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Health Tips & Resources</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Empowering our community in Somalia with professional medical advice, safe usage guides, and wellness tips.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {BLOG_POSTS.map(post => (
          <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col group">
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3 font-medium">
                <Calendar size={16} /> {post.date}
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-emerald-700 transition">
                {post.title}
              </h2>
              
              <p className="text-slate-600 mb-6 flex-1">
                {post.summary}
              </p>
              
              <button className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-800 transition mr-auto">
                Read Full Article <ArrowRight size={18} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 bg-emerald-50 rounded-2xl p-8 text-center border border-emerald-100">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Have a health question?</h3>
        <p className="text-slate-600 mb-6">Our pharmacists are available for free consultation via WhatsApp.</p>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold transition">
          Ask a Pharmacist
        </button>
      </div>
    </div>
  );
}
