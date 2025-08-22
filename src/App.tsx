import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      case 'timeline':
        return <Timeline setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="min-h-screen">
          {renderCurrentPage()}
        </main>
        <footer className="bg-slate-900 border-t border-slate-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-slate-400 text-sm">
                  © 2024 Gabriel Vieira. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  )
}

export default App
