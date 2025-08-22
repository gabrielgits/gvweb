import { useLanguage } from '../hooks/useLanguage';

interface TimelineProps {
  setCurrentPage?: (page: string) => void;
}

const Timeline = ({ setCurrentPage }: TimelineProps) => {
  const { t } = useLanguage();

  const timelineEvents = [
    {
      year: '2011',
      title: t('timeline.university.title'),
      description: t('timeline.university.description'),
      type: 'education',
      icon: '🎓'
    },
    {
      year: '2014',
      title: t('timeline.inventor.title'),
      description: t('timeline.inventor.description'),
      type: 'achievement',
      icon: '🏆'
    },
    {
      year: '2016',
      title: t('timeline.graduation.title'),
      description: t('timeline.graduation.description'),
      type: 'achievement',
      icon: '⭐'
    },
    {
      year: '2017',
      title: t('timeline.company.title'),
      description: t('timeline.company.description'),
      type: 'career',
      icon: '🚀'
    },
    {
      year: '2018',
      title: t('timeline.engineer.title'),
      description: t('timeline.engineer.description'),
      type: 'career',
      icon: '💼'
    },
    {
      year: '2019',
      title: t('timeline.leader.title'),
      description: t('timeline.leader.description'),
      type: 'career',
      icon: '👨‍💼'
    },
    {
      year: '2025',
      title: t('timeline.masters.title'),
      description: t('timeline.masters.description'),
      type: 'education',
      icon: '🎯'
    }
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500/20 border-blue-400 text-blue-300';
      case 'achievement':
        return 'bg-yellow-500/20 border-yellow-400 text-yellow-300';
      case 'career':
        return 'bg-green-500/20 border-green-400 text-green-300';
      default:
        return 'bg-gray-500/20 border-gray-400 text-gray-300';
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading">
            {t('timeline.title')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {t('timeline.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg shadow-blue-500/25"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}>
                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 border ${getTypeStyles(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                      {event.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                {/* Central circle with year */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25 border-4 border-slate-900">
                    <div className="w-16 h-16 bg-slate-900 rounded-full flex flex-col items-center justify-center">
                      <span className="text-2xl">{event.icon}</span>
                      <span className="text-xs font-bold text-blue-400">{event.year}</span>
                    </div>
                  </div>
                </div>
                
                {/* Empty space on opposite side for balance */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <p className="text-lg text-slate-400 mb-8">
            {t('timeline.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/resume.pdf" 
              download="Gabriel_Vieira_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:scale-105"
            >
              {t('timeline.cta.resume')}
            </a>
            <button 
              onClick={() => setCurrentPage?.('contact')}
              className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
            >
              {t('timeline.cta.contact')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;