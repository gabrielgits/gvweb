import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();
  const skills = [
    'Flutter & Dart',
    'React Native',
    'Kotlin & Java',
    'React & TypeScript',
    'Node.js & Express',
    'Laravel & PHP',
    'MySQL & MongoDB',
    'REST APIs & Firebase'
  ];

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden flex items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-electric-500/10 via-transparent to-neon-purple/10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-electric-500/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-heading bg-gradient-to-r from-white via-neon-blue to-electric-400 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-electric-600 mx-auto rounded-full shadow-lg shadow-neon-blue/50"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="w-96 h-96 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-neon-blue/20 via-electric-500/10 to-neon-purple/20 flex items-center justify-center shadow-2xl shadow-neon-blue/25 backdrop-blur-sm border border-neon-blue/20">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-neon-blue/30 shadow-inner">
                <span className="text-8xl animate-float">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up delay-200">
            <h3 className="text-3xl font-bold text-white mb-8 font-heading">{t('about.heading')}</h3>
            <p className="text-slate-300 mb-6 leading-relaxed text-lg">
              {t('about.p1')}
            </p>
            <p className="text-slate-300 mb-10 leading-relaxed text-lg">
              {t('about.p2')}
            </p>
            
            <div>
              <h4 className="text-2xl font-bold text-neon-blue mb-6 font-heading">{t('about.skills')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center group hover:bg-slate-800/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-neon-blue/30 hover:shadow-lg hover:shadow-neon-blue/10">
                    <div className="w-3 h-3 bg-gradient-to-r from-neon-blue to-electric-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-neon-blue/50"></div>
                    <span className="text-slate-200 font-medium group-hover:text-neon-blue transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;