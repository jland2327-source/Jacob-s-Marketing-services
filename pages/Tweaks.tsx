
import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Tweaks: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const transformations = [
    {
      name: "Performance Overhaul",
      before: "34 Score",
      after: "98 Score",
      description: "Optimized images, removed bloat, and implemented advanced caching.",
      img: "https://picsum.photos/seed/speed/800/400"
    },
    {
      name: "UX Modernization",
      before: "2.1% Conv.",
      after: "5.4% Conv.",
      description: "Restructured navigation and simplified the checkout flow.",
      img: "https://picsum.photos/seed/ux/800/400"
    }
  ];

  return (
    <div className="pb-20">
      <header className={`py-24 ${theme === 'dark' ? 'bg-emerald-950/20' : 'bg-emerald-50'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className={`text-4xl md:text-6xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Optimization <br/>& Performance
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            Don't let a slow website kill your conversions. We specialize in fine-tuning existing websites to reach their full potential.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">🚀</div>
            <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Speed Injection</h3>
            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>Reduce load times by up to 70% with our technical optimization protocol.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">🔍</div>
            <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>SEO Audit</h3>
            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>Fix technical errors that are preventing you from ranking on the first page.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">🛠️</div>
            <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Minor Repairs</h3>
            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>Fix broken links, outdated plugins, and messy layout issues in hours, not weeks.</p>
          </div>
        </div>

        <h2 className={`text-3xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Before & After Results</h2>
        <div className="space-y-16">
          {transformations.map((item, i) => (
            <div key={i} className={`rounded-3xl overflow-hidden border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-xl'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.name}</h3>
                  <p className={`mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</p>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-sm font-bold uppercase text-slate-500 mb-1">Before</p>
                      <p className="text-2xl font-black text-red-500">{item.before}</p>
                    </div>
                    <div className="w-px bg-slate-200 dark:bg-slate-700"></div>
                    <div>
                      <p className="text-sm font-bold uppercase text-slate-500 mb-1">After</p>
                      <p className="text-2xl font-black text-emerald-500">{item.after}</p>
                    </div>
                  </div>
                </div>
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tweaks;
