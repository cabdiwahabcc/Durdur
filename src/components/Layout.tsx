import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, Cross, HeartPulse } from 'lucide-react';
import { NAV_LINKS } from '../data';
import { cn, createWhatsAppLink } from '../utils';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Banner (Contact info, Urgency) */}
      <div className="bg-emerald-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium">
        Fast Delivery in Mogadishu 🚚 | Genuine Medicines Guaranteed | Call: +252 61 885 7272
      </div>

      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="bg-emerald-600 p-2 rounded-lg text-white">
                <HeartPulse size={24} />
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">DurDur <span className="text-emerald-600">Pharmacy</span></span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-1 justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "font-medium text-sm transition-colors hover:text-emerald-600",
                    location.pathname === link.path ? "text-emerald-600 border-b-2 border-emerald-600" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href={createWhatsAppLink("Hello DurDur Pharmacy, I would like to make an inquiry.")}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-emerald-600 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-slate-100 pb-4 shadow-lg absolute w-full left-0 z-40">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium transition-colors",
                      location.pathname === link.path 
                        ? "bg-emerald-50 text-emerald-700" 
                        : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    <Icon size={20} className={location.pathname === link.path ? "text-emerald-600" : "text-slate-400"} />
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <a 
                  href={createWhatsAppLink("Hello DurDur Pharmacy, I need help ordering.")}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-md font-medium text-base shadow-sm"
                >
                  <MessageCircle size={20} />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-emerald-600 p-1.5 rounded text-white">
                <HeartPulse size={20} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">DurDur Pharmacy</span>
            </Link>
            <p className="text-sm mt-4 text-slate-400 leading-relaxed">
              Your trusted partner in health. Providing access to genuine, affordable medicine in Mogadishu, Somalia.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-emerald-400">Shop Medicines</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-400">Health Tips</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400">Request a Drug</a></li>
              <li><a href="#" className="hover:text-emerald-400">Delivery Information</a></li>
              <li><a href="#" className="hover:text-emerald-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📍 Maka Al-Mukarama Road, Mogadishu</li>
              <li>📞 +252 61 885 7272</li>
              <li>✉️ support@durdurpharmacy.so</li>
              <li className="mt-4 pt-4 border-t border-slate-700">
                <p className="font-medium text-emerald-400 mb-2">Open Daily</p>
                <p>6:30 AM - 12:00 AM</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>© {new Date().getFullYear()} DurDur Pharmacy Mogadishu. All rights reserved.</p>
          <p className="mt-2 text-xs">Disclaimer: Information provided is for educational purposes. Consult a doctor before use.</p>
        </div>
      </footer>

      {/* Sticky WhatsApp Floating Action Button */}
      <a
        href={createWhatsAppLink("Hello DurDur! I am visiting your website and need some assistance.")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-105 transition-all flex items-center justify-center group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 ease-in-out font-medium">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
