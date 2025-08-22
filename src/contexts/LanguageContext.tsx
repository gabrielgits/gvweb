import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'pt';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.resume': 'Resume',
    'nav.timeline': 'Timeline',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Gabriel Vieira',
    'hero.subtitle': 'Turning Ideas Into Impact Through Code',
    'hero.description': 'From winning inventor competitions in Angola to leading IT transformations that boost business performance by 60%—I craft digital solutions that don\'t just work, they work brilliantly. Ready to bring your vision to life?',
    'hero.cta.work': 'Explore My Journey',
    'hero.cta.cv': 'Download CV',
    
    // About Section
    'about.title': 'About Me',
    'about.heading': 'From Angola to America: A Decade of Innovation',
    'about.p1': "Hi! I'm Gabriel, a passionate technologist who discovered the magic of coding in college and never looked back. What started as curiosity in Angola became a journey that led me from founding my own software company to transforming railway operations, and now pursuing advanced studies in the USA.",
    'about.p2': "I don't just write code—I solve real-world problems. Whether it's boosting business performance by 60% through digital transformation or creating mobile apps that serve thousands of users, I bring both technical expertise and business acumen to every project. My goal? Making technology work beautifully for people.",
    'about.skills': 'My Technical Arsenal',
    
    // Portfolio Section
    'portfolio.title': 'Impact Through Innovation',
    'portfolio.description': 'Real projects, real results. Each solution tells a story of challenges overcome and businesses transformed through strategic technology implementation.',
    'portfolio.demo': 'Live Demo',
    'portfolio.github': 'View Code',
    
    // Resume Section
    'resume.title': 'Resume',
    'resume.download': 'Download CV',
    'resume.experience': 'Experience',
    'resume.education': 'Education',
    'resume.projects': 'Academic Projects',
    'resume.certifications': 'Certifications',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': "I'm always open to discussing new opportunities, interesting projects, or potential collaborations.",
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.connect': 'Connect With Me',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.placeholder.name': 'Your full name',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.message': 'Tell me about your project or opportunity...',
    'contact.form.success': "Thank you for your message! I've received it and will get back to you soon. Please check your email for confirmation.",
    
    // Projects
    'project.railway.title': 'Digital Railway Revolution',
    'project.railway.description': 'Transformed traditional ticketing into a seamless mobile experience. This cross-platform app didn\'t just digitize sales—it revolutionized operations, cutting costs while boosting revenue by 60%. Now on Google Play serving thousands.',
    'project.performance.title': 'Smart HR Analytics Platform',
    'project.performance.description': 'Replaced outdated evaluation methods with intelligent performance tracking. Built with Laravel, this system brought transparency and efficiency to workforce management, enabling data-driven HR decisions.',
    'project.mobile.title': 'Customer Experience Engine',
    'project.mobile.description': 'Created a native Android masterpiece that transformed customer relationships. Using Kotlin and Firebase, achieved 25% business growth by making every interaction delightful and efficient.',
    'project.bform.title': 'Developer Productivity Multiplier',
    'project.bform.description': 'Solved a global Flutter development pain point. This pub.dev package streamlines UI creation, reducing development time by 30% for developers worldwide—because great tools enable great software.',
    'project.portal.title': 'Digital Business Gateway',
    'project.portal.description': 'Bridged the gap between company and customers with a sophisticated Laravel/VueJS portal. More than a website—it\'s a business growth engine that drove 20% revenue increase.',
    'project.inventory.title': 'Intelligent Inventory Command Center',
    'project.inventory.description': 'Engineered precision into chaos. This C++/MySQL system transformed inventory management from guesswork into science, enabling real-time visibility across stock, sales, and operations.',
    
    // Timeline Section
    'timeline.title': 'My Journey',
    'timeline.subtitle': 'A decade of growth, learning, and achievement in technology and leadership',
    'timeline.university.title': 'Started Computer Science Journey',
    'timeline.university.description': 'Began my Computer Science degree at Katyavala Bwila University in Benguela, laying the foundation for my technical career.',
    'timeline.inventor.title': 'Innovation Recognition',
    'timeline.inventor.description': 'Achieved second place in the college inventor\'s event, showcasing early problem-solving and creative thinking skills.',
    'timeline.graduation.title': 'Academic Excellence',
    'timeline.graduation.description': 'Graduated with maximum grade in software programming curriculum, demonstrating technical mastery and dedication.',
    'timeline.company.title': 'Founded GB-Softwares',
    'timeline.company.description': 'Chose entrepreneurship over teaching, establishing my own software development company to pursue innovative solutions.',
    'timeline.engineer.title': 'Software Engineer at Railway',
    'timeline.engineer.description': 'Joined Benguela Railway as Software Engineer, gaining valuable experience in public sector technology solutions.',
    'timeline.leader.title': 'IT Leadership Role',
    'timeline.leader.description': 'Promoted to Team Lead and IT Director at Benguela Railway, leading digital transformation initiatives that boosted performance by 60%.',
    'timeline.masters.title': 'Master\'s Degree Pursuit',
    'timeline.masters.description': 'Currently pursuing Master of Science in Computer Science at Maharishi International University, USA, advancing expertise in cutting-edge technologies.',
    'timeline.cta.description': 'Ready to bring this experience to your next project?',
    'timeline.cta.resume': 'View Full Resume',
    'timeline.cta.contact': 'Let\'s Talk'
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.portfolio': 'Portfólio',
    'nav.resume': 'Currículo',
    'nav.timeline': 'Cronologia',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Gabriel Vieira',
    'hero.subtitle': 'Transformando Ideias em Impacto Através do Código',
    'hero.description': 'Desde ganhar competições de inventores em Angola até liderar transformações de TI que aumentam o desempenho empresarial em 60%—crio soluções digitais que não apenas funcionam, funcionam brilhantemente. Pronto para dar vida à sua visão?',
    'hero.cta.work': 'Explorar a Minha Jornada',
    'hero.cta.cv': 'Descarregar CV',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.heading': 'De Angola aos EUA: Uma Década de Inovação',
    'about.p1': 'Olá! Sou o Gabriel, um tecnólogo apaixonado que descobriu a magia da programação na universidade e nunca mais parou. O que começou como curiosidade em Angola tornou-se numa jornada que me levou desde fundar a minha própria empresa de software até transformar operações ferroviárias, e agora seguir estudos avançados nos EUA.',
    'about.p2': 'Não escrevo apenas código—resolvo problemas do mundo real. Seja aumentando o desempenho empresarial em 60% através de transformação digital ou criando aplicações móveis que servem milhares de utilizadores, trago tanto expertise técnica como visão empresarial a cada projeto. O meu objetivo? Fazer a tecnologia funcionar lindamente para as pessoas.',
    'about.skills': 'O Meu Arsenal Técnico',
    
    // Portfolio Section
    'portfolio.title': 'Impacto Através da Inovação',
    'portfolio.description': 'Projetos reais, resultados reais. Cada solução conta uma história de desafios superados e negócios transformados através da implementação estratégica de tecnologia.',
    'portfolio.demo': 'Demo ao Vivo',
    'portfolio.github': 'Ver Código',
    
    // Resume Section
    'resume.title': 'Currículo',
    'resume.download': 'Descarregar CV',
    'resume.experience': 'Experiência',
    'resume.education': 'Educação',
    'resume.projects': 'Projetos Académicos',
    'resume.certifications': 'Certificações',
    
    // Contact Section
    'contact.title': 'Entre em Contacto',
    'contact.description': 'Estou sempre disponível para discutir novas oportunidades, projetos interessantes ou possíveis colaborações.',
    'contact.info': 'Informações de Contacto',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
    'contact.connect': 'Conecte-se Comigo',
    'contact.form.name': 'Nome Completo',
    'contact.form.email': 'Endereço de Email',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.placeholder.name': 'O seu nome completo',
    'contact.form.placeholder.email': 'seu.email@exemplo.com',
    'contact.form.placeholder.message': 'Conte-me sobre o seu projeto ou oportunidade...',
    'contact.form.success': 'Obrigado pela sua mensagem! Recebi-a e entrarei em contacto consigo em breve. Por favor, verifique o seu email para confirmação.',
    
    // Projects
    'project.railway.title': 'Revolução Digital Ferroviária',
    'project.railway.description': 'Transformei a bilhetagem tradicional numa experiência móvel perfeita. Esta app multiplataforma não apenas digitalizou vendas—revolucionou operações, cortando custos enquanto aumentou receitas em 60%. Agora na Google Play servindo milhares.',
    'project.performance.title': 'Plataforma Inteligente de Análise RH',
    'project.performance.description': 'Substituí métodos de avaliação desatualizados por acompanhamento inteligente de desempenho. Construído com Laravel, este sistema trouxe transparência e eficiência à gestão de recursos humanos, permitindo decisões baseadas em dados.',
    'project.mobile.title': 'Motor de Experiência do Cliente',
    'project.mobile.description': 'Criei uma obra-prima Android nativa que transformou relações com clientes. Usando Kotlin e Firebase, alcancei 25% de crescimento empresarial tornando cada interação deliciosa e eficiente.',
    'project.bform.title': 'Multiplicador de Produtividade para Programadores',
    'project.bform.description': 'Resolvi um problema global de desenvolvimento Flutter. Este pacote pub.dev simplifica a criação de UI, reduzindo tempo de desenvolvimento em 30% para programadores mundialmente—porque grandes ferramentas permitem grande software.',
    'project.portal.title': 'Portal Digital de Negócios',
    'project.portal.description': 'Conectei empresa e clientes com um portal sofisticado Laravel/VueJS. Mais que um website—é um motor de crescimento empresarial que gerou 20% de aumento de receitas.',
    'project.inventory.title': 'Centro de Comando Inteligente de Inventário',
    'project.inventory.description': 'Engenhei precisão no caos. Este sistema C++/MySQL transformou gestão de inventário de adivinhação em ciência, permitindo visibilidade em tempo real de stock, vendas e operações.',
    
    // Timeline Section
    'timeline.title': 'A Minha Jornada',
    'timeline.subtitle': 'Uma década de crescimento, aprendizagem e conquistas em tecnologia e liderança',
    'timeline.university.title': 'Início da Jornada em Ciências da Computação',
    'timeline.university.description': 'Comecei o meu curso de Ciências da Computação na Universidade Katyavala Bwila em Benguela, estabelecendo a base para a minha carreira técnica.',
    'timeline.inventor.title': 'Reconhecimento pela Inovação',
    'timeline.inventor.description': 'Alcancei o segundo lugar no evento de inventores da faculdade, demonstrando capacidades precoces de resolução de problemas e pensamento criativo.',
    'timeline.graduation.title': 'Excelência Académica',
    'timeline.graduation.description': 'Graduei-me com nota máxima no currículo de programação de software, demonstrando domínio técnico e dedicação.',
    'timeline.company.title': 'Fundei a GB-Softwares',
    'timeline.company.description': 'Escolhi o empreendedorismo em vez do ensino, estabelecendo a minha própria empresa de desenvolvimento de software para perseguir soluções inovadoras.',
    'timeline.engineer.title': 'Engenheiro de Software no Caminho de Ferro',
    'timeline.engineer.description': 'Juntei-me ao Caminho de Ferro de Benguela como Engenheiro de Software, ganhando experiência valiosa em soluções tecnológicas do sector público.',
    'timeline.leader.title': 'Cargo de Liderança em TI',
    'timeline.leader.description': 'Promovido a Team Lead e Director de TI no Caminho de Ferro de Benguela, liderando iniciativas de transformação digital que aumentaram o desempenho em 60%.',
    'timeline.masters.title': 'Pursuit do Mestrado',
    'timeline.masters.description': 'Atualmente a cursar Mestrado em Ciências da Computação na Universidade Internacional Maharishi, EUA, avançando a expertise em tecnologias de ponta.',
    'timeline.cta.description': 'Pronto para trazer esta experiência ao seu próximo projeto?',
    'timeline.cta.resume': 'Ver Currículo Completo',
    'timeline.cta.contact': 'Vamos Conversar'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

