import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { name: t('nav.home'), key: 'home' },
    { name: t('nav.about'), key: 'about' },
    { name: t('nav.portfolio'), key: 'portfolio' },
    { name: t('nav.resume'), key: 'resume' },
    { name: t('nav.timeline'), key: 'timeline' },
    { name: t('nav.contact'), key: 'contact' },
  ];

  const handlePageChange = (pageKey: string) => {
    setCurrentPage(pageKey);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-xl z-50 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-white font-heading">
              Portfolio
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <div className="flex items-baseline space-x-6">
                {menuItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handlePageChange(item.key)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                      currentPage === item.key
                        ? 'text-blue-400 bg-blue-900/30'
                        : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                      currentPage === item.key ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-4 border-l border-slate-700 pl-6">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-blue-400 focus:outline-none hover:bg-slate-800 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handlePageChange(item.key)}
                className={`block px-3 py-3 text-base font-medium w-full text-left rounded-lg transition-all duration-300 ${
                  currentPage === item.key
                    ? 'text-blue-400 bg-blue-900/30'
                    : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2 border-t border-slate-700 mt-3 pt-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;