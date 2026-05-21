import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data';
import { createWhatsAppLink, formatPrice } from '../utils';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="text-emerald-600 hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  const whatsappMsg = `Hi DurDur, I would like to order: ${product.name} (${product.id}). Is it available now?`;

  return (
    <div className="pb-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 mb-8 font-medium transition-colors">
        <ArrowLeft size={18} /> Back to Shop
      </Link>

      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="bg-slate-50 p-6 sm:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full max-w-sm rounded-xl shadow-lg mix-blend-multiply"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
              {product.category}
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-emerald-600">{formatPrice(product.price)}</span>
              {product.available && (
                <span className="flex items-center gap-1 text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                  <CheckCircle2 size={16} /> In Stock
                </span>
              )}
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {product.long_desc}
            </p>

            <div className="space-y-6 mb-10">
              <div className="bg-blue-50 p-4 rounded-xl flex gap-3">
                <Info className="shrink-0 text-blue-600" size={24} />
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Usage Instructions</h4>
                  <p className="text-blue-800 text-sm">{product.usage}</p>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl flex gap-3">
                <AlertTriangle className="shrink-0 text-amber-600" size={24} />
                <div>
                  <h4 className="font-bold text-amber-900 mb-1">Important Warnings</h4>
                  <p className="text-amber-800 text-sm">{product.warnings}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={createWhatsAppLink(whatsappMsg)}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 transition-all shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle size={24} />
                Order via WhatsApp
              </a>
              <p className="text-center text-sm text-slate-500 mt-2">
                Fast response • Payment on delivery • Secure packaging
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
