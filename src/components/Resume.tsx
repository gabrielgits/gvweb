import { useLanguage } from '../contexts/LanguageContext';

const Resume = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      companyKey: "resume.experience.company1",
      locationKey: "resume.experience.location1",
      positionKey: "resume.experience.position1",
      periodKey: "resume.experience.period1",
      responsibilityKeys: [
        "resume.experience.resp1.1",
        "resume.experience.resp1.2",
        "resume.experience.resp1.3",
        "resume.experience.resp1.4",
        "resume.experience.resp1.5",
        "resume.experience.resp1.6"
      ]
    },
    {
      companyKey: "resume.experience.company1",
      locationKey: "resume.experience.location1", 
      positionKey: "resume.experience.position2",
      periodKey: "resume.experience.period2",
      responsibilityKeys: [
        "resume.experience.resp2.1",
        "resume.experience.resp2.2",
        "resume.experience.resp2.3",
        "resume.experience.resp2.4"
      ]
    }
  ];

  const education = [
    {
      degreeKey: "resume.education.degree1",
      schoolKey: "resume.education.school1",
      locationKey: "resume.education.location1",
      periodKey: "resume.education.period1",
      coursesKey: "resume.education.courses1"
    },
    {
      degreeKey: "resume.education.degree2", 
      schoolKey: "resume.education.school2",
      locationKey: "resume.education.location2",
      periodKey: "resume.education.period2",
      coursesKey: ""
    }
  ];

  const projects = [
    {
      nameKey: "resume.project1.name",
      descriptionKey: "resume.project1.description",
      techKey: "resume.project1.tech",
      yearKey: "resume.project1.year"
    },
    {
      nameKey: "resume.project2.name",
      descriptionKey: "resume.project2.description",
      techKey: "resume.project2.tech",
      yearKey: "resume.project2.year"
    },
    {
      nameKey: "resume.project3.name",
      descriptionKey: "resume.project3.description",
      techKey: "resume.project3.tech",
      yearKey: "resume.project3.year"
    }
  ];

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-primary-950 via-surface-dark to-primary-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-950/30 via-transparent to-accent-950/30"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-heading bg-gradient-to-r from-white via-accent-100 to-accent-200 bg-clip-text text-transparent">{t('resume.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto mb-10 rounded-full"></div>
          <a 
            href="/Gabriel-Vieira-Resume.pdf" 
            download
            className="inline-flex items-center bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-2xl hover:shadow-accent-500/25 transform hover:scale-105 border border-accent-400/20"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t('resume.download')}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-white mb-10 font-heading">{t('resume.experience')}</h3>
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-accent-400 pl-8 bg-gradient-to-r from-primary-800/30 to-transparent p-6 rounded-r-xl backdrop-blur-sm">
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-white">{t(exp.positionKey)}</h4>
                    <p className="text-xl text-accent-300 font-semibold">{t(exp.companyKey)}</p>
                    <p className="text-primary-200">{t(exp.locationKey)} • {t(exp.periodKey)}</p>
                  </div>
                  <ul className="space-y-3">
                    {exp.responsibilityKeys.map((respKey, idx) => (
                      <li key={idx} className="text-primary-100 text-sm flex items-start leading-relaxed">
                        <span className="w-3 h-3 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                        {t(respKey)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16 animate-slide-up delay-200">
            <div>
              <h3 className="text-3xl font-bold text-white mb-10 font-heading">{t('resume.education')}</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-accent-400 pl-8 bg-gradient-to-r from-primary-800/30 to-transparent p-6 rounded-r-xl backdrop-blur-sm">
                    <h4 className="text-2xl font-bold text-white">{t(edu.degreeKey)}</h4>
                    <p className="text-xl text-accent-300 font-semibold">{t(edu.schoolKey)}</p>
                    <p className="text-primary-200">{t(edu.locationKey)} • {t(edu.periodKey)}</p>
                    {edu.coursesKey && (
                      <p className="text-primary-100 text-sm mt-3 leading-relaxed">{t(edu.coursesKey)}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-10 font-heading">{t('resume.projects')}</h3>
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-accent-400 pl-8 bg-gradient-to-r from-primary-800/30 to-transparent p-6 rounded-r-xl backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-white">{t(project.nameKey)}</h4>
                    <p className="text-primary-100 text-sm mb-4 leading-relaxed">{t(project.descriptionKey)}</p>
                    <div className="flex flex-wrap gap-2">
                      {t(project.techKey).split(', ').map((tech: string, idx: number) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-accent-500/20 text-accent-200 text-xs font-medium rounded-full border border-accent-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-8 font-heading">{t('resume.certifications')}</h3>
              <div className="border-l-4 border-accent-400 pl-8 bg-gradient-to-r from-primary-800/30 to-transparent p-6 rounded-r-xl backdrop-blur-sm">
                <p className="text-primary-100 text-lg">{t('resume.cert1')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;