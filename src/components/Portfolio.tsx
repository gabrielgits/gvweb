import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      titleKey: "project.railway.title",
      descriptionKey: "project.railway.description",
      tech: ["Flutter", "Dart", "Firebase", "Mobile Development"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop&crop=center",
      demoLink: "https://play.google.com/store",
      githubLink: "#"
    },
    {
      id: 2,
      titleKey: "project.performance.title",
      descriptionKey: "project.performance.description",
      tech: ["Laravel", "PHP", "MySQL", "Web Development"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      titleKey: "project.mobile.title",
      descriptionKey: "project.mobile.description",
      tech: ["Kotlin", "Firebase", "Android", "Mobile Development"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      titleKey: "project.bform.title",
      descriptionKey: "project.bform.description",
      tech: ["Flutter", "Dart", "Package Development", "Open Source"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
      demoLink: "https://pub.dev/packages/bform",
      githubLink: "#"
    },
    {
      id: 5,
      titleKey: "project.portal.title",
      descriptionKey: "project.portal.description",
      tech: ["Laravel", "VueJS", "PHP", "JavaScript", "MySQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      titleKey: "project.inventory.title",
      descriptionKey: "project.inventory.description",
      tech: ["C++", "MySQL", "Desktop Application", "Database Management"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-500/10 via-transparent to-neon-purple/10"></div>
      <div className="absolute top-32 left-32 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-32 w-60 h-60 bg-electric-500/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-heading bg-gradient-to-r from-white via-neon-blue to-electric-400 bg-clip-text text-transparent">{t('portfolio.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-electric-600 mx-auto mb-8 rounded-full shadow-lg shadow-neon-blue/50"></div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {t('portfolio.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl hover:shadow-neon-blue/20 transition-all duration-500 overflow-hidden group border border-neon-blue/20 backdrop-blur-sm animate-slide-up hover:border-neon-blue/40" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-56 bg-slate-700 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-heading group-hover:text-neon-blue transition-colors duration-300">{t(project.titleKey)}</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">{t(project.descriptionKey)}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs font-medium rounded-full border border-neon-blue/30 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-neon-blue to-electric-600 text-white px-6 py-3 rounded-xl text-center text-sm font-semibold hover:from-electric-500 hover:to-neon-blue transition-all duration-300 shadow-lg shadow-neon-blue/25 hover:shadow-neon-blue/40 transform hover:scale-105"
                  >
{t('portfolio.demo')}
                  </a>
                  {project.githubLink ? (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-neon-blue text-neon-blue px-6 py-3 rounded-xl text-center text-sm font-semibold transition-all duration-300 backdrop-blur-sm transform hover:scale-105 hover:bg-neon-blue hover:text-white hover:border-electric-600"
                    >
{t('portfolio.github')}
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="flex-1 border-2 border-slate-600 text-slate-500 px-6 py-3 rounded-xl text-center text-sm font-semibold cursor-not-allowed backdrop-blur-sm"
                    >
                      {t('portfolio.github')}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;