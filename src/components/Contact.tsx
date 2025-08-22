import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neon-blue/5 via-transparent to-electric-500/10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float delay-500"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-electric-500/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-heading bg-gradient-to-r from-white via-neon-blue to-electric-400 bg-clip-text text-transparent">{t('contact.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-electric-600 mx-auto mb-8 rounded-full shadow-lg shadow-neon-blue/50"></div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-white mb-10 font-heading">{t('contact.info')}</h3>
            
            <div className="space-y-8">
              <div className="flex items-center group hover:bg-primary-800/30 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-accent-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-xl flex items-center justify-center mr-6 group-hover:from-accent-500/30 group-hover:to-accent-600/30 transition-all duration-300 border border-accent-400/20">
                  <svg className="w-8 h-8 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.53a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">{t('contact.email')}</p>
                  <a href="mailto:gabriel.vieira24@outlook.com" className="text-accent-300 hover:text-accent-200 transition-colors duration-300 text-lg">
                    gabriel.vieira24@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group hover:bg-primary-800/30 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-accent-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-xl flex items-center justify-center mr-6 group-hover:from-accent-500/30 group-hover:to-accent-600/30 transition-all duration-300 border border-accent-400/20">
                  <svg className="w-8 h-8 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">{t('contact.phone')}</p>
                  <div className="space-y-1">
                    <a href="tel:+16412339871" className="text-accent-300 hover:text-accent-200 transition-colors duration-300 text-lg block">+1 (641) 233 9871 (USA)</a>
                    <a href="tel:+244943962996" className="text-accent-300 hover:text-accent-200 transition-colors duration-300 text-lg block">+244 943 962 996 (Angola)</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center group hover:bg-primary-800/30 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-accent-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-xl flex items-center justify-center mr-6 group-hover:from-accent-500/30 group-hover:to-accent-600/30 transition-all duration-300 border border-accent-400/20">
                  <svg className="w-8 h-8 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">{t('contact.location')}</p>
                  <p className="text-primary-200 text-lg">Chicago, USA / Angola</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-2xl font-bold text-accent-300 mb-6 font-heading">{t('contact.connect')}</h4>
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/gabrielvieira24/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl flex items-center justify-center hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-accent-500/25 transform hover:scale-110 border border-accent-400/20"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/gabrielgits" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-r from-primary-700 to-primary-800 text-white rounded-xl flex items-center justify-center hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/25 transform hover:scale-110 border border-primary-600/30"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/244943962996" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-110 border border-green-400/20"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="animate-slide-up delay-200">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/30 rounded-xl backdrop-blur-sm">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-200 font-semibold text-lg">{t('contact.form.success')}</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-400/30 rounded-xl backdrop-blur-sm">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-red-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-red-200 font-semibold text-lg">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-to-br from-primary-800/50 to-primary-900/50 p-8 rounded-2xl border border-accent-500/20 backdrop-blur-sm">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-white mb-3">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-primary-800/50 border border-accent-400/30 rounded-xl text-white placeholder-primary-300 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 outline-none transition-all duration-300 backdrop-blur-sm"
                  placeholder={t('contact.form.placeholder.name')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-white mb-3">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-primary-800/50 border border-accent-400/30 rounded-xl text-white placeholder-primary-300 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 outline-none transition-all duration-300 backdrop-blur-sm"
                  placeholder={t('contact.form.placeholder.email')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-white mb-3">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-primary-800/50 border border-accent-400/30 rounded-xl text-white placeholder-primary-300 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder={t('contact.form.placeholder.message')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg ${
                  isSubmitting
                    ? 'bg-primary-600 cursor-not-allowed text-primary-300'
                    : 'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 shadow-2xl hover:shadow-accent-500/25 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-primary-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  t('contact.form.send')
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;