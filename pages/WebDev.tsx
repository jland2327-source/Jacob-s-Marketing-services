
import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const WebDev: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const portfolio = [
    { title: "Luxe Real Estate", type: "E-commerce", img: "https://picsum.photos/seed/realestate/600/400" },
    { title: "FitLife SaaS", type: "Subscription Platform", img: "https://picsum.photos/seed/fit/600/400" },
    { title: "Gourmet Hub", type: "Restaurant Network", img: "https://picsum.photos/seed/food/600/400" },
    { title: "ZenSpace App", type: "Wellness Portal", img: "https://picsum.photos/seed/zen/600/400" },
  ];

  return (
    <div className="pb-20">
      <header className={`py-24 ${theme === 'dark' ? 'bg-slate-800' : 'bg-indigo-50'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className={`text-4xl md:text-6xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Website Development <br/>& Ready-to-Scale Sales
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            We build lightning-fast, conversion-optimized websites from scratch, or you can purchase one of our pre-built, high-performing digital assets.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
            <img src="https://picsum.photos/seed/code/800/600" alt="Development Process" className="rounded-3xl shadow-2xl" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Development Philosophy</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h4 className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Custom Tech Stack</h4>
                  <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>We use React, Next.js, and Tailwind CSS to ensure your site is fast, SEO-friendly, and maintainable.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h4 className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Conversion First</h4>
                  <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>Every element is placed strategically to lead the user towards your primary call to action.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h4 className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Mobile Excellence</h4>
                  <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>Over 60% of traffic is mobile. We design for the thumb first, desktop second.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className={`text-3xl font-bold mb-10 text-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Featured Work & Assets for Sale</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, i) => (
              <div key={i} className={`group relative rounded-2xl overflow-hidden border ${theme === 'dark' ? 'border-slate-800 bg-slate-900' : 'border-slate-100 bg-white'}`}>
                <div className="aspect-video overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">{item.type}</span>
                  <h4 className={`font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-3xl p-12 text-center ${theme === 'dark' ? 'bg-indigo-900/20 border border-indigo-500/20' : 'bg-indigo-600 text-white shadow-2xl shadow-indigo-200'}`}>
          <h3 className="text-3xl font-bold mb-4">Interested in a pre-built asset?</h3>
          <p className="text-lg mb-8 opacity-90">Skip the 4-week dev cycle and start generating revenue today with our turnkey solutions.</p>
          <button className={`px-10 py-4 rounded-full font-bold transition-all ${theme === 'dark' ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white text-indigo-600 hover:bg-slate-50'}`}>
            View Sales Catalog
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebDev;
