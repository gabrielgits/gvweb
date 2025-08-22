import { useLanguage } from '../hooks/useLanguage';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const Hero = ({ setCurrentPage }: HeroProps) => {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-electric-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neon-blue/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-12">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-neon-blue to-electric-600 flex items-center justify-center shadow-2xl shadow-neon-blue/25 animate-neon-glow">
              <div className="w-36 h-36 rounded-full bg-slate-900 flex items-center justify-center border-4 border-slate-700">
                <span className="text-5xl font-bold text-neon-blue font-heading">GV</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 font-heading">
            {t('hero.title')}
          </h1>
          
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