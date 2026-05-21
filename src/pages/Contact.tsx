import React from 'react';
import { MessageCircle, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { createWhatsAppLink } from '../utils';

export function Contact() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! For immediate response, please use the WhatsApp button instead.");
  };

  return (
    <div className="max-w-6xl mx-auto pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Contact Us</h1>
        <p className="text-lg text-slate-600">We're here to help. Reach out for prescriptions, inquiries, or support.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Contact info & fastest way */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-emerald-600 text-white rounded-[2rem] p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">The fastest way</h2>
            <p className="text-emerald-100 mb-8">Send us your prescription or inquiry on WhatsApp for an immediate response.</p>
            <a
              href={createWhatsAppLink("Hello DurDur, I have an inquiry.")}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 transition-all shadow-sm"
            >
              <MessageCircle size={24} className="text-[#25D366]" />
              Message on WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
            <h3 className="font-bold text-xl text-slate-800">Other ways to reach us</h3>
            
            <div className="flex gap-4 items-start">
              <div className="bg-slate-100 p-2.5 rounded-lg text-slate-600 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-medium text-slate-800">Phone</p>
                <a href="tel:+252618857272" className="text-slate-600 hover:text-emerald-600 transition">+252 61 885 7272</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-slate-100 p-2.5 rounded-lg text-slate-600 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-medium text-slate-800">Email</p>
                <a href="mailto:support@durdurpharmacy.so" className="text-slate-600 hover:text-emerald-600 transition">support@durdurpharmacy.so</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-slate-100 p-2.5 rounded-lg text-slate-600 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-medium text-slate-800">Location</p>
                <p className="text-slate-600">Maka Al-Mukarama Road<br/>Mogadishu, Somalia</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-slate-100 p-2.5 rounded-lg text-slate-600 shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <p className="font-medium text-slate-800">Hours</p>
                <p className="text-slate-600">Open Daily: 6:30 AM - 12:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map / Form */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" id="name" required className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition placeholder:text-slate-400" placeholder="Ali Ahmed" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone / WhatsApp Number</label>
                <input type="tel" id="phone" required className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition placeholder:text-slate-400" placeholder="+252..." />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
              <select id="subject" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition bg-white">
                <option>General Inquiry</option>
                <option>Request a specific drug</option>
                <option>Consultation</option>
                <option>Bulk NGO Order</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
              <textarea id="message" rows={5} required className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition placeholder:text-slate-400" placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-colors">
              Send Message
            </button>
          </form>

          <div className="mt-12 rounded-xl overflow-hidden h-64 bg-slate-200">
            {/* Simple map placeholder - in production replace with real Google Maps iframe */}
            <div className="w-full h-full relative flex items-center justify-center bg-slate-100 border border-slate-200">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Map area" />
              <div className="bg-white px-4 py-2 rounded-lg shadow font-medium text-slate-800 relative z-10 flex items-center gap-2">
                <MapPin className="text-emerald-600" size={18} /> Maka Al-Mukarama Road
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
