import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { createWhatsAppLink, formatPrice } from '../utils';

interface Product {
  id: string;
  name: string;
  category: string;
  short_desc: string;
  price: string;
  image: string;
}

export function ProductCard({ product }: { product: Product }) {
  const whatsappMsg = `Hello DurDur Pharmacy! I am interested in ordering: ${product.name} (${product.id}). Is it available?`;

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
      <Link to={`/shop/${product.id}`} className="block relative aspect-square overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded text-slate-700">
          {product.category}
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/shop/${product.id}`} className="hover:text-emerald-600 transition-colors">
            <h3 className="font-bold text-slate-800 leading-tight">{product.name}</h3>
          </Link>
        </div>
        
        <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">
          {product.short_desc}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <span className="font-semibold text-emerald-700">{formatPrice(product.price)}</span>
          
          <div className="flex gap-2">
            <Link 
              to={`/shop/${product.id}`}
              className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded bg-slate-50 transition-colors"
              aria-label="View Details"
            >
              <ShoppingBag size={18} />
            </Link>
            <a
              href={createWhatsAppLink(whatsappMsg)}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-sm transition-colors"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
