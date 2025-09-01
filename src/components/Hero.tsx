import { useLanguage } from '../hooks/useLanguage';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const highlighterAnimation = {
  animation: 'highlighterColors 4s ease-in-out infinite'
};

const keyframes = `
@keyframes highlighterColors {
  0% { 
    background: #ffff00;
    box-shadow: 0 0 20px #ffff00, 0 0 40px #ffff00, 0 0 60px #ffff00;
  }
  20% { 
    background: #ff1493;
    box-shadow: 0 0 20px #ff1493, 0 0 40px #ff1493, 0 0 60px #ff1493;
  }
  40% { 
    background: #00ff00;
    box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px #00ff00;
  }
  60% { 
    background: #ff8c00;
    box-shadow: 0 0 20px #ff8c00, 0 0 40px #ff8c00, 0 0 60px #ff8c00;
  }
  80% { 
    background: #00ffff;
    box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff;
  }
  100% { 
    background: #ffff00;
    box-shadow: 0 0 20px #ffff00, 0 0 40px #ffff00, 0 0 60px #ffff00;
  }
}
`;

const Hero = ({ setCurrentPage }: HeroProps) => {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <style>{keyframes}</style>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-electric-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neon-blue/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8 mt-16">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full flex items-center justify-center" style={highlighterAnimation}>
              <div className="w-36 h-36 rounded-full bg-slate-900 flex items-center justify-center border-4 border-slate-700">
                <span className="text-5xl font-bold text-white font-heading drop-shadow-lg">GV</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-heading">
            {t('hero.title')}
          </h1>
          
          <div className="mb-10 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-electric-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-neon-blue transition-all duration-300">
                <img 
                  src="/qr-code.png" 
                  alt="QR Code" 
                  className="w-48 h-48 mx-auto rounded-lg"
                />
                <p className="text-slate-400 text-center mt-4 text-sm font-medium">
                  {t('hero.qr.text')}
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-slate-300 mb-10 max-w-4xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setCurrentPage('timeline')}
              className="bg-gradient-to-r from-neon-blue to-electric-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-electric-500 hover:to-neon-blue transition-all duration-300 shadow-lg shadow-neon-blue/25 hover:shadow-xl hover:shadow-neon-blue/40 transform hover:scale-105"
            >
              {t('hero.cta.work')}
            </button>
            <a 
              href="/resume.pdf" 
              download="Gabriel_Vieira_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-neon-blue text-neon-blue px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-slate-900 hover:text-electric-600 hover:border-electric-600 hover:shadow-lg hover:shadow-electric-600/25"
            >
              {t('hero.cta.cv')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;