const Resume = () => {
  const experiences = [
    {
      company: "CAMINHO DE FERRO DE BENGUEL",
      location: "Angola",
      position: "IT Director",
      period: "01/2019 - 04/2023",
      responsibilities: [
        "Developed Performance Evaluation System using Laravel for efficient and transparent employee competency management",
        "Created Railway Ticketing System available on Google Play Store using Flutter cross-platform technology, reducing costs and boosting company sales by 60%",
        "Developed official mobile app for clients using Kotlin and Firebase, achieving 25% improvement in business performance",
        "Published 'bform' packages available on pub.dev to facilitate UI creation, reducing app development time by 30%",
        "Led software development best practices training across IT departments, increasing team productivity by 20%",
        "Led adoption of agile methodologies establishing sprint cycles, resulting in 15% improvement in project delivery timelines"
      ]
    },
    {
      company: "CAMINHO DE FERRO DE BENGUEL",
      location: "Angola", 
      position: "Software Engineer",
      period: "02/2018 - 01/2019",
      responsibilities: [
        "Built web portal using Laravel framework for backend and VueJS for frontend, resulting in 20% increase in business success",
        "Implemented inventory management system using C++ with MySQL for efficient stock control and management",
        "Created secure RESTful API for invoice system using Express Node.js and Axios for Android App data requests",
        "Developed unit and integration tests using JUnit and Mockito, significantly reducing reported issues"
      ]
    }
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      school: "Maharishi International University",
      location: "Iowa, USA",
      period: "In Progress (Expected 12/2025)",
      courses: "Web Application Programming, Web Application Development, Mobile Application Development, Algorithms"
    },
    {
      degree: "Bachelor's in Computer Science", 
      school: "Universidade Katyavala Bwila",
      location: "Benguela, Angola",
      period: "2016",
      courses: ""
    }
  ];

  const projects = [
    {
      name: "NGame",
      description: "Action-packed aerial combat game that immerses players in the Naruto universe",
      tech: "HTML, CSS, JavaScript",
      year: "2023"
    },
    {
      name: "StudentsM",
      description: "Simple project built with Node.js and Express for efficient student management with CRUD operations",
      tech: "Node.js, Express, MySQL",
      year: "2023"
    },
    {
      name: "RestaurantLite",
      description: "Cross-platform mobile app designed to help restaurant owners manage their food menu, notes/newsletter and personal profile",
      tech: "Node.js, Express, React-Native, MongoDB",
      year: "2023"
    }
  ];

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-primary-950 via-surface-dark to-primary-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-950/30 via-transparent to-accent-950/30"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-heading bg-gradient-to-r from-white via-accent-100 to-accent-200 bg-clip-text text-transparent">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto mb-10 rounded-full"></div>
          <a 
            href="/Gabriel-Vieira-Resume.pdf" 
            download
            className="inline-flex items-center bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-2xl hover:shadow-accent-500/25 transform hover:scale-105 border border-accent-400/20"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-white mb-10 font-heading">Experience</h3>
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-accent-400 pl-8 bg-gradient-to-r from-primary-800/30 to-transparent p-6 rounded-r-xl backdrop-blur-sm">
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-white">{exp.position}</h4>
                    <p className="text-xl text-accent-300 font-semibold">{exp.company}</p>
                    <p className="text-primary-200">{exp.location} • {exp.period}</p>
                  </div>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-primary-100 text-sm flex items-start leading-relaxed">
                        <span className="w-3 h-3 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16 animate-slide-up delay-200">
            <div>
              <h3 className="text-3xl font-bold text-white mb-10 font-heading">Education</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-accent-400 pl-8 bg-gradient-to-r from-primary-800/30 to-transparent p-6 rounded-r-xl backdrop-blur-sm">
                    <h4 className="text-2xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-xl text-accent-300 font-semibold">{edu.school}</p>
                    <p className="text-primary-200">{edu.location} • {edu.period}</p>
                    {edu.courses && (
                      <p className="text-primary-100 text-sm mt-3 leading-relaxed">{edu.courses}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-10 font-heading">Academic Projects</h3>
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-accent-400 pl-8 bg-gradient-to-r from-primary-800/30 to-transparent p-6 rounded-r-xl backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-white">{project.name}</h4>
                    <p className="text-primary-100 text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(', ').map((tech, idx) => (
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
              <h3 className="text-3xl font-bold text-white mb-8 font-heading">Certifications</h3>
              <div className="border-l-4 border-accent-400 pl-8 bg-gradient-to-r from-primary-800/30 to-transparent p-6 rounded-r-xl backdrop-blur-sm">
                <p className="text-primary-100 text-lg">Intensive Cybersecurity Course (06/2022)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;