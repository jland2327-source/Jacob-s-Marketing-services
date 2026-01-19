
import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const InStoreAds: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const gallery = [
    "https://picsum.photos/seed/photo1/800/1000",
    "https://picsum.photos/seed/photo2/800/500",
    "https://picsum.photos/seed/photo3/800/500",
    "https://picsum.photos/seed/photo4/800/1000",
  ];

  return (
    <div className="pb-20">
      <header className={`py-24 relative overflow-hidden ${theme === 'dark' ? 'bg-indigo-950' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className={`text-4xl md:text-6xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              In-Store Content <br/>& Photography
            </h1>
            <p className={`text-xl mb-10 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              High-end visual assets captured on-site. We bring our professional photographers and videographers to your location to create authentic, high-impact marketing materials.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block">
           <img src="https://picsum.photos/seed/camera/800/1200" alt="Photography" className="w-full h-full object-cover opacity-60" />
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>The On-Site Advantage</h2>
          <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>Stock photos don't build trust. Real imagery of your space, team, and products does.</p>
        </div>

        <div className="columns-1 md:columns-2 gap-8 space-y-8 mb-24">
          {gallery.map((img, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-auto" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Product Shoots", desc: "Clean, high-resolution product photography for e-commerce and catalogs." },
            { title: "Lifestyle Video", desc: "Short-form video content perfect for Instagram Reels and TikTok." },
            { title: "Brand Portraits", desc: "Professional headshots and team photos that humanize your brand." }
          ].map((feature, i) => (
            <div key={i} className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-slate-800' : 'bg-white shadow-xl'}`}>
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl mb-4">📸</div>
              <h4 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h4>
              <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InStoreAds;
