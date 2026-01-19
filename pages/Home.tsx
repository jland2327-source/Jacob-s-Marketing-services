
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const services = [
    {
      title: "Web Development",
      desc: "Stunning, high-performance websites built to convert visitors into loyal customers.",
      link: "/web-dev",
      image: "https://picsum.photos/seed/webdev/800/600",
      icon: "🌐"
    },
    {
      title: "Ad Campaigns",
      desc: "Strategic paid advertising that dominates searches and social feeds.",
      link: "/advertising",
      image: "https://picsum.photos/seed/ads/800/600",
      icon: "🎯"
    },
    {
      title: "In-Store Content",
      desc: "Captivating visual assets for your physical location created by pro photographers.",
      link: "/in-store",
      image: "https://picsum.photos/seed/instore/800/600",
      icon: "📸"
    },
    {
      title: "Optimization",
      desc: "Fine-tuning your existing digital presence for peak performance and speed.",
      link: "/tweaks",
      image: "https://picsum.photos/seed/optim/800/600",
      icon: "⚡"
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/business/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-slate-900/50 to-slate-900' : 'bg-gradient-to-b from-white/50 to-white'}`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className={`text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Accelerate Your <span className="text-indigo-600">Digital Evolution</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-10 leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              We provide enterprise-grade marketing and development services designed to scale your business in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/web-dev" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-indigo-700 transition-all transform hover:scale-105">
                Explore Our Services
              </Link>
              <button className={`px-8 py-4 rounded-full font-bold border-2 transition-all ${theme === 'dark' ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-slate-200 text-slate-900 hover:bg-slate-50'}`}>
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>What We Do Best</h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Full-spectrum digital marketing solutions tailored to your unique business goals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <Link key={idx} to={service.link} className={`group block overflow-hidden rounded-3xl border transition-all hover:shadow-2xl hover:-translate-y-2 ${
              theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50'
            }`}>
              <div className="relative h-64 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-2xl text-2xl">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{service.desc}</p>
                <span className="text-indigo-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                  Learn more <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className={`py-24 ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Results Driven. <br/>Data Informed.</h2>
              <p className={`text-lg mb-8 leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                We don't just create content; we build assets that generate revenue. Our multidisciplinary team combines technical excellence with creative flair to ensure your brand stands out in a crowded digital marketplace.
              </p>
              <div className="space-y-4">
                {[
                  "10+ Years of Industry Experience",
                  "250+ Successful Website Launches",
                  "Over $10M in Managed Ad Spend",
                  "Custom-tailored Strategic Plans"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span className={`font-medium ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/10 rounded-3xl blur-2xl"></div>
              <img src="https://picsum.photos/seed/team/800/800" alt="Our Team" className="relative rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
