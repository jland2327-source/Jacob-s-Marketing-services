
import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Advertising: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const stats = [
    { label: "CTR Increase", val: "45%" },
    { label: "Lower CPA", val: "30%" },
    { label: "ROAS Average", val: "4.2x" },
    { label: "Monthly Reach", val: "1.2M+" },
  ];

  return (
    <div className="pb-20">
      <header className={`py-24 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-indigo-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6 inline-block">Paid Media Mastery</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              High-Velocity <br/>Advertising Campaigns
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              We create data-driven advertising strategies that put your brand in front of the right audience at the perfect moment.
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-colors">Start Campaign</button>
            </div>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/ads-hero/800/600" alt="Ad Creative" className="rounded-3xl shadow-2xl border-4 border-slate-800" />
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 p-6 rounded-2xl shadow-xl">
              <p className="text-sm font-bold uppercase opacity-80 mb-1">Total Reach</p>
              <p className="text-3xl font-black">2.5M+</p>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((s, i) => (
            <div key={i} className={`p-8 rounded-3xl border text-center ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-lg'}`}>
              <p className="text-4xl font-black text-indigo-600 mb-2">{s.val}</p>
              <p className={`text-sm font-bold uppercase tracking-wide ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Multi-Channel Supremacy</h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              We don't just run ads; we engineer ecosystems. From Google Search to TikTok Ads, we ensure your message is consistent and optimized for each specific platform.
            </p>
            <ul className="space-y-4">
              {[
                { title: "Meta Advertising", desc: "Facebook & Instagram dominance via visual storytelling." },
                { title: "Google Search & Display", desc: "Intent-based targeting that captures active buyers." },
                { title: "TikTok & UGC", desc: "Viral-ready content that resonates with younger demographics." },
                { title: "Retargeting", desc: "Closing the loop on visitors who didn't convert initially." },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1">✓</div>
                  <div>
                    <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/ad1/400/500" className="rounded-2xl shadow-lg" alt="Creative 1" />
            <img src="https://picsum.photos/seed/ad2/400/500" className="rounded-2xl shadow-lg mt-8" alt="Creative 2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertising;
