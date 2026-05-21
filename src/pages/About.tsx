import React from 'react';
import { ShieldCheck, Users, HeartPulse, Clock } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto pb-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          About <span className="text-emerald-600">DurDur Pharmacy</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We are dedicated to providing the people of Mogadishu with affordable, high-quality, and completely genuine medical supplies.
        </p>
      </div>

      {/* Story */}
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Story</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Established with a core mission to improve healthcare accessibility in Somalia, DurDur Pharmacy has been a trusted cornerstone in the Mogadishu community.
          </p>
          <p>
            We realized that finding reliable, authentic medications quickly was a significant challenge for many families. To solve this, we built a pharmacy model that prioritizes strict supply-chain verification and fast, communicative delivery. Today, hundreds of families rely on our WhatsApp ordering system to get the medications they need, exactly when they need them.
          </p>
          <p>
            Our team of licensed pharmacists doesn't just sell medicine—we provide counsel, ensure safe interactions, and stand by our patients on their journey back to health.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex gap-4 items-start">
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 shrink-0">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Uncompromised Quality</h3>
            <p className="text-slate-600">Every single drug we stock comes from certified distributors. We have a zero-tolerance policy for counterfeit medicine.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 shrink-0">
            <Clock size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Speed & Convenience</h3>
            <p className="text-slate-600">Your health can't wait. We've optimized our process through WhatsApp to ensure immediate response and fast delivery within Mogadishu.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 shrink-0">
            <Users size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Patient First</h3>
            <p className="text-slate-600">We treat our customers like family. Our licensed staff is always ready to consult and advise on your prescriptions securely.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 shrink-0">
            <HeartPulse size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Community Impact</h3>
            <p className="text-slate-600">We work actively alongside local NGOs and clinics to provide bulk supplies and support health initiatives in Somalia.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
