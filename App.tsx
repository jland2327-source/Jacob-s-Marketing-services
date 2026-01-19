
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WebDev from './pages/WebDev';
import Advertising from './pages/Advertising';
import InStoreAds from './pages/InStoreAds';
import Tweaks from './pages/Tweaks';
import { Theme } from './types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'light';
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-slate-900', 'text-white');
      document.body.classList.remove('bg-white', 'text-slate-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-white', 'text-slate-900');
      document.body.classList.remove('bg-slate-900', 'text-white');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HashRouter>
        <ScrollToTop />
        <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/web-dev" element={<WebDev />} />
              <Route path="/advertising" element={<Advertising />} />
              <Route path="/in-store" element={<InStoreAds />} />
              <Route path="/tweaks" element={<Tweaks />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  );
};

const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`py-12 mt-20 border-t ${theme === 'dark' ? 'border-slate-800 bg-slate-900 text-slate-400' : 'border-slate-100 bg-slate-50 text-slate-600'}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>NovaDigital</h3>
          <p className="max-w-xs">Elevating brands through strategic digital experiences and high-performance marketing.</p>
        </div>
        <div>
          <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Services</h4>
          <ul className="space-y-2">
            <li><a href="#/web-dev" className="hover:text-indigo-500 transition-colors">Web Development</a></li>
            <li><a href="#/advertising" className="hover:text-indigo-500 transition-colors">Ads & Campaigns</a></li>
            <li><a href="#/in-store" className="hover:text-indigo-500 transition-colors">Content Creation</a></li>
            <li><a href="#/tweaks" className="hover:text-indigo-500 transition-colors">Site Optimization</a></li>
          </ul>
        </div>
        <div>
          <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Contact</h4>
          <p>hello@novadigital.agency</p>
          <p>+1 (555) 123-4567</p>
          <div className="flex space-x-4 mt-4">
            {/* Social icons placeholder */}
            <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 cursor-pointer hover:bg-indigo-200 transition-colors">LN</span>
            <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 cursor-pointer hover:bg-indigo-200 transition-colors">TW</span>
            <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 cursor-pointer hover:bg-indigo-200 transition-colors">IG</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200/10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} NovaDigital Marketing Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default App;
